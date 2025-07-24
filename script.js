document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded Successfully!");

    // Typing Effect for the About Section
    const textElement = document.getElementById("typing-text");
    if (textElement) {
        const textArray = [
            "I'm a software engineer building secure, innovative solutions.",
            "I research AI & cybersecurity, blending software & security.",
            "My dream? Soaring through the skies—literally & figuratively.",
            "Welcome to my digital world. Let's build something awesome."
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let speed = 50;

        function typeEffect() {
            if (!isDeleting && charIndex < textArray[textIndex].length) {
                textElement.textContent += textArray[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, speed);
            } else if (isDeleting && charIndex > 0) {
                textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeEffect, speed / 2);
            } else {
                if (!isDeleting) {
                    setTimeout(() => {
                        isDeleting = true;
                        typeEffect();
                    }, 2000);
                } else {
                    isDeleting = false;
                    charIndex = 0;
                    textIndex = (textIndex + 1) % textArray.length;
                    setTimeout(typeEffect, speed);
                }
            }
        }
        typeEffect();
    } else {
        console.error("Typing text element not found!");
    }

    // Star Generation
    function createStars() {
        const numStars = 100;
        const bg = document.querySelector(".glitch-bg");

        if (!bg) {
            console.error("Background element not found! Check .glitch-bg in HTML.");
            return;
        }

        for (let i = 0; i < numStars; i++) {
            let star = document.createElement("div");
            star.classList.add("star");

            // Random positioning 
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;

            // Random animation speed
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;

            document.body.appendChild(star);
        }
        console.log(`✅ ${numStars} Stars Created!`);
    }
    createStars();

    // Floating Computer Click Event (Ensure it Exists)
    // const cubeWrapper = document.getElementById(".wrapper");

    // if (cubeWrapper) {
    //     cubeWrapper.addEventListener("click", function () {
    //         let terminal = document.getElementById("terminal");
    //         let output = document.getElementById("terminal-output");
    //         let input = document.getElementById("terminal-input");
    //         let loading = document.querySelector(".terminal-loading");
    //         let loadingFill = document.querySelector(".loading-fill");

    //         console.log("Floating cube clicked! Initializing terminal...");

    //         // Stop floating movement
    //         this.style.animation = "none";
            
    //         terminal.style.display = "flex";
    //         // loadingFill.style.width = "100%";

    //         setTimeout(() => {
    //             loadingFill.style.width = "100%";
    //         }, 100);

    //         // Simulate Boot Sequence with a Delay
    //         setTimeout(() => {
    //             loading.style.display = "none";
    //             document.querySelector(".loading-bar").style.display = "none";
    //             output.style.display = "block";
    //             input.style.display = "block";
    //             output.innerHTML += "<p class='glitch'> Synthwave Console v1.0 Booted Successfully.</p>";
    //             input.focus();
    //         }, 3000);
    //     });
    // } else {
    //     console.error("Floating computer element (.wrapper) not found!");
    // }


    setTimeout(() => {
        const cubeWrapper = document.querySelector(".wrapper");

        if (cubeWrapper) {
            console.log("Cube Found!");

            cubeWrapper.addEventListener("click", function () {
                let terminal = document.getElementById("terminal");
                let output = document.getElementById("terminal-output");
                let input = document.getElementById("terminal-input");
                let loading = document.querySelector(".terminal-loading");
                let loadingFill = document.querySelector(".loading-fill");

                console.log("🖥️ 3D Cube Clicked! Booting Terminal...");

                // Stop floating animation when clicked
                cubeWrapper.style.animation = "none";

                // Show terminal
                terminal.style.display = "flex";

                // Start filling the loading bar
                setTimeout(() => {
                    loadingFill.style.width = "100%";
                }, 100);

                // Simulate Boot Sequence
                setTimeout(() => {
                    loading.style.display = "none";
                    document.querySelector(".loading-bar").style.display = "none";
                    output.style.display = "block";
                    input.style.display = "block";
                    output.innerHTML += "<p class='glitch'> Synthwave Console v1.0 Booted Successfully.</p>";
                    input.focus();
                }, 3000);
            });
        } else {
            console.error("Floating cube element (.wrapper) not found!");
        }
    }, 100); // Delay to allow DOM to fully render

    // Terminal Input Handler
    const terminalInput = document.getElementById("terminal-input");
    if (terminalInput) {
        terminalInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                let command = this.value.trim().toLowerCase();
                let output = document.getElementById("terminal-output");

                output.innerHTML += `<p class="glitch">user@cybersynthwave:~$ ${command}</p>`;

                // Simulated Commands
                if (command === "help") {
                    output.innerHTML += "<p>Available Commands: help, clear, exit, ls, cat, hack</p>";
                } else if (command === "clear") {
                    output.innerHTML = "";
                } else if (command === "exit") {
                    document.getElementById("terminal").style.display = "none";
                
                } else if (command === "ls") {
                    output.innerHTML += "<p> user@cybersynthwave:~$ -rw-r--r--   1 root root  5.6K  secrets.txt</p>";
                    output.innerHTML += "<p> user@cybersynthwave:~$ -rw-r--r--   1 root root  9.3K  confidential.log</p>";
                    output.innerHTML += "<p> user@cybersynthwave:~$ -rw-r--r--   1 root root  3.2K  passwords.db</p>";
                } else if (command.startsWith("cat")) {
                    let fileName = command.split(" ")[1];
                    if (!fileName) {
                        output.innerHTML += "<p>Usage: cat [file]</p>";
                    } else {
                        output.innerHTML += `<p>🔒 ${fileName} is protected. Enter password:</p>`;
                        let passwordInput = document.createElement("input");
                        passwordInput.type = "password";
                        passwordInput.style.background = "transparent";
                        passwordInput.style.color = "#0f0";
                        passwordInput.style.border = "none";
                        passwordInput.style.fontSize = "1.2rem";
                        passwordInput.style.textShadow = "0 0 5px #0f0";
                        passwordInput.autofocus = true;
                        output.appendChild(passwordInput);

                        passwordInput.addEventListener("keypress", function (e) {
                            if (e.key === "Enter") {
                                if (this.value === "cyberpunk2025") {
                                    output.innerHTML += `<p> Access granted to ${fileName}.</p>`;
                                    output.innerHTML += "<p> Secret data: [REDACTED]</p>";
                                } else {
                                    output.innerHTML += `<p> Access Denied. Incorrect password.</p>`;
                                }
                                this.remove();
                            }
                        });
                    }

                } else if (command === "hack") {
                    output.innerHTML += "<p class='glitch'>Accessing secure servers... [COMPLETE]</p>";
                    output.innerHTML += "<p class='glitch'>Bypassing firewalls... [COMPLETE]</p>";
                    output.innerHTML += "<p class='glitch'>Downloading secret data... [COMPLETE]</p>";
                    output.innerHTML += "<p class='glitch'>Hack successful! You've gained access.</p>";
                } else {
                    output.innerHTML += "<p class='glitch'>⚠️ Command not recognized. Type 'help' for options.</p>";
                }

                // Auto-scroll to bottom
                output.scrollTop = output.scrollHeight;
                this.value = "";
            }
        });
    }



});
