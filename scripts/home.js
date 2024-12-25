document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const frBtn = document.getElementById("fr-btn");

  const elementsToTranslate = {
    home: document.querySelectorAll('[data-translate="home"]'),
    about: document.querySelectorAll('[data-translate="about"]'),
    gallery: document.querySelectorAll('[data-translate="gallery"]'),
    donations: document.querySelectorAll('[data-translate="donations"]'),
    contact: document.querySelectorAll('[data-translate="contact"]'),
    empoweringFutureGenerations: document.querySelector(
      '[data-translate="empoweringFutureGenerations"]',
    ),
    impactingLivesMeetingNeeds: document.querySelector(
      '[data-translate="impactingLivesMeetingNeeds"]',
    ),
    explore: document.querySelector('[data-translate="explore"]'),
    learnMore: document.querySelector('[data-translate="learnMore"]'),
    pastEvents: document.querySelector('[data-translate="pastEvents"]'),
    visitToVioDada: document.querySelector('[data-translate="visitToVioDada"]'),
    visitationToOrphanage: document.querySelector(
      '[data-translate="visitationToOrphanage"]',
    ),
    septemberOrphanageVisitation: document.querySelector(
      '[data-translate="septemberOrphanageVisitation"]',
    ),
    visitToLaSolution: document.querySelector(
      '[data-translate="visitToLaSolution"]',
    ),
    educationFundraiser: document.querySelector(
      '[data-translate="educationFundraiser"]',
    ),
    donateSchoolMaterials: document.querySelector(
      '[data-translate="donateSchoolMaterials"]',
    ),
    upcomingEvents: document.querySelector('[data-translate="upcomingEvents"]'),
    learningOpportunity: document.querySelector(
      '[data-translate="learningOpportunity"]',
    ),
    offeringEnglishLecture: document.querySelector(
      '[data-translate="offeringEnglishLecture"]',
    ),
    leadershipTraining: document.querySelector(
      '[data-translate="leadershipTraining"]',
    ),
    trainingOrphans: document.querySelector(
      '[data-translate="trainingOrphans"]',
    ),
    wordFromFounder: document.querySelector(
      '[data-translate="wordFromFounder"]',
    ),
    founderQuote: document.querySelector('[data-translate="founderQuote"]'),
    testimonials: document.querySelector('[data-translate="testimonials"]'),
    testimonial1: document.querySelector('[data-translate="testimonial1"]'),
    testimonial2: document.querySelector('[data-translate="testimonial2"]'),
    testimonial3: document.querySelector('[data-translate="testimonial3"]'),
    makeADifferenceToday: document.querySelector(
      '[data-translate="makeADifferenceToday"]',
    ),
    supportMission: document.querySelector('[data-translate="supportMission"]'),
    donateNow: document.querySelector('[data-translate="donateNow"]'),
    ourPartners: document.querySelector('[data-translate="ourPartners"]'),
    faq: document.querySelector('[data-translate="faq"]'),
    howAreDonationsUsed: document.querySelector(
      '[data-translate="howAreDonationsUsed"]',
    ),
    donationsUsedDescription: document.querySelector(
      '[data-translate="donationsUsedDescription"]',
    ),
    isDonationTaxDeductible: document.querySelector(
      '[data-translate="isDonationTaxDeductible"]',
    ),
    taxDeductibleDescription: document.querySelector(
      '[data-translate="taxDeductibleDescription"]',
    ),
    canSetUpRecurringDonation: document.querySelector(
      '[data-translate="canSetUpRecurringDonation"]',
    ),
    recurringDonationDescription: document.querySelector(
      '[data-translate="recurringDonationDescription"]',
    ),
    quickLinks: document.querySelector('[data-translate="quickLinks"]'),
    followUs: document.querySelector('[data-translate="followUs"]'),
    subscribeForUpdates: document.querySelector(
      '[data-translate="subscribeForUpdates"]',
    ),
    getNotified: document.querySelector('[data-translate="getNotified"]'),
    subscribe: document.querySelector('[data-translate="subscribe"]'),
    allRightsReserved: document.querySelector(
      '[data-translate="allRightsReserved"]',
    ),
    designedBy: document.querySelector('[data-translate="designedBy"]'),
    backToTop: document.querySelector('[data-translate="backToTop"]'),
  };

  const setLanguage = (lang) => {
    for (const key in elementsToTranslate) {
      if (elementsToTranslate[key]) {
        elementsToTranslate[key].forEach((element) => {
          element.textContent = translations[lang][key];
        });
      }
    }
    document.documentElement.lang = lang;
  };

  enBtn.addEventListener("click", () => setLanguage("en"));
  frBtn.addEventListener("click", () => setLanguage("fr"));

  // Set default language
  setLanguage("en");
});

const translations = {
  en: {
    home: "Home",
    about: "About",
    gallery: "Gallery",
    donations: "Donations",
    contact: "Contact",
    empoweringFutureGenerations: "Empowering Future Generations",
    impactingLivesMeetingNeeds: "Impacting lives, meeting needs.",
    explore: "Explore",
    learnMore: "Learn More",
    pastEvents: "Past Events",
    visitToVioDada: "Visit to Vio dada",
    visitationToOrphanage: "Visitation to the Orphanage home at Vio dada",
    septemberOrphanageVisitation: "September Orphanage Visitation",
    visitToLaSolution: "Visit to an orphanage called La solution at Adetikope.",
    educationFundraiser: "Education Fundraiser",
    donateSchoolMaterials:
      "Donate school materials to Four different Orphanage.",
    upcomingEvents: "Upcoming Events",
    learningOpportunity: "Learning opportunity",
    offeringEnglishLecture: "Offering english lecture for orphanage homes.",
    leadershipTraining: "Leadership training",
    trainingOrphans:
      "Training orphans on the mindset of being leaders and not give up.",
    wordFromFounder: "A Word from Our Founder",
    founderQuote:
      "If it is in your heart, the resources would be placed in your hands.",
    testimonials: "Testimonials",
    testimonial1:
      "This foundation has changed my life. I am so grateful for their support!",
    testimonial2: "Amazing work! They truly care about making a difference.",
    testimonial3:
      "I have seen the positive impact firsthand. Highly recommended!",
    makeADifferenceToday: "Make a Difference Today",
    supportMission:
      "Your support helps us continue our mission to transform lives and communities. Every donation, big or small, counts!",
    donateNow: "Donate Now",
    ourPartners: "Our Partners",
    faq: "Frequently Asked Questions",
    howAreDonationsUsed: "How are donations used?",
    donationsUsedDescription:
      "Donations are primarily used to support community projects, educational programs, and healthcare initiatives.",
    isDonationTaxDeductible: "Is my donation tax-deductible?",
    taxDeductibleDescription:
      "Yes, donations to registered non-profits like Sho Sho Foundation are tax-deductible. Please consult your local tax authority.",
    canSetUpRecurringDonation: "Can I set up a recurring donation?",
    recurringDonationDescription:
      "We currently support one-time donations, but recurring donations will be available soon.",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    subscribeForUpdates: "Subscribe for Updates",
    getNotified: "Get notified about upcoming events and news!",
    subscribe: "Subscribe",
    allRightsReserved: "&copy; 2024 Sho Sho Foundation. All rights reserved.",
    designedBy: "Designed by",
    backToTop: "Back to Top",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    gallery: "Galerie",
    donations: "Dons",
    contact: "Contact",
    empoweringFutureGenerations: "Autonomiser les générations futures",
    impactingLivesMeetingNeeds: "Impacter des vies, répondre aux besoins.",
    explore: "Explorer",
    learnMore: "En savoir plus",
    pastEvents: "Événements passés",
    visitToVioDada: "Visite à Vio dada",
    visitationToOrphanage: "Visite à l'orphelinat de Vio dada",
    septemberOrphanageVisitation: "Visite de l'orphelinat en septembre",
    visitToLaSolution: "Visite à un orphelinat appelé La solution à Adetikope.",
    educationFundraiser: "Collecte de fonds pour l'éducation",
    donateSchoolMaterials:
      "Donner des fournitures scolaires à quatre orphelinats différents.",
    upcomingEvents: "Événements à venir",
    learningOpportunity: "Opportunité d'apprentissage",
    offeringEnglishLecture: "Offrir des cours d'anglais aux orphelinats.",
    leadershipTraining: "Formation en leadership",
    trainingOrphans:
      "Former les orphelins à la mentalité de leaders et ne pas abandonner.",
    wordFromFounder: "Un mot de notre fondateur",
    founderQuote:
      "Si c'est dans votre cœur, les ressources seront mises entre vos mains.",
    testimonials: "Témoignages",
    testimonial1:
      "Cette fondation a changé ma vie. Je suis tellement reconnaissant pour leur soutien!",
    testimonial2:
      "Travail incroyable! Ils se soucient vraiment de faire une différence.",
    testimonial3:
      "J'ai vu l'impact positif de première main. Hautement recommandé!",
    makeADifferenceToday: "Faites une différence aujourd'hui",
    supportMission:
      "Votre soutien nous aide à poursuivre notre mission de transformer des vies et des communautés. Chaque don, grand ou petit, compte!",
    donateNow: "Faire un don",
    ourPartners: "Nos partenaires",
    faq: "Questions fréquemment posées",
    howAreDonationsUsed: "Comment les dons sont-ils utilisés?",
    donationsUsedDescription:
      "Les dons sont principalement utilisés pour soutenir des projets communautaires, des programmes éducatifs et des initiatives de santé.",
    isDonationTaxDeductible: "Mon don est-il déductible des impôts?",
    taxDeductibleDescription:
      "Oui, les dons aux organisations à but non lucratif enregistrées comme Sho Sho Foundation sont déductibles des impôts. Veuillez consulter votre autorité fiscale locale.",
    canSetUpRecurringDonation: "Puis-je mettre en place un don récurrent?",
    recurringDonationDescription:
      "Nous soutenons actuellement les dons uniques, mais les dons récurrents seront bientôt disponibles.",
    quickLinks: "Liens rapides",
    followUs: "Suivez-nous",
    subscribeForUpdates: "Abonnez-vous pour des mises à jour",
    getNotified: "Soyez informé des événements à venir et des nouvelles!",
    subscribe: "S'abonner",
    allRightsReserved: "&copy; 2024 Sho Sho Foundation. Tous droits réservés.",
    designedBy: "Conçu par",
    backToTop: "Retour en haut",
  },
};
