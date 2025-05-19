document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top button
    let scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '▲';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let nameInput = document.getElementById('name');
            let emailInput = document.getElementById('email');
            let messageInput = document.getElementById('message');
            let formMessage = document.getElementById('formMessage');
            let isValid = true;

            formMessage.innerHTML = '';

            if (nameInput.value.trim() === '') {
                displayError(nameInput, 'Please enter your name.');
                isValid = false;
            } else {
                clearError(nameInput);
            }

            if (emailInput.value.trim() === '') {
                displayError(emailInput, 'Please enter your email.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                displayError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            } else {
                clearError(emailInput);
            }

            if (messageInput.value.trim() === '') {
                displayError(messageInput, 'Please enter your message.');
                isValid = false;
            } else {
                clearError(messageInput);
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                formMessage.innerHTML = '<div class="success-message">Your message has been sent successfully!</div>';
                contactForm.reset();
                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 3000);
            }
        });

        function displayError(inputElement, errorMessage) {
            inputElement.classList.add('error');
            let errorSpan = inputElement.nextElementSibling;
            if (!errorSpan || !errorSpan.classList.contains('error-message')) {
                errorSpan = document.createElement('span');
                errorSpan.classList.add('error-message');
                inputElement.parentNode.appendChild(errorSpan);
            }
            errorSpan.textContent = errorMessage;
        }

        function clearError(inputElement) {
            inputElement.classList.remove('error');
            let errorSpan = inputElement.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains('error-message')) {
                errorSpan.remove();
            }
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }

    // Language switch functionality
    const translations = {
        en: {
            home: 'Home',
            about: 'About Me',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            adminPanel: 'Admin Panel',
            heroTitle: 'Hi, I\'m Saeed',
            heroLead: 'A passionate 19-year-old web developer with a solid foundation in front-end technologies and a drive to learn and create innovative web solutions.',
            heroButton1: 'View My Work',
            heroButton2: 'Contact Me',
            aboutTitle: 'About Me',
            aboutParagraph1: 'I am Saeed, a 19-year-old with a deep enthusiasm for the world of programming and web development. I have built a strong foundation in front-end development through hands-on experience with HTML, CSS, and JavaScript. My passion extends to creating user-friendly and visually appealing websites that deliver excellent user experiences. I am currently expanding my skillset by learning WordPress and Elementor, eager to leverage these powerful tools to build dynamic and robust websites.',
            aboutParagraph2: 'My goal is to continuously improve my coding skills and contribute to meaningful projects. I am a quick learner, dedicated to staying up-to-date with the latest web development trends and technologies. I am excited about the opportunity to collaborate on innovative projects and bring creative ideas to life through code.',
            personalName: 'Name:',
            personalEmail: 'Email:',
            personalPhone: 'Phone:',
            personalLocation: 'Location:',
            personalLinkedIn: 'LinkedIn:',
            personalGitHub: 'GitHub:',
            skillsTitle: 'Skills',
            skillHTML: 'HTML',
            skillHTMLDesc: 'Proficient in creating semantic and well-structured HTML5 markup for web pages.',
            skillCSS: 'CSS',
            skillCSSDesc: 'Experienced in styling web pages with CSS3, including responsive design and modern layouts.',
            skillJS: 'JavaScript',
            skillJSDesc: 'Solid understanding of core JavaScript concepts and experience in creating interactive elements.',
            skillWordPress: 'WordPress',
            skillWordPressDesc: 'Currently learning WordPress, including theme customization and plugin integration.',
            skillElementor: 'Elementor',
            skillElementorDesc: 'In the process of mastering Elementor for building visually appealing and functional WordPress websites.',
            projectsTitle: 'Projects',
            project1Title: 'Project 1 Name',
            project1Desc: 'A brief and engaging description of Project 1, highlighting its key features and technologies used.',
            project2Title: 'Project 2 Name',
            project2Desc: 'A concise and compelling description of Project 2, mentioning the technologies and outcomes.',
            projectDetails: 'Project Details',
            viewMore: 'View More Projects',
            contactTitle: 'Contact Me',
            contactLead: 'I am eager to collaborate on new and exciting projects. Feel free to reach out to discuss your ideas or potential opportunities.',
            contactName: 'Name:',
            contactEmail: 'Email:',
            contactMessage: 'Message:',
            contactButton: 'Send Message',
            footerText: '© 2025 All rights reserved by Saeed'
        },
        ar: {
            home: 'الرئيسية',
            about: 'نبذة عني',
            skills: 'المهارات',
            projects: 'مشاريعي',
            contact: 'تواصل معي',
            adminPanel: 'لوحة التحكم',
            heroTitle: 'مرحباً، أنا سعيد',
            heroLead: 'مطور ويب شغوف يبلغ من العمر 19 عامًا ولديه أساس قوي في تقنيات الواجهة الأمامية ودافع لتعلم وإنشاء حلول ويب مبتكرة.',
            heroButton1: 'اطلع على أعمالي',
            heroButton2: 'تواصل معي',
            aboutTitle: 'نبذة عني',
            aboutParagraph1: 'أنا سعيد، شاب يبلغ من العمر 19 عامًا ولدي حماس عميق لعالم البرمجة وتطوير الويب. لقد بنيت أساسًا قويًا في تطوير الواجهة الأمامية من خلال الخبرة العملية في HTML و CSS و JavaScript. شغفي يمتد إلى إنشاء مواقع ويب سهلة الاستخدام وجذابة بصريًا تقدم تجارب مستخدم ممتازة. أقوم حاليًا بتوسيع مجموعة مهاراتي من خلال تعلم WordPress و Elementor، وأنا حريص على الاستفادة من هذه الأدوات القوية لبناء مواقع ويب ديناميكية وقوية.',
            aboutParagraph2: 'هدفي هو التحسين المستمر لمهاراتي في البرمجة والمساهمة في مشاريع ذات مغزى. أنا متعلم سريع، وأكرس جهودي لمواكبة أحدث اتجاهات وتقنيات تطوير الويب. أنا متحمس لفرصة التعاون في مشاريع مبتكرة وتحويل الأفكار الإبداعية إلى واقع من خلال التعليمات البرمجية.',
            personalName: 'الاسم:',
            personalEmail: 'البريد الإلكتروني:',
            personalPhone: 'الهاتف:',
            personalLocation: 'الموقع:',
            personalLinkedIn: 'LinkedIn:',
            personalGitHub: 'GitHub:',
            skillsTitle: 'المهارات',
            skillHTML: 'HTML',
            skillHTMLDesc: 'بارع في إنشاء ترميز HTML5 دلالي ومنظم بشكل جيد لصفحات الويب.',
            skillCSS: 'CSS',
