document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.style.display = "none";
  });

  return;

  const translations = {

    en: {

      brand_tagline: "Healthcare • Pharmacy",

      nav_home: "Home",
      nav_medicines: "Medicines",
      nav_doctors: "Doctors",
      nav_diagnostics: "Diagnostics",
      nav_skincare: "Skincare",
      nav_offers: "Offers",
      nav_about: "About",
      nav_contact: "Contact",
      nav_whatsapp: "WhatsApp",
      nav_whatsapp_mobile: "WhatsApp Us",

      hero_eyebrow:
        "TRUSTED HEALTHCARE IN SERAMPORE",

      hero_title:
        `Your health.<br><span>Our care.</span>`,

      hero_description:
        "Medicines, doctors and diagnostic services — brought together to make everyday healthcare simpler.",

      hero_offer_one:
        "FLAT DISCOUNT",

      hero_offer_two:
        "ON PURCHASE SLABS",

      hero_medicines_button:
        "Explore Medicines",

      hero_doctor_button:
        "Find a Doctor",

      hero_card_title:
        "Three important<br>healthcare needs.",

      hero_card_medicine:
        "Medicines",

      hero_card_medicine_text:
        "Branded medicines & everyday healthcare",

      hero_card_doctor:
        "Doctors",

      hero_card_doctor_text:
        "Appointments at our polyclinic",

      hero_card_diagnostics:
        "Diagnostics",

      hero_card_diagnostics_text:
        "Help with diagnostic test bookings",

      trust_medicines_title:
        "Branded Medicines",

      trust_medicines_text:
        "Genuine pharmaceutical products",

      trust_discount_title:
        "21% Flat Discount",

      trust_discount_text:
        "Higher slabs up to 25%",

      trust_clinic_title:
        "Polyclinic",

      trust_clinic_text:
        "Doctors from multiple specialties",

      trust_diagnostic_title:
        "Diagnostic Support",

      trust_diagnostic_text:
        "Booking assistance available",

      services_tag:
        "EXPLORE SWASTHAI SAMPAD",

      services_title:
        "Healthcare, all in one place.",

      services_intro:
        "Explore each service in detail and contact us directly whenever you need assistance.",

      service_medicine_label:
        "PHARMACY",

      service_medicine_title:
        `Medicines &amp;<br>Healthcare`,

      service_medicine_text:
        "Branded medicines for regular healthcare needs, including monthly medicines, vitamins and family care.",

      service_medicine_tag1:
        "Monthly medicines",

      service_medicine_tag2:
        "Diabetes",

      service_medicine_tag3:
        "BP",

      service_medicine_tag4:
        "Thyroid",

      service_medicine_link:
        "Explore medicines →",

      service_doctor_label:
        "POLYCLINIC",

      service_doctor_title:
        `Doctors &amp;<br>Appointments`,

      service_doctor_text:
        "Consult doctors from different specialties at our polyclinic. View doctors and appointment timings.",

      service_doctor_tag1:
        "Orthopaedics",

      service_doctor_tag2:
        "General Medicine",

      service_doctor_tag3:
        "Gynaecology",

      service_doctor_tag4:
        "Nephrology",

      service_doctor_link:
        "View doctors →",

      service_diagnostic_label:
        "DIAGNOSTICS",

      service_diagnostic_title:
        `Tests &amp;<br>Diagnostics`,

      service_diagnostic_text:
        "We help with bookings for diagnostic services through our association with Suraksha Diagnostic.",

      service_diagnostic_tag1:
        "Blood tests",

      service_diagnostic_tag2:
        "ECG",

      service_diagnostic_tag3:
        "Echo",

      service_diagnostic_tag4:
        "Imaging",

      service_diagnostic_link:
        "Explore diagnostics →",

      offers_tag:
        "SAVE MORE",

      offers_title:
        "Better savings on your medicine purchases.",

      offers_text:
        "Start with our flat 21% discount and unlock higher discounts through our purchase slabs.",

      offers_button:
        "View all offers",

      beauty_tag:
        "SKINCARE & HAIRCARE",

      beauty_title:
        "Everyday personal care, with better value.",

      beauty_text:
        "Explore our growing skincare and haircare range, with discounts of up to 30% on selected products.",

      beauty_button:
        "Explore skincare",

      baby_tag:
        "BABY & FAMILY CARE",

      baby_title:
        "Care for every generation.",

      baby_text:
        "Explore baby care, personal care and everyday family essentials.",

      baby_button:
        "Explore baby care →",

      whatsapp_tag:
        "NEED HELP?",

      whatsapp_title:
        "Just tell us what you need.",

      whatsapp_text:
        "Send us a WhatsApp message for medicines, doctor appointments, diagnostic tests or personal-care products.",

      whatsapp_button:
        "💬 WhatsApp Swasthai Sampad",

      location_tag:
        "FIND US",

      location_title:
        "Visit Swasthai Sampad",

      location_button:
        "📍 Get Directions",

      location_call:
        "📞 Call Us",

      contact_tag:
        "VISIT US",

      contact_title:
        "Swasthai Sampad",

      contact_text:
        "Serampore, Hooghly, West Bengal",

      contact_button:
        "Contact & Location",

      contact_call:
        "Call +91 98319 98054",

      footer_rights:
        "All rights reserved.",

      footer_terms:
        "Terms & Conditions Apply"

    },


    bn: {

      brand_tagline:
        "স্বাস্থ্যসেবা • ফার্মেসি",

      nav_home:
        "হোম",

      nav_medicines:
        "ওষুধ",

      nav_doctors:
        "ডাক্তার",

      nav_diagnostics:
        "ডায়াগনস্টিক",

      nav_skincare:
        "স্কিনকেয়ার",

      nav_offers:
        "অফার",

      nav_about:
        "আমাদের সম্পর্কে",

      nav_contact:
        "যোগাযোগ",

      nav_whatsapp:
        "WhatsApp",

      nav_whatsapp_mobile:
        "WhatsApp করুন",

      hero_eyebrow:
        "সেরামপুরে বিশ্বস্ত স্বাস্থ্যসেবা",

      hero_title:
        `আপনার স্বাস্থ্য।<br><span>আমাদের যত্ন।</span>`,

      hero_description:
        "ওষুধ, ডাক্তার এবং ডায়াগনস্টিক পরিষেবা — প্রতিদিনের স্বাস্থ্যসেবাকে আরও সহজ করতে একসঙ্গে।",

      hero_offer_one:
        "ফ্ল্যাট ডিসকাউন্ট",

      hero_offer_two:
        "পারচেজ স্ল্যাব অনুযায়ী",

      hero_medicines_button:
        "ওষুধ দেখুন",

      hero_doctor_button:
        "ডাক্তার দেখুন",

      hero_card_title:
        "স্বাস্থ্যসেবার<br>তিনটি গুরুত্বপূর্ণ দিক।",

      hero_card_medicine:
        "ওষুধ",

      hero_card_medicine_text:
        "ব্র্যান্ডেড ওষুধ ও দৈনন্দিন স্বাস্থ্যপণ্য",

      hero_card_doctor:
        "ডাক্তার",

      hero_card_doctor_text:
        "আমাদের পলিক্লিনিকে অ্যাপয়েন্টমেন্ট",

      hero_card_diagnostics:
        "ডায়াগনস্টিক",

      hero_card_diagnostics_text:
        "ডায়াগনস্টিক টেস্ট বুকিংয়ের সহায়তা",

      trust_medicines_title:
        "ব্র্যান্ডেড ওষুধ",

      trust_medicines_text:
        "বিশ্বস্ত ফার্মাসিউটিক্যাল পণ্য",

      trust_discount_title:
        "ফ্ল্যাট ২১% ডিসকাউন্ট",

      trust_discount_text:
        "স্ল্যাব অনুযায়ী ২৫% পর্যন্ত",

      trust_clinic_title:
        "পলিক্লিনিক",

      trust_clinic_text:
        "বিভিন্ন বিশেষজ্ঞ ডাক্তার",

      trust_diagnostic_title:
        "ডায়াগনস্টিক সহায়তা",

      trust_diagnostic_text:
        "বুকিংয়ের জন্য যোগাযোগ করুন",

      services_tag:
        "SWASTHAI SAMPAD সম্পর্কে",

      services_title:
        "স্বাস্থ্যসেবা, সব এক জায়গায়।",

      services_intro:
        "প্রতিটি পরিষেবা সম্পর্কে বিস্তারিত জানুন এবং প্রয়োজনে সরাসরি আমাদের সঙ্গে যোগাযোগ করুন।",

      service_medicine_label:
        "ফার্মেসি",

      service_medicine_title:
        `ওষুধ ও<br>স্বাস্থ্যসেবা`,

      service_medicine_text:
        "নিয়মিত স্বাস্থ্যসেবার জন্য ব্র্যান্ডেড ওষুধ, মাসিক ওষুধ, ভিটামিন এবং পারিবারিক স্বাস্থ্যপণ্য।",

      service_medicine_tag1:
        "মাসিক ওষুধ",

      service_medicine_tag2:
        "ডায়াবেটিস",

      service_medicine_tag3:
        "ব্লাড প্রেসার",

      service_medicine_tag4:
        "থাইরয়েড",

      service_medicine_link:
        "ওষুধ সম্পর্কে জানুন →",

      service_doctor_label:
        "পলিক্লিনিক",

      service_doctor_title:
        `ডাক্তার ও<br>অ্যাপয়েন্টমেন্ট`,

      service_doctor_text:
        "আমাদের পলিক্লিনিকে বিভিন্ন বিশেষজ্ঞ ডাক্তার পরামর্শ দেন। ডাক্তার ও সময়সূচি দেখুন।",

      service_doctor_tag1:
        "অর্থোপেডিক্স",

      service_doctor_tag2:
        "জেনারেল মেডিসিন",

      service_doctor_tag3:
        "গাইনোকলজি",

      service_doctor_tag4:
        "নেফ্রোলজি",

      service_doctor_link:
        "ডাক্তার দেখুন →",

      service_diagnostic_label:
        "ডায়াগনস্টিক",

      service_diagnostic_title:
        `টেস্ট ও<br>ডায়াগনস্টিক`,

      service_diagnostic_text:
        "Suraksha Diagnostic-এর সঙ্গে আমাদের পরিষেবার মাধ্যমে বিভিন্ন ডায়াগনস্টিক টেস্ট বুকিংয়ে আমরা সাহায্য করি।",

      service_diagnostic_tag1:
        "ব্লাড টেস্ট",

      service_diagnostic_tag2:
        "ECG",

      service_diagnostic_tag3:
        "Echo",

      service_diagnostic_tag4:
        "ইমেজিং",

      service_diagnostic_link:
        "ডায়াগনস্টিক দেখুন →",

      offers_tag:
        "আরও সাশ্রয়",

      offers_title:
        "আপনার ওষুধ কেনাকাটায় আরও ভালো সাশ্রয়।",

      offers_text:
        "ফ্ল্যাট ২১% ডিসকাউন্ট থেকে শুরু করে পারচেজ স্ল্যাব অনুযায়ী আরও বেশি ডিসকাউন্ট পান।",

      offers_button:
        "সব অফার দেখুন",

      beauty_tag:
        "স্কিনকেয়ার ও হেয়ারকেয়ার",

      beauty_title:
        "প্রতিদিনের পার্সোনাল কেয়ার, আরও ভালো মূল্যে।",

      beauty_text:
        "আমাদের স্কিনকেয়ার ও হেয়ারকেয়ার রেঞ্জ দেখুন, যেখানে নির্বাচিত পণ্যে ৩০% পর্যন্ত ডিসকাউন্ট রয়েছে।",

      beauty_button:
        "স্কিনকেয়ার দেখুন",

      baby_tag:
        "বেবি ও ফ্যামিলি কেয়ার",

      baby_title:
        "প্রজন্মের পর প্রজন্মের যত্ন।",

      baby_text:
        "বেবি কেয়ার, পার্সোনাল কেয়ার এবং পুরো পরিবারের দৈনন্দিন প্রয়োজনীয় পণ্য দেখুন।",

      baby_button:
        "বেবি কেয়ার দেখুন →",

      whatsapp_tag:
        "সাহায্য দরকার?",

      whatsapp_title:
        "আপনার কী দরকার শুধু আমাদের বলুন।",

      whatsapp_text:
        "ওষুধ, ডাক্তার অ্যাপয়েন্টমেন্ট, ডায়াগনস্টিক টেস্ট অথবা পার্সোনাল কেয়ার পণ্যের জন্য WhatsApp-এ আমাদের মেসেজ করুন।",

      whatsapp_button:
        "💬 Swasthai Sampad-এ WhatsApp করুন",

      location_tag:
        "আমাদের খুঁজুন",

      location_title:
        "Swasthai Sampad-এ আসুন",

      location_button:
        "📍 পথ দেখুন",

      location_call:
        "📞 কল করুন",

      contact_tag:
        "আমাদের কাছে আসুন",

      contact_title:
        "Swasthai Sampad",

      contact_text:
        "সেরামপুর, হুগলি, পশ্চিমবঙ্গ",

      contact_button:
        "যোগাযোগ ও লোকেশন",

      contact_call:
        "কল করুন +91 98319 98054",

      footer_rights:
        "সর্বস্বত্ব সংরক্ষিত।",

      footer_terms:
        "শর্তাবলী প্রযোজ্য"

    }

  };


  let currentLanguage =
    localStorage.getItem("swasthai-language") || "en";


  function applyLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
      "swasthai-language",
      language
    );


    document.documentElement.lang =
      language === "bn"
        ? "bn"
        : "en";


    const translation =
      translations[language];


    document
      .querySelectorAll("[data-i18n]")
      .forEach((element) => {

        const key =
          element.dataset.i18n;


        if (
          Object.prototype.hasOwnProperty.call(
            translation,
            key
          )
        ) {

          element.innerHTML =
            translation[key];

        }

      });


    document
      .querySelectorAll(".language-switch")
      .forEach((button) => {

        const en =
          button.querySelector(".lang-en");

        const bn =
          button.querySelector(".lang-bn");


        if (en) {

          en.style.color =
            language === "en"
              ? "var(--accent)"
              : "rgba(255,255,255,0.55)";

        }


        if (bn) {

          bn.style.color =
            language === "bn"
              ? "var(--accent)"
              : "rgba(255,255,255,0.55)";

        }

      });

  }


  document
    .querySelectorAll(".language-switch")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          applyLanguage(
            currentLanguage === "en"
              ? "bn"
              : "en"
          );

        }
      );

    });


  applyLanguage(currentLanguage);

});
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.style.display = "none";
  });

  return;

  /* =========================================================
     SWASTHAI SAMPAD
     ENGLISH <-> BENGALI LANGUAGE SYSTEM
  ========================================================= */


  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const translations = {

    /* =======================================================
       ENGLISH
    ======================================================= */

    en: {

      /* ---------- BRAND ---------- */

      brand_tagline: "Healthcare • Pharmacy",


      /* ---------- NAVIGATION ---------- */

      nav_home: "Home",
      nav_medicines: "Medicines",
      nav_doctors: "Doctors",
      nav_diagnostics: "Diagnostics",
      nav_skincare: "Skincare",
      nav_offers: "Offers",
      nav_about: "About",
      nav_contact: "Contact",
      nav_whatsapp: "WhatsApp",
      nav_whatsapp_mobile: "WhatsApp Us",


      /* ---------- HERO ---------- */

      hero_eyebrow:
        "TRUSTED HEALTHCARE IN SERAMPORE",

      hero_title:
        "Your health.<br>Our care.",

      hero_description:
        "Medicines, doctors and diagnostic services — brought together to make everyday healthcare simpler.",

      hero_offer_one:
        "FLAT DISCOUNT",

      hero_offer_two:
        "ON PURCHASE SLABS",

      hero_medicines_button:
        "Explore Medicines",

      hero_doctor_button:
        "Find a Doctor",


      /* ---------- HERO CARD ---------- */

      hero_card_title:
        "Three important<br>healthcare needs.",

      hero_card_medicine:
        "Medicines",

      hero_card_medicine_text:
        "Branded medicines & everyday healthcare",

      hero_card_doctor:
        "Doctors",

      hero_card_doctor_text:
        "Appointments at our polyclinic",

      hero_card_diagnostics:
        "Diagnostics",

      hero_card_diagnostics_text:
        "Help with diagnostic test bookings",


      /* ---------- TRUST STRIP ---------- */

      trust_medicines_title:
        "Branded Medicines",

      trust_medicines_text:
        "Genuine pharmaceutical products",

      trust_discount_title:
        "21% Flat Discount",

      trust_discount_text:
        "Higher slabs up to 25%",

      trust_clinic_title:
        "Polyclinic",

      trust_clinic_text:
        "Doctors from multiple specialties",

      trust_diagnostic_title:
        "Diagnostic Support",

      trust_diagnostic_text:
        "Booking assistance available",


      /* ---------- SERVICES ---------- */

      services_tag:
        "EXPLORE SWASTHAI SAMPAD",

      services_title:
        "Healthcare, all in one place.",

      services_intro:
        "Explore each service in detail and contact us directly whenever you need assistance.",


      /* ---------- MEDICINE SERVICE CARD ---------- */

      service_medicine_label:
        "PHARMACY",

      service_medicine_title:
        "Medicines &<br>Healthcare",

      service_medicine_text:
        "Branded medicines for regular healthcare needs, including monthly medicines, vitamins and family care.",

      service_medicine_tag1:
        "Monthly medicines",

      service_medicine_tag2:
        "Diabetes",

      service_medicine_tag3:
        "BP",

      service_medicine_tag4:
        "Thyroid",

      service_medicine_link:
        "Explore medicines →",


      /* ---------- DOCTOR SERVICE CARD ---------- */

      service_doctor_label:
        "POLYCLINIC",

      service_doctor_title:
        "Doctors &<br>Appointments",

      service_doctor_text:
        "Consult doctors from different specialties at our polyclinic. View doctors and appointment timings.",

      service_doctor_tag1:
        "Orthopaedics",

      service_doctor_tag2:
        "General Medicine",

      service_doctor_tag3:
        "Gynaecology",

      service_doctor_tag4:
        "Nephrology",

      service_doctor_link:
        "View doctors →",


      /* ---------- DIAGNOSTIC SERVICE CARD ---------- */

      service_diagnostic_label:
        "DIAGNOSTICS",

      service_diagnostic_title:
        "Tests &<br>Diagnostics",

      service_diagnostic_text:
        "We help with bookings for diagnostic services through our association with Suraksha Diagnostic.",

      service_diagnostic_tag1:
        "Blood tests",

      service_diagnostic_tag2:
        "ECG",

      service_diagnostic_tag3:
        "Echo",

      service_diagnostic_tag4:
        "Imaging",

      service_diagnostic_link:
        "Explore diagnostics →",


      /* ---------- OFFERS ---------- */

      offers_tag:
        "SAVE MORE",

      offers_title:
        "Better savings on your medicine purchases.",

      offers_text:
        "Start with our flat 21% discount and unlock higher discounts through our purchase slabs.",

      offers_button:
        "View all offers",

      offers_regular:
        "REGULAR",

      offers_10k:
        "₹10K+",

      offers_15k:
        "₹15K+",

      offers_20k:
        "₹20K+",

      offers_25k:
        "₹25K+",


      /* ---------- SKINCARE ---------- */

      beauty_tag:
        "SKINCARE & HAIRCARE",

      beauty_title:
        "Everyday personal care, with better value.",

      beauty_text:
        "Explore our growing skincare and haircare range, with discounts of up to 30% on selected products.",

      beauty_button:
        "Explore skincare",

      beauty_personal_care:
        "PERSONAL CARE",

      beauty_up_to:
        "UP TO",

      beauty_discount_label:
        "OFF SELECTED PRODUCTS",


      /* ---------- BABY CARE ---------- */

      baby_tag:
        "BABY & FAMILY CARE",

      baby_title:
        "Care for every generation.",

      baby_text:
        "Explore baby care, personal care and everyday family essentials.",

      baby_button:
        "Explore baby care →",


      /* ---------- WHATSAPP ---------- */

      whatsapp_tag:
        "NEED HELP?",

      whatsapp_title:
        "Just tell us what you need.",

      whatsapp_text:
        "Send us a WhatsApp message for medicines, doctor appointments, diagnostic tests or personal-care products.",

      whatsapp_button:
        "💬 WhatsApp Swasthai Sampad",


      /* ---------- LOCATION ---------- */

      location_tag:
        "FIND US",

      location_title:
        "Visit Swasthai Sampad",

      location_address_1:
        "38 Dey Street, Battala,",

      location_address_2:
        "Serampore, Hooghly,",

      location_address_3:
        "West Bengal – 712201",

      location_button:
        "📍 Get Directions",

      location_call:
        "📞 Call Us",


      /* ---------- CONTACT ---------- */

      contact_tag:
        "VISIT US",

      contact_title:
        "Swasthai Sampad",

      contact_text:
        "Serampore, Hooghly, West Bengal",

      contact_button:
        "Contact & Location",

      contact_call:
        "Call +91 98319 98054",


      /* ---------- FOOTER ---------- */

      footer_rights:
        "All rights reserved.",

      footer_terms:
        "Terms & Conditions Apply"

    },


    /* =======================================================
       BENGALI
    ======================================================= */

    bn: {

      /* ---------- BRAND ---------- */

      brand_tagline:
        "স্বাস্থ্যসেবা • ফার্মেসি",


      /* ---------- NAVIGATION ---------- */

      nav_home:
        "হোম",

      nav_medicines:
        "ওষুধ",

      nav_doctors:
        "ডাক্তার",

      nav_diagnostics:
        "ডায়াগনস্টিক",

      nav_skincare:
        "স্কিনকেয়ার",

      nav_offers:
        "অফার",

      nav_about:
        "আমাদের সম্পর্কে",

      nav_contact:
        "যোগাযোগ",

      nav_whatsapp:
        "হোয়াটসঅ্যাপ",

      nav_whatsapp_mobile:
        "হোয়াটসঅ্যাপে যোগাযোগ করুন",


      /* ---------- HERO ---------- */

      hero_eyebrow:
        "শ্রীরামপুরের বিশ্বস্ত স্বাস্থ্যসেবা",

      hero_title:
        "আপনার স্বাস্থ্য।<br>আমাদের যত্ন।",

      hero_description:
        "ওষুধ, ডাক্তার এবং ডায়াগনস্টিক পরিষেবা — দৈনন্দিন স্বাস্থ্যসেবাকে আরও সহজ করতে সবকিছু একসঙ্গে।",

      hero_offer_one:
        "ফ্ল্যাট ডিসকাউন্ট",

      hero_offer_two:
        "কেনাকাটার স্ল্যাবে",

      hero_medicines_button:
        "ওষুধ দেখুন",

      hero_doctor_button:
        "ডাক্তার দেখুন",


      /* ---------- HERO CARD ---------- */

      hero_card_title:
        "স্বাস্থ্যসেবার তিনটি<br>গুরুত্বপূর্ণ প্রয়োজন।",

      hero_card_medicine:
        "ওষুধ",

      hero_card_medicine_text:
        "ব্র্যান্ডেড ওষুধ ও দৈনন্দিন স্বাস্থ্যসেবা",

      hero_card_doctor:
        "ডাক্তার",

      hero_card_doctor_text:
        "আমাদের পলিক্লিনিকে অ্যাপয়েন্টমেন্ট",

      hero_card_diagnostics:
        "ডায়াগনস্টিক",

      hero_card_diagnostics_text:
        "ডায়াগনস্টিক টেস্ট বুকিংয়ে সহায়তা",


      /* ---------- TRUST STRIP ---------- */

      trust_medicines_title:
        "ব্র্যান্ডেড ওষুধ",

      trust_medicines_text:
        "বিশ্বস্ত ফার্মাসিউটিক্যাল পণ্য",

      trust_discount_title:
        "ফ্ল্যাট ২১% ডিসকাউন্ট",

      trust_discount_text:
        "বেশি কেনাকাটায় ২৫% পর্যন্ত",

      trust_clinic_title:
        "পলিক্লিনিক",

      trust_clinic_text:
        "বিভিন্ন বিশেষজ্ঞ ডাক্তার",

      trust_diagnostic_title:
        "ডায়াগনস্টিক সহায়তা",

      trust_diagnostic_text:
        "বুকিংয়ে সহায়তা পাওয়া যায়",


      /* ---------- SERVICES ---------- */

      services_tag:
        "SWASTHAI SAMPAD সম্পর্কে জানুন",

      services_title:
        "এক জায়গায় সম্পূর্ণ স্বাস্থ্যসেবা।",

      services_intro:
        "প্রতিটি পরিষেবা সম্পর্কে বিস্তারিত জানুন এবং প্রয়োজনে সরাসরি আমাদের সঙ্গে যোগাযোগ করুন।",


      /* ---------- MEDICINE SERVICE CARD ---------- */

      service_medicine_label:
        "ফার্মেসি",

      service_medicine_title:
        "ওষুধ ও<br>স্বাস্থ্যসেবা",

      service_medicine_text:
        "মাসিক ওষুধ, ভিটামিন এবং পরিবারের দৈনন্দিন স্বাস্থ্যসেবার প্রয়োজনের জন্য ব্র্যান্ডেড ওষুধ।",

      service_medicine_tag1:
        "মাসিক ওষুধ",

      service_medicine_tag2:
        "ডায়াবেটিস",

      service_medicine_tag3:
        "ব্লাড প্রেসার",

      service_medicine_tag4:
        "থাইরয়েড",

      service_medicine_link:
        "ওষুধ দেখুন →",


      /* ---------- DOCTOR SERVICE CARD ---------- */

      service_doctor_label:
        "পলিক্লিনিক",

      service_doctor_title:
        "ডাক্তার ও<br>অ্যাপয়েন্টমেন্ট",

      service_doctor_text:
        "আমাদের পলিক্লিনিকে বিভিন্ন বিশেষজ্ঞ ডাক্তারের পরামর্শ নিন। ডাক্তার ও অ্যাপয়েন্টমেন্টের সময় দেখুন।",

      service_doctor_tag1:
        "অর্থোপেডিক্স",

      service_doctor_tag2:
        "জেনারেল মেডিসিন",

      service_doctor_tag3:
        "গাইনোকোলজি",

      service_doctor_tag4:
        "নেফ্রোলজি",

      service_doctor_link:
        "ডাক্তার দেখুন →",


      /* ---------- DIAGNOSTIC SERVICE CARD ---------- */

      service_diagnostic_label:
        "ডায়াগনস্টিক",

      service_diagnostic_title:
        "টেস্ট ও<br>ডায়াগনস্টিক",

      service_diagnostic_text:
        "Suraksha Diagnostic-এর সঙ্গে আমাদের সংযোগের মাধ্যমে বিভিন্ন ডায়াগনস্টিক পরিষেবা বুকিংয়ে আমরা সহায়তা করি।",

      service_diagnostic_tag1:
        "রক্ত পরীক্ষা",

      service_diagnostic_tag2:
        "ইসিজি",

      service_diagnostic_tag3:
        "ইকো",

      service_diagnostic_tag4:
        "ইমেজিং",

      service_diagnostic_link:
        "ডায়াগনস্টিক দেখুন →",


      /* ---------- OFFERS ---------- */

      offers_tag:
        "আরও সাশ্রয় করুন",

      offers_title:
        "আপনার ওষুধ কেনাকাটায় আরও বেশি সাশ্রয়।",

      offers_text:
        "ফ্ল্যাট ২১% ডিসকাউন্ট দিয়ে শুরু করুন এবং আপনার কেনাকাটার স্ল্যাব অনুযায়ী আরও বেশি ডিসকাউন্ট পান।",

      offers_button:
        "সব অফার দেখুন",

      offers_regular:
        "নিয়মিত",

      offers_10k:
        "₹১০K+",

      offers_15k:
        "₹১৫K+",

      offers_20k:
        "₹২০K+",

      offers_25k:
        "₹২৫K+",


      /* ---------- SKINCARE ---------- */

      beauty_tag:
        "স্কিনকেয়ার ও হেয়ারকেয়ার",

      beauty_title:
        "দৈনন্দিন ব্যক্তিগত যত্ন, আরও ভালো মূল্যে।",

      beauty_text:
        "আমাদের বাড়তে থাকা স্কিনকেয়ার ও হেয়ারকেয়ার কালেকশন দেখুন। নির্বাচিত পণ্যে সর্বোচ্চ ৩০% পর্যন্ত ডিসকাউন্ট।",

      beauty_button:
        "স্কিনকেয়ার দেখুন",

      beauty_personal_care:
        "পার্সোনাল কেয়ার",

      beauty_up_to:
        "পর্যন্ত",

      beauty_discount_label:
        "নির্বাচিত পণ্যে ছাড়",


      /* ---------- BABY CARE ---------- */

      baby_tag:
        "বেবি ও ফ্যামিলি কেয়ার",

      baby_title:
        "প্রতিটি প্রজন্মের যত্ন।",

      baby_text:
        "বেবি কেয়ার, পার্সোনাল কেয়ার এবং পরিবারের দৈনন্দিন প্রয়োজনীয় পণ্য দেখুন।",

      baby_button:
        "বেবি কেয়ার দেখুন →",


      /* ---------- WHATSAPP ---------- */

      whatsapp_tag:
        "সাহায্য লাগবে?",

      whatsapp_title:
        "আপনার কী প্রয়োজন শুধু আমাদের জানান।",

      whatsapp_text:
        "ওষুধ, ডাক্তার অ্যাপয়েন্টমেন্ট, ডায়াগনস্টিক টেস্ট বা পার্সোনাল কেয়ার পণ্যের জন্য WhatsApp-এ আমাদের মেসেজ করুন।",

      whatsapp_button:
        "💬 Swasthai Sampad-এ WhatsApp করুন",


      /* ---------- LOCATION ---------- */

      location_tag:
        "আমাদের খুঁজে নিন",

      location_title:
        "Swasthai Sampad-এ আসুন",

      location_address_1:
        "৩৮ ডে স্ট্রিট, বাটতলা,",

      location_address_2:
        "শ্রীরামপুর, হুগলি,",

      location_address_3:
        "পশ্চিমবঙ্গ – ৭১২২০১",

      location_button:
        "📍 দিকনির্দেশ পান",

      location_call:
        "📞 কল করুন",


      /* ---------- CONTACT ---------- */

      contact_tag:
        "আমাদের কাছে আসুন",

      contact_title:
        "Swasthai Sampad",

      contact_text:
        "শ্রীরামপুর, হুগলি, পশ্চিমবঙ্গ",

      contact_button:
        "যোগাযোগ ও লোকেশন",

      contact_call:
        "কল করুন +৯১ ৯৮৩১৯ ৯৮০৫৪",


      /* ---------- FOOTER ---------- */

      footer_rights:
        "সর্বস্বত্ব সংরক্ষিত।",

      footer_terms:
        "শর্তাবলী প্রযোজ্য।"

    }

  };


  /* =========================================================
     APPLY LANGUAGE
  ========================================================= */

  function applyLanguage(language) {

    const dictionary =
      translations[language] || translations.en;


    /* ---------- HTML LANGUAGE ---------- */

    document.documentElement.lang =
      language;


    /* ---------- BODY CLASS ---------- */

    document.body.classList.toggle(
      "language-bengali",
      language === "bn"
    );


    /* =======================================================
       TEXT / HTML TRANSLATIONS
    ======================================================= */

    document
      .querySelectorAll("[data-i18n]")
      .forEach((element) => {

        const key =
          element.getAttribute("data-i18n");


        if (
          key &&
          Object.prototype.hasOwnProperty.call(
            dictionary,
            key
          )
        ) {

          /*
            We use innerHTML rather than textContent
            because several translations contain <br>.
          */

          element.innerHTML =
            dictionary[key];

        }

      });


    /* =======================================================
       PLACEHOLDER TRANSLATIONS
    ======================================================= */

    document
      .querySelectorAll("[data-i18n-placeholder]")
      .forEach((element) => {

        const key =
          element.getAttribute(
            "data-i18n-placeholder"
          );


        if (
          key &&
          Object.prototype.hasOwnProperty.call(
            dictionary,
            key
          )
        ) {

          element.placeholder =
            dictionary[key];

        }

      });


    /* =======================================================
       ARIA LABEL TRANSLATIONS
    ======================================================= */

    document
      .querySelectorAll("[data-i18n-aria-label]")
      .forEach((element) => {

        const key =
          element.getAttribute(
            "data-i18n-aria-label"
          );


        if (
          key &&
          Object.prototype.hasOwnProperty.call(
            dictionary,
            key
          )
        ) {

          element.setAttribute(
            "aria-label",
            dictionary[key]
          );

        }

      });


    /* =======================================================
       TITLE ATTRIBUTE TRANSLATIONS
    ======================================================= */

    document
      .querySelectorAll("[data-i18n-title]")
      .forEach((element) => {

        const key =
          element.getAttribute(
            "data-i18n-title"
          );


        if (
          key &&
          Object.prototype.hasOwnProperty.call(
            dictionary,
            key
          )
        ) {

          element.setAttribute(
            "title",
            dictionary[key]
          );

        }

      });


    /* =======================================================
       STATIC TEXT WHICH CURRENT HTML DOES NOT HAVE
       data-i18n FOR
    ======================================================= */


    /*
      HERO OFFER
      "UP TO 25%"
    */

    document
      .querySelectorAll(".hero-offer strong")
      .forEach((element, index) => {

        if (index === 0) {

          element.textContent =
            "21%";

        }

        if (index === 1) {

          element.textContent =
            language === "bn"
              ? "সর্বোচ্চ ২৫%"
              : "UP TO 25%";

        }

      });


    /*
      HERO CARD BRAND LABEL
      "SWASTHAI SAMPAD"
      This is a brand name, so it intentionally
      remains unchanged.
    */

    document
      .querySelectorAll(".mini-badge")
      .forEach((element) => {

        element.textContent =
          "SWASTHAI SAMPAD";

      });


    /* =======================================================
       LANGUAGE SWITCH BUTTONS
    ======================================================= */

    document
      .querySelectorAll(".language-switch")
      .forEach((button) => {

        const english =
          button.querySelector(".lang-en");

        const bengali =
          button.querySelector(".lang-bn");


        if (english) {

          english.style.fontWeight =
            language === "en"
              ? "700"
              : "500";

          english.style.opacity =
            language === "en"
              ? "1"
              : "0.6";

        }


        if (bengali) {

          bengali.style.fontWeight =
            language === "bn"
              ? "700"
              : "500";

          bengali.style.opacity =
            language === "bn"
              ? "1"
              : "0.6";

        }

      });


    /* =======================================================
       SAVE LANGUAGE
    ======================================================= */

    localStorage.setItem(
      "swasthai-language",
      language
    );

  }


  /* =========================================================
     LANGUAGE SWITCH
     
     Your current HTML doesn't use data-lang.
     So clicking the EN/বাংলা button simply toggles.
  ========================================================= */

  document
    .querySelectorAll(".language-switch")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const currentLanguage =
            localStorage.getItem(
              "swasthai-language"
            ) || "en";


          const nextLanguage =
            currentLanguage === "en"
              ? "bn"
              : "en";


          applyLanguage(
            nextLanguage
          );

        }
      );

    });


  /* =========================================================
     INITIAL LANGUAGE
  ========================================================= */

  const savedLanguage =
    localStorage.getItem(
      "swasthai-language"
    );


  const initialLanguage =
    savedLanguage === "bn"
      ? "bn"
      : "en";


  applyLanguage(
    initialLanguage
  );

});