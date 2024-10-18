// Language content
const content = {
    en: {
        siteTitle: "Collins Enebeli",
        aboutTitle: "About Me",
        bio: "I'm a software engineer focused on frontend technologies. My interests include UX, accessibility, and web animations.",
        projectsTitle: "Projects",
        proj1Title: "Gasbot",
        proj1Desc: "A multichain crypto refuel platform built using NextJS and Tailwind.",
        proj1Link: "View Live",
        proj2Title: "Checkbot",
        proj2Desc: "A Slack bot for accountability built with Golang and AWS Lambda.",
        proj2Link: "View Code",
        contactTitle: "Contact Me",
        contactInfo: "Feel free to reach out via email.",
        footerText: "© 2024 Collins Enebeli"
    },
    pt: {
        siteTitle: "Collins Enebeli",
        aboutTitle: "Sobre Mim",
        bio: "Sou um engenheiro de software focado em tecnologias de frontend. Meus interesses incluem UX, acessibilidade e animações na web.",
        projectsTitle: "Projetos",
        proj1Title: "Gasbot",
        proj1Desc: "Uma plataforma multichain de recarga de criptomoedas usando NextJS e Tailwind.",
        proj1Link: "Ver Ao Vivo",
        proj2Title: "Checkbot",
        proj2Desc: "Um bot de responsabilidade para Slack, desenvolvido com Golang e AWS Lambda.",
        proj2Link: "Ver Código",
        contactTitle: "Contate-me",
        contactInfo: "Fique à vontade para entrar em contato por e-mail.",
        footerText: "© 2024 Collins Enebeli"
    }
};

// Functions to switch content
function switchLanguage(language) {
    document.getElementById('site-title').textContent = content[language].siteTitle;
    document.getElementById('about-title').textContent = content[language].aboutTitle;
    document.getElementById('bio').textContent = content[language].bio;
    document.getElementById('projects-title').textContent = content[language].projectsTitle;
    document.getElementById('proj-1-title').textContent = content[language].proj1Title;
    document.getElementById('proj-1-desc').textContent = content[language].proj1Desc;
    document.getElementById('proj-1-link').textContent = content[language].proj1Link;
    document.getElementById('proj-2-title').textContent = content[language].proj2Title;
    document.getElementById('proj-2-desc').textContent = content[language].proj2Desc;
    document.getElementById('proj-2-link').textContent = content[language].proj2Link;
    document.getElementById('contact-title').textContent = content[language].contactTitle;
    document.getElementById('contact-info').textContent = content[language].contactInfo;
    document.getElementById('footer-text').textContent = content[language].footerText;
}

// Event listeners for language buttons
document.getElementById('en-btn').addEventListener('click', function() {
    switchLanguage('en');
});

document.getElementById('pt-btn').addEventListener('click', function() {
    switchLanguage('pt');
});
