        let timer;
        let timeLeft = 1500;
        let isRunning = false;
        
        function updateTimerDisplay() {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            document.getElementById("timer").innerText = 
                `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        
        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(() => {
                    if (timeLeft > 0) {
                        timeLeft--;
                        updateTimerDisplay();
                    } else {
                        clearInterval(timer);
                        alert("Time's up! Take a break.");
                        resetTimer();
                    }
                }, 1000);
            }
        }
        
        function pauseTimer() {
            clearInterval(timer);
            isRunning = false;
        }
        
        function resetTimer() {
            clearInterval(timer);
            isRunning = false;
            timeLeft = parseInt(document.getElementById("time").value);
            updateTimerDisplay();
        }
        
        function setTime() {
            timeLeft = parseInt(document.getElementById("time").value);
            updateTimerDisplay();
        }
        
        function playMusic() {
            let musicSelection = document.getElementById("music").value;
            let audioPlayer = document.getElementById("audioPlayer");
        
            let musicSources = {
                binaural: "https://www.dropbox.com/scl/fi/lp4h04cx45dmbr69tre26/BINAURAL.mp3?rlkey=ij7itzgmuyifegtcjpw2ya5xj&st=hoooh5iq&dl=1",
                classical: "https://www.dropbox.com/scl/fi/d8q3dd561i3zq7ahe4o74/CLASSICAL.mp3?rlkey=pdltpsjjtqbdcglksqx1vdu50&st=se6u23zg&dl=1",
                lofi: "https://www.dropbox.com/scl/fi/jbzrwry7isthowu4jnu9i/LOFI.mp3?rlkey=vnjl6xw11ki4nsms1y81sh9fp&st=86rcoc22&dl=1",
                rain: "https://www.dropbox.com/scl/fi/9uc9osiqec0h9tkavzuaz/RAIN.mp3?rlkey=9fpw9sxrjqq6rv5fda493nvmr&st=q5lwd688&dl=1"
            };
        
            if (musicSelection && musicSources[musicSelection]) {
                audioPlayer.src = musicSources[musicSelection];
                audioPlayer.load();
                audioPlayer.play().catch(error => console.error("Audio playback failed:", error));
            } else {
                audioPlayer.pause();
                audioPlayer.src = "";
                audioPlayer.load();
            }
        }
        
        