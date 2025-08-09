document.addEventListener('DOMContentLoaded', () => {

    // Preloader script
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        window.addEventListener('load', () => {
            loadingScreen.classList.add('hidden');
        });
    }

    // Header and Mobile Navigation
    const navLinks = document.querySelectorAll('.nav-list a');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.nav-list');

    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                }
            }
        });
    });

    // Typing effect for hero section
    const typedTextElement = document.querySelector('.typing-text');
    if (typedTextElement) {
        new Typed('.typing-text', {
            strings: ['Web Developer', 'Java Developer', 'C++ Programmer', 'Student'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Scroll-to-top button functionality
    const scrollTopButton = document.getElementById('scroll-top');

    if (scrollTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopButton.classList.add('show');
            } else {
                scrollTopButton.classList.remove('show');
            }
        });

        scrollTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Dynamic year in footer
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Skill proficiency circle animation
    const skillBoxes = document.querySelectorAll('.skill-box');
    
    skillBoxes.forEach(box => {
        const proficiency = box.dataset.proficiency;
        const percentage = parseInt(proficiency.replace('%', ''));
        
        // Creating the new structure
        // Select the existing HTML elements for the icon and text
        const skillInfo = document.createElement('div');
        skillInfo.classList.add('skill-info');
        skillInfo.innerHTML = box.innerHTML;
        box.innerHTML = '';
        box.appendChild(skillInfo);
        
        const circleContainer = document.createElement('div');
        circleContainer.classList.add('skill-circle-container');
        
        const backgroundElement = document.createElement('div');
        backgroundElement.classList.add('skill-circle-background');
        
        const progressElement = document.createElement('div');
        progressElement.classList.add('skill-circle-progress');
        
        const percentageText = document.createElement('span');
        percentageText.classList.add('skill-percentage');
        percentageText.textContent = proficiency;
        
        circleContainer.appendChild(backgroundElement);
        circleContainer.appendChild(progressElement);
        circleContainer.appendChild(percentageText);
        box.appendChild(circleContainer);

        box.addEventListener('mouseover', () => {
            const rotation = (percentage / 100) * 360;
            progressElement.style.transform = `rotate(${rotation - 90}deg)`;
        });

        box.addEventListener('mouseout', () => {
            progressElement.style.transform = `rotate(-90deg)`;
        });
    });
});