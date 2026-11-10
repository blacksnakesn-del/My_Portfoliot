tailwind.config = {
    theme: {
        extend: {
            colors: {
                dark: '#0A0A0B',
                surface: '#141417',
                accent: '#B6F36B',
                muted: '#92929A',
                border: '#27272A',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const translations = {
        fr: {
            'nav-home': 'Accueil',
            'nav-about': 'À propos',
            'nav-skills': 'Compétences',
            'nav-projects': 'Projets',
            'nav-contact': 'Contact',
            'nav-cta': 'Travaillons ensemble ↗',
            availability: 'Disponible pour de nouvelles opportunités',
            'system-status': '● Système opérationnel',
            'passion-status': '100% Passion',
            'hero-greeting': 'Bonjour, je suis développeur web.',
            'hero-title-start': 'Créer',
            'hero-title-accent': 'des expériences',
            'hero-title-end': 'numériques.',
            'hero-description': 'Je conçois et développe des applications web modernes, performantes et évolutives. Passionné par le backend, les architectures propres et les nouvelles technologies.',
            'hero-projects': 'Découvrir mes projets ↗',
            'hero-contact': 'Me contacter',
            'tech-label': 'Technologies et outils',
            'about-label': '01 / À propos',
            'about-title-start': "Plus qu'écrire du code,",
            'about-title-accent': 'créer des solutions.',
            'about-paragraph-1': "Je suis développeur web full stack et je m'intéresse particulièrement à la conception d'applications web.",
            'about-paragraph-2': "J'accorde une attention particulière au backend, à la structuration des applications, à la gestion des données et à la création d'API robustes.",
            'about-paragraph-3': 'Mon objectif est de transformer des idées en solutions numériques utiles, performantes et faciles à maintenir.',
            'cv-download': 'Télécharger mon CV ↓',
            'skills-label': '02 / Compétences',
            'skills-title-start': 'Mon arsenal',
            'skills-title-accent': 'technique.',
            'skill-backend-title': 'Développement backend',
            'skill-backend-description': 'PHP, Laravel, Node.js, Express.js, API REST, authentification et architecture logicielle.',
            'skill-frontend-title': 'Développement frontend',
            'skill-frontend-description': 'JavaScript, TypeScript, Vue.js, HTML5, CSS3 et Tailwind CSS.',
            'skill-tools-title': 'Bases de données et outils',
            'projects-label': '03 / Portfolio',
            'projects-title-start': 'Projets',
            'projects-title-accent': 'sélectionnés.',
            'projects-github': 'Voir mes projets sur GitHub ↗',
            'project-type-app': 'Application Web',
            'project-market-description': 'Une plateforme e-commerce pensée pour faciliter la découverte et la vente de produits.',
            'project-api-description': 'Une API backend avec gestion des utilisateurs, authentification JWT et sécurisation des mots de passe.',
            'contact-label': '04 / Contact',
            'contact-title-start': 'Construisons quelque chose',
            'contact-title-accent': 'ensemble.',
            'contact-description': "Tu as un projet, une idée ou une opportunité ? N'hésite pas à me contacter.",
            'contact-cta': 'Envoyer un message ↗',
            'footer-copyright': '© 2026 — Tous droits réservés.',
            'footer-credit': 'Conçu et développé avec'
        },
        en: {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-projects': 'Projects',
            'nav-contact': 'Contact',
            'nav-cta': "Let's work together ↗",
            availability: 'Available for new opportunities',
            'system-status': '● System operational',
            'passion-status': '100% Passion',
            'hero-greeting': "Hi, I'm a web developer.",
            'hero-title-start': 'Building',
            'hero-title-accent': 'digital',
            'hero-title-end': 'experiences.',
            'hero-description': 'I design and build modern, high-performance, scalable web applications. I am passionate about backend development, clean architecture, and new technologies.',
            'hero-projects': 'Explore my projects ↗',
            'hero-contact': 'Get in touch',
            'tech-label': 'Technologies & Tools',
            'about-label': '01 / About',
            'about-title-start': 'More than writing code,',
            'about-title-accent': 'creating solutions.',
            'about-paragraph-1': "I'm a full-stack web developer with a strong interest in designing web applications.",
            'about-paragraph-2': 'I focus especially on backend development, application structure, data management, and building robust APIs.',
            'about-paragraph-3': 'My goal is to turn ideas into useful, high-performance, and maintainable digital solutions.',
            'cv-download': 'Download my CV ↓',
            'skills-label': '02 / Skills',
            'skills-title-start': 'My technical',
            'skills-title-accent': 'toolkit.',
            'skill-backend-title': 'Backend Development',
            'skill-backend-description': 'PHP, Laravel, Node.js, Express.js, REST APIs, authentication, and software architecture.',
            'skill-frontend-title': 'Frontend Development',
            'skill-frontend-description': 'JavaScript, TypeScript, Vue.js, HTML5, CSS3, and Tailwind CSS.',
            'skill-tools-title': 'Databases & Tools',
            'projects-label': '03 / Portfolio',
            'projects-title-start': 'Selected',
            'projects-title-accent': 'projects.',
            'projects-github': 'Explore my projects on GitHub ↗',
            'project-type-app': 'Web Application',
            'project-market-description': 'An e-commerce platform designed to make discovering and selling products easier.',
            'project-api-description': 'A backend API for user management, JWT authentication, and secure password handling.',
            'contact-label': '04 / Contact',
            'contact-title-start': "Let's build something",
            'contact-title-accent': 'together.',
            'contact-description': "Have a project, an idea, or an opportunity? Feel free to get in touch.",
            'contact-cta': 'Send a message ↗',
            'footer-copyright': '© 2026 — All rights reserved.',
            'footer-credit': 'Designed & developed with'
        }
    };

    function setLanguage(language) {
        document.documentElement.lang = language;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            element.textContent = translations[language][key];
        });

        document.getElementById('page-title').textContent = language === 'fr'
            ? 'Abdou Kebe | Développeur Full Stack'
            : 'Abdou Kebe | Full Stack Developer';
        document.getElementById('meta-description').content = language === 'fr'
            ? "Portfolio d'Abdou Kebe, développeur web full stack spécialisé dans le backend, les API et la conception d'applications web modernes."
            : 'Portfolio of Abdou Kebe, a full-stack web developer specializing in backend development, APIs, and modern web applications.';

        document.querySelectorAll('.language-toggle').forEach(button => {
            button.textContent = language === 'fr' ? 'EN' : 'FR';
            button.setAttribute('aria-label', language === 'fr' ? 'Switch to English' : 'Passer en français');
        });
        menuBtn.setAttribute('aria-label', language === 'fr' ? 'Ouvrir le menu' : 'Open menu');
    }

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(!mobileMenu.classList.contains('hidden')));
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    document.querySelectorAll('.language-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const language = document.documentElement.lang === 'fr' ? 'en' : 'fr';
            setLanguage(language);
        });
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = [...new Set([...navLinks].map(link => link.getAttribute('href').slice(1)))]
        .map(id => document.getElementById(id))
        .filter(section => section !== null);

    function setActiveSection(id) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    function updateActiveNavLink() {
        const marker = window.innerHeight * 0.3;
        const activeSection = sections.find(section => {
            const bounds = section.getBoundingClientRect();
            return bounds.top <= marker && bounds.bottom > marker;
        });

        if (activeSection) {
            setActiveSection(activeSection.id);
        }
    }

    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    window.addEventListener('resize', updateActiveNavLink);
    updateActiveNavLink();

    setLanguage('fr');
});
