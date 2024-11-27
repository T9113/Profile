var i = 0;
var txt = 'I am a passionate and dedicated professional with a strong background in network designing, configuration, website development, and C# programming. With a keen eye for detail and creativity, I strive to craft efficient and innovative solutions that not only meet but exceed expectations. My expertise spans various domains, including frontend and backend development, machine learning, data science, and C#, empowering me to create functional and user - centric designs. I am committed to continuous learning and always stay updated with the latest technologies, ensuring that my work aligns with modern trends and standards.Whether its developing a responsive website, building a robust network infrastructure, creating dynamic applications in C#, or solving complex data problems, I bring a problem - solving mindset and a passion for excellence to every project.';
var speed = 25;

function typeWriter() {
    document.getElementById("myButton").style.display = "none";
    if (i < txt.length) {

        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
document.addEventListener("scroll", function () {
    const section = document.getElementById("h1");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-zoom");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("s1");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("s2");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("s3");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("p1");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("p2");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("p3");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("c1");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("c2");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("c3");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("c4");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("c5");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-zoom");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("c6");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-zoom");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("f1");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("f2");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});
document.addEventListener("scroll", function () {
    const section = document.getElementById("f3");
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight - 100) {
        section.classList.add("w3-animate-right");
    }
});

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Perform validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('comment').value.trim();

        if (!name || !email || !subject || !message) {
            alert('All fields are required!');
            return;
        }

        // Show Thank You Modal
        const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show();

        // Reset the form
        document.getElementById('contactForm').reset();
    });

    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    $('.return-to-top').on('click',function(){
            $('html, body').animate({
            scrollTop: 0
        }, 50);
        return false;
    });
    const messages = ["About Me ", "About My Skill ","About My Project "]; // Texts to display
    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const textElement = document.getElementById("animated-text");
    
        // Get the current message to type
        const currentMessage = messages[currentMessageIndex];
    
        // Update the text content
        if (!isDeleting) {
            textElement.textContent = currentMessage.slice(0, currentCharIndex++);
        } else {
            textElement.textContent = currentMessage.slice(0, currentCharIndex--);
        }
    
        // Adjust speed
        const typingSpeed = isDeleting ? 50 : 100;
    
        // When typing is complete
        if (currentCharIndex === currentMessage.length && !isDeleting) {
            isDeleting = true; // Start deleting after typing
            setTimeout(typeEffect, 1000); // Pause before deleting
        }
        // When deleting is complete
        else if (currentCharIndex === 0 && isDeleting) {
            isDeleting = false; // Start typing the next message
            currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Cycle to the next message
            setTimeout(typeEffect, 500); // Pause before typing the next message
        } else {
            setTimeout(typeEffect, typingSpeed); // Continue typing or deleting
        }
    }
    
    // Start the typing effect
    document.addEventListener("DOMContentLoaded", () => {
        typeEffect();
    });
    
    