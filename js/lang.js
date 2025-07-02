
const translations = {
  en: {
    job: "Web & Mobile Developer",
    bio: "I am a developer specialized in creating fast and modern websites and mobile applications.",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    resume: "Resume",
    send: "Send",
    footer: "© 2025 Jonathan Museme. All rights reserved.",
    name: "Your name",
    email: "Your email",
    message: "Your message"
  },
  fr: {
    job: "Développeur Web & Mobile",
    bio: "Je suis un développeur spécialisé dans la création de sites web et d'applications mobiles modernes et rapides.",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    resume: "CV",
    send: "Envoyer",
    footer: "© 2025 Jonathan Museme. Tous droits réservés.",
    name: "Votre nom",
    email: "Votre email",
    message: "Votre message"
  }
};
let currentLang = 'en';
function switchLang() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  document.documentElement.lang = currentLang;
  updateTexts();
}
function updateTexts() {
  const trans = translations[currentLang];
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (trans[key]) el.textContent = trans[key];
  });
  document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
    const key = el.getAttribute('data-lang-placeholder');
    if (trans[key]) el.setAttribute('placeholder', trans[key]);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');
  langToggle.addEventListener('click', switchLang);
  updateTexts();
});
