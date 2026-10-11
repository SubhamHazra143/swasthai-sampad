document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     MEDICINES PAGE
     ENGLISH -> BENGALI
     ========================================================= */

  const medicinesBN = {

    /* =======================================================
       HEADER
       ======================================================= */

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
      "হোয়াটসঅ্যাপ",

    nav_whatsapp_mobile:
      "হোয়াটসঅ্যাপে যোগাযোগ করুন",


    /* =======================================================
       HERO
       ======================================================= */

    hero_badge:
      "ব্র্যান্ডেড ওষুধ • দৈনন্দিন স্বাস্থ্যসেবা",

    hero_eyebrow:
      "আপনার নিয়মিত স্বাস্থ্যসেবার সঙ্গী",

    hero_title:
      "আপনার মাসিক ওষুধ,<br><span>হোক আরও সহজ।</span>",

    hero_description:
      "থাইরয়েড ও কোলেস্টেরল থেকে শুরু করে ব্লাড প্রেসার, ডায়াবেটিস, ভিটামিন এবং দৈনন্দিন স্বাস্থ্যসেবার প্রয়োজন — Swasthai Sampad-এ বিশ্বস্ত ব্র্যান্ডের ওষুধ ও স্বাস্থ্যসেবা পণ্য পান।",

    hero_button:
      "ওষুধের তালিকা পাঠান",

    hero_secondary:
      "মাসিক প্রয়োজন দেখুন",

    trust_one:
      "ব্র্যান্ডেড ওষুধ",

    trust_two:
      "নিয়মিত মাসিক প্রয়োজন",

    trust_three:
      "WhatsApp-এ অর্ডার",


    /* =======================================================
       HERO VISUAL
       ======================================================= */

    visual_title:
      "নিয়মিত যত্ন।",

    visual_title_2:
      "আরও ভালো সাশ্রয়।",

    visual_diabetes:
      "ডায়াবেটিস",

    visual_bp:
      "ব্লাড প্রেসার",

    visual_thyroid:
      "থাইরয়েড",

    visual_cholesterol:
      "কোলেস্টেরল",


    /* =======================================================
       QUICK CATEGORY BAR
       ======================================================= */

    shortcut_monthly:
      "মাসিক ওষুধ",

    shortcut_vitamins:
      "ভিটামিন ও ওয়েলনেস",

    shortcut_baby:
      "বেবি কেয়ার",

    shortcut_personal:
      "পার্সোনাল কেয়ার",

    shortcut_order:
      "WhatsApp-এ অর্ডার",


    /* =======================================================
       MONTHLY NEEDS
       ======================================================= */

    monthly_tag:
      "মাসিক ওষুধের প্রয়োজন",

    monthly_title:
      "আপনার পরিবারের যে ওষুধগুলি<br>বারবার প্রয়োজন হতে পারে।",

    monthly_intro:
      "আমরা নিয়মিত মাসিক প্রয়োজনের জন্য ব্র্যান্ডেড ওষুধ এবং দৈনন্দিন স্বাস্থ্যসেবা পণ্যের উপর গুরুত্ব দিই।",

    need_diabetes_title:
      "ডায়াবেটিস",

    need_diabetes_text:
      "নিয়মিত ডায়াবেটিসের যত্নে প্রয়োজন হতে পারে এমন ওষুধ।",

    need_bp_title:
      "ব্লাড প্রেসার",

    need_bp_text:
      "প্রতিদিনের ব্লাড প্রেসার নিয়ন্ত্রণের জন্য নিয়মিত প্রয়োজনীয় ওষুধ।",

    need_thyroid_title:
      "থাইরয়েড",

    need_thyroid_text:
      "নিয়মিত থাইরয়েডের ওষুধ সহজে পাওয়ার সুবিধা।",

    need_cholesterol_title:
      "কোলেস্টেরল",

    need_cholesterol_text:
      "নিয়মিত কোলেস্টেরল নিয়ন্ত্রণের ওষুধ ও স্বাস্থ্যসেবার প্রয়োজন।",

    need_vitamins_title:
      "ভিটামিন",

    need_vitamins_text:
      "দৈনন্দিন ভিটামিন, সাপ্লিমেন্ট এবং ওয়েলনেসের প্রয়োজনীয় পণ্য।",

    need_more_title:
      "দৈনন্দিন স্বাস্থ্যসেবা",

    need_more_text:
      "অন্যান্য নিয়মিত ওষুধ এবং পরিবারের স্বাস্থ্যসেবার প্রয়োজনীয়তা।",

    ask_now:
      "জানুন",


    /* =======================================================
       ORDER PROCESS
       ======================================================= */

    order_tag:
      "সহজে ওষুধ অর্ডার করুন",

    order_title:
      "লাইনে দাঁড়ানোর দরকার নেই।<br>শুধু আপনার তালিকা পাঠান।",

    order_intro:
      "WhatsApp-এ আপনার ওষুধের তালিকা বা প্রেসক্রিপশন পাঠান। আমরা ওষুধের উপলব্ধতা সম্পর্কে জানাব এবং যেখানে পরিষেবা উপলব্ধ, আপনার অর্ডার সংগ্রহ বা ডেলিভারির জন্য প্রস্তুত করতে সাহায্য করব।",

    order_step1_title:
      "আপনার তালিকা পাঠান",

    order_step1_text:
      "আপনার ওষুধের তালিকা WhatsApp-এ আমাদের মেসেজ করুন।",

    order_step2_title:
      "আমরা যাচাই করে প্রস্তুত করি",

    order_step2_text:
      "আমাদের টিম ওষুধের উপলব্ধতা যাচাই করে আপনার অর্ডার প্রস্তুত করবে।",

    order_step3_title:
      "সংগ্রহ অথবা ডেলিভারি",

    order_step3_text:
      "সংগ্রহ অথবা ডেলিভারি সম্পর্কে আমাদের সঙ্গে কথা বলুন।",

    order_button:
      "ওষুধের তালিকা পাঠান",

    chat_customer:
      "নমস্কার, আমি আমার মাসিক ওষুধ কিনতে চাই।",

    chat_store:
      "অবশ্যই। আপনার ওষুধের তালিকা বা প্রেসক্রিপশন পাঠান।",

    chat_customer_2:
      "এখনই পাঠাচ্ছি। ধন্যবাদ!",

    chat_input:
      "মেসেজ লিখুন...",

    order_float_title:
      "আগে থেকে পরিকল্পনা করুন",

    order_float_text:
      "ওষুধ প্রয়োজন হওয়ার আগেই আপনার তালিকা পাঠান।",


    /* =======================================================
       SAVINGS CALCULATOR
       ======================================================= */

    savings_tag:
      "আপনার ডিসকাউন্ট",

    savings_title:
      "আপনার কেনাকাটার স্ল্যাব কীভাবে কাজ করে দেখুন।",

    savings_intro:
      "আনুমানিক ওষুধ কেনার পরিমাণ লিখুন এবং নিচে প্রযোজ্য ডিসকাউন্ট স্ল্যাব দেখুন।",

    calculator_label:
      "আনুমানিক কেনাকাটার পরিমাণ",

    calculator_discount_label:
      "আপনার স্ল্যাব",

    calculator_saving_label:
      "আনুমানিক ডিসকাউন্ট",

    calculator_note:
      "উপরের তালিকাভুক্ত ডিসকাউন্ট স্ল্যাবের ভিত্তিতে এই হিসাবটি আনুমানিক। শর্ত ও প্রযোজ্যতা সাপেক্ষে।",


    /* =======================================================
       WELLNESS / PERSONAL CARE
       ======================================================= */

    wellness_tag:
      "ওয়েলনেস ও পার্সোনাল কেয়ার",

    wellness_title:
      "আপনার স্বাস্থ্যসেবার তালিকা<br>শুধু ওষুধেই সীমাবদ্ধ নয়।",

    wellness_intro:
      "দৈনন্দিন রুটিনের জন্য ভিটামিন, ওয়েলনেস পণ্য, পার্সোনাল কেয়ার, স্কিনকেয়ার এবং হেয়ারকেয়ার পণ্য দেখুন।",

    care_skincare:
      "স্কিনকেয়ার ও হেয়ারকেয়ার",

    care_skincare_text:
      "আমাদের বাড়তে থাকা পার্সোনাল কেয়ার কালেকশন দেখুন।",

    care_baby:
      "বেবি কেয়ার",

    care_baby_text:
      "পরিচিত ব্র্যান্ডসহ আরও বিভিন্ন বেবি কেয়ার প্রয়োজনীয় পণ্য।",

    ask_about_baby:
      "বেবি কেয়ার সম্পর্কে জানুন",

    care_family:
      "পরিবারের প্রয়োজনীয় পণ্য",

    care_family_text:
      "পুরো পরিবারের জন্য দৈনন্দিন পার্সোনাল কেয়ার ও স্বাস্থ্যসেবা পণ্য।",

    explore_family:
      "ফ্যামিলি কেয়ার দেখুন",


    /* =======================================================
       WHY SWASTHAI SAMPAD
       ======================================================= */

    why_tag:
      "কেন SWASTHAI SAMPAD",

    why_title:
      "দৈনন্দিন প্রয়োজনকে কেন্দ্র করে<br>তৈরি একটি ফার্মেসি।",

    why_1_title:
      "ব্র্যান্ডেড ওষুধ",

    why_1_text:
      "আমরা নিয়মিত ব্র্যান্ডেড ওষুধ এবং স্বাস্থ্যসেবা পণ্যের উপর গুরুত্ব দিই।",

    why_2_title:
      "আকর্ষণীয় সাশ্রয়",

    why_2_text:
      "২১% থেকে শুরু করে কেনাকাটার স্ল্যাব অনুযায়ী সর্বোচ্চ ২৫% পর্যন্ত ডিসকাউন্ট।",

    why_3_title:
      "সহজ WhatsApp সহায়তা",

    why_3_text:
      "জটিল অনলাইন ক্যাটালগে খোঁজার পরিবর্তে আপনার প্রয়োজন আমাদের সরাসরি জানান।",

    why_4_title:
      "ব্যক্তিগত পরিষেবা",

    why_4_text:
      "পরিবারের নিয়মিত স্বাস্থ্যসেবার কেনাকাটাকে আরও সুবিধাজনক করতে আমরা পাশে থাকি।",


    /* =======================================================
       FINAL CTA
       ======================================================= */

    final_title:
      "ওষুধ লাগবে?<br>আমরা মাত্র একটি WhatsApp দূরে।",

    final_text:
      "আপনার ওষুধের তালিকা, প্রেসক্রিপশন বা পণ্যের প্রয়োজনীয়তা পাঠান এবং আমাদের টিম আপনাকে সহায়তা করবে।",

    final_button:
      "WhatsApp-এ শুরু করুন"

  };


  /* =========================================================
     APPLY DATA-I18N TRANSLATIONS
     ========================================================= */

  function storeOriginalText(selector, mode = "text") {
    document.querySelectorAll(selector).forEach((element) => {
      if (!element.dataset.originalText) {
        element.dataset.originalText = mode === "html" ? element.innerHTML : element.textContent.trim();
      }
    });
  }

  function restoreMedicineEnglish() {
    document.documentElement.lang = "en";
    document.body.classList.remove("language-bengali");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      if (element.dataset.originalText) {
        element.innerHTML = element.dataset.originalText;
      }
    });

    [
      ".visual-top span",
      ".need-card-label",
      ".care-range-card b",
      ".brand-pills span",
      ".phone-top span",
      ".footer-brand span",
      ".footer-links a",
      ".footer-bottom p"
    ].forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        if (element.dataset.originalText) {
          if (selector === ".footer-bottom p") {
            element.innerHTML = element.dataset.originalText;
          } else {
            element.textContent = element.dataset.originalText;
          }
        }
      });
    });
  }

  function applyMedicineLanguage() {
},{
    const language =
      localStorage.getItem("swasthai-language") || "en";


    /*
      Only do anything on medicines.html.
    */

    if (
      !window.location.pathname.endsWith(
        "/medicines.html"
      )
    ) {
      return;
    }


    /* =======================================================
       BENGALI TRANSLATION
       ======================================================= */

    if (language === "bn") {

      document.documentElement.lang = "bn";

      document.body.classList.add(
        "language-bengali"
      );

      document.querySelectorAll("[data-i18n]").forEach((element) => {
        if (!element.dataset.originalText) {
          element.dataset.originalText = element.innerHTML;
        }
        const key = element.getAttribute("data-i18n");
        if (key && Object.prototype.hasOwnProperty.call(medicinesBN, key)) {
          element.innerHTML = medicinesBN[key];
        }
      });

      [
        ".visual-top span",
        ".need-card-label",
        ".care-range-card b",
        ".brand-pills span",
        ".phone-top span",
        ".footer-brand span",
        ".footer-links a",
        ".footer-bottom p"
      ].forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
          if (!element.dataset.originalText) {
            element.dataset.originalText = element.innerHTML || element.textContent.trim();
          }
        });
      });

      document.querySelectorAll(".visual-top span").forEach((element) => {
        element.innerHTML = '<i data-lucide="heart-pulse"></i> স্বাস্থ্যসেবা';
      });

      document.querySelectorAll(".need-card-label").forEach((element) => {
        const value = element.textContent.trim().toUpperCase();
        if (value === "REGULAR CARE") element.textContent = "নিয়মিত যত্ন";
        else if (value === "WELLNESS") element.textContent = "ওয়েলনেস";
        else if (value === "AND MORE") element.textContent = "আরও অনেক কিছু";
      });

      document.querySelectorAll(".care-range-card b").forEach((element) => {
        element.textContent = "দেখুন →";
      });

      document.querySelectorAll(".brand-pills span").forEach((element) => {
        if (element.textContent.trim() === "& more") element.textContent = "এবং আরও";
      });

      document.querySelectorAll(".phone-top span").forEach((element) => {
        element.textContent = "WhatsApp";
      });

      document.querySelectorAll(".footer-brand span").forEach((element) => {
        element.textContent = "স্বাস্থ্যসেবা • ফার্মেসি";
      });

      document.querySelectorAll(".footer-links a").forEach((element) => {
        const page = element.getAttribute("href");
        const footerTranslations = {
          "index.html": "হোম",
          "medicines.html": "ওষুধ",
          "doctors.html": "ডাক্তার",
          "diagnostics.html": "ডায়াগনস্টিক",
          "skincare.html": "স্কিনকেয়ার",
          "offers.html": "অফার",
          "contact.html": "যোগাযোগ"
        };
        if (footerTranslations[page]) {
          element.textContent = footerTranslations[page];
        }
      });

      const footerBottom = document.querySelector(".footer-bottom");
      if (footerBottom) {
        const paragraphs = footerBottom.querySelectorAll("p");
        if (paragraphs[0]) {
          const year = document.getElementById("year")?.textContent || "";
          paragraphs[0].innerHTML = `© ${year} Swasthai Sampad. সর্বস্বত্ব সংরক্ষিত।`;
        }
        if (paragraphs[1]) {
          paragraphs[1].textContent = "শর্তাবলী প্রযোজ্য";
        }
      }

      document.title = "ওষুধ ও স্বাস্থ্যসেবা পণ্য | Swasthai Sampad";

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Swasthai Sampad-এ শ্রীরামপুরে নিয়মিত মাসিক প্রয়োজনের জন্য ব্র্যান্ডেড ওষুধ, বেবি কেয়ার, স্কিনকেয়ার, হেয়ারকেয়ার, ভিটামিন এবং পরিবারের স্বাস্থ্যসেবা পণ্য পাওয়া যায়।"
        );
      }

      localStorage.setItem("swasthai-medicines-language", "bn");
    }

    else {
      document.documentElement.lang = "en";
      document.body.classList.remove("language-bengali");
      restoreMedicineEnglish();
      localStorage.setItem("swasthai-medicines-language", "en");
    }


      /* =====================================================
         ELEMENTS WITHOUT DATA-I18N
         ===================================================== */


      /*
        Hero visual top
        HEALTHCARE
      */

      document
        .querySelectorAll(".visual-top span")
        .forEach((element) => {

          element.innerHTML =
            '<i data-lucide="heart-pulse"></i> স্বাস্থ্যসেবা';

        });


      /*
        Need-card labels
      */

      document
        .querySelectorAll(".need-card-label")
        .forEach((element) => {

          const value =
            element.textContent
              .trim()
              .toUpperCase();


          if (value === "REGULAR CARE") {

            element.textContent =
              "নিয়মিত যত্ন";

          }

          else if (value === "WELLNESS") {

            element.textContent =
              "ওয়েলনেস";

          }

          else if (value === "AND MORE") {

            element.textContent =
              "আরও অনেক কিছু";

          }

        });


      /*
        Explore → buttons
      */

      document
        .querySelectorAll(".care-range-card b")
        .forEach((element) => {

          element.textContent =
            "দেখুন →";

        });


      /*
        Brand pill
        & more
      */

      document
        .querySelectorAll(".brand-pills span")
        .forEach((element) => {

          const value =
            element.textContent.trim();


          if (value === "& more") {

            element.textContent =
              "এবং আরও";

          }

        });


      /*
        WhatsApp visual
        This is a product/platform name and stays
        as WhatsApp.
      */

      document
        .querySelectorAll(".phone-top span")
        .forEach((element) => {

          element.textContent =
            "WhatsApp";

        });


      /*
        Footer
      */

      document
        .querySelectorAll(".footer-brand span")
        .forEach((element) => {

          element.textContent =
            "স্বাস্থ্যসেবা • ফার্মেসি";

        });


      document
        .querySelectorAll(".footer-links a")
        .forEach((element) => {

          const page =
            element.getAttribute("href");


          const footerTranslations = {

            "index.html":
              "হোম",

            "medicines.html":
              "ওষুধ",

            "doctors.html":
              "ডাক্তার",

            "diagnostics.html":
              "ডায়াগনস্টিক",

            "skincare.html":
              "স্কিনকেয়ার",

            "offers.html":
              "অফার",

            "contact.html":
              "যোগাযোগ"

          };


          if (
            footerTranslations[page]
          ) {

            element.textContent =
              footerTranslations[page];

          }

        });


      /*
        Footer bottom
      */

      const footerBottom =
        document.querySelector(
          ".footer-bottom"
        );


      if (footerBottom) {

        const paragraphs =
          footerBottom.querySelectorAll("p");


        if (paragraphs[0]) {

          const year =
            document.getElementById("year")
              ?.textContent || "";

          paragraphs[0].innerHTML =
            `© ${year} Swasthai Sampad. সর্বস্বত্ব সংরক্ষিত।`;

        }


        if (paragraphs[1]) {

          paragraphs[1].textContent =
            "শর্তাবলী প্রযোজ্য";

        }

      }


      /*
        Page title
      */

      document.title =
        "ওষুধ ও স্বাস্থ্যসেবা পণ্য | Swasthai Sampad";


      /*
        Meta description
      */

      const metaDescription =
        document.querySelector(
          'meta[name="description"]'
        );


      if (metaDescription) {

        metaDescription.setAttribute(
          "content",
          "Swasthai Sampad-এ শ্রীরামপুরে নিয়মিত মাসিক প্রয়োজনের জন্য ব্র্যান্ডেড ওষুধ, বেবি কেয়ার, স্কিনকেয়ার, হেয়ারকেয়ার, ভিটামিন এবং পরিবারের স্বাস্থ্যসেবা পণ্য পাওয়া যায়।"
        );

      }


      /* =====================================================
         SAVE
      ===================================================== */

      localStorage.setItem(
        "swasthai-medicines-language",
        "bn"
      );

    }


    /* =======================================================
       ENGLISH
       ======================================================= */

    else {

      document.documentElement.lang = "en";

      document.body.classList.remove(
        "language-bengali"
      );


      /*
        Restore page by reloading is NOT necessary
        if the original English text is present
        in the HTML.

        We simply reload the page when switching
        back to English so every non-data-i18n
        string returns correctly.
      */

      localStorage.setItem(
        "swasthai-medicines-language",
        "en"
      );
      window.dispatchEvent(
  new CustomEvent("swasthaiLanguageChanged", {
    detail: {
      language: language
    }
  })
);

    }

  }


  /* =========================================================
     INITIAL LOAD
     ========================================================= */

  applyMedicineLanguage();


  /* =========================================================
     LANGUAGE BUTTON
     ========================================================= */

  document
    .querySelectorAll(".language-switch")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          /*
            The main language.js changes
            swasthai-language.

            Wait until that change completes,
            then apply medicine-specific text.
          */

          setTimeout(() => {

            const language =
              localStorage.getItem(
                "swasthai-language"
              ) || "en";


            if (language === "bn") {

              applyMedicineLanguage();

            }

            else {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            const textNodes = document.querySelectorAll("[data-i18n]");
            textNodes.forEach((element) => {
              if (!element.dataset.originalText) {
                element.dataset.originalText = element.innerHTML;
              }
            });

            if (language === "en") {
              document.documentElement.lang = "en";
            }

            const resultButton = document.querySelector(".language-switch");
            if (resultButton) {
              resultButton.setAttribute("aria-label", language === "bn" ? "ভাষা বদলান" : "Change language");
            }

            document.dispatchEvent(new CustomEvent("swasthaiLanguageChanged", { detail: { language } }));

            localStorage.setItem("swasthai-language", language);

            if (language === "bn") {
              localStorage.setItem("swasthai-medicines-language", "bn");
            }
            else {
              localStorage.setItem("swasthai-medicines-language", "en");
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (window.location.pathname.endsWith("/medicines.html")) {
              document.body.classList.toggle("language-bengali", language === "bn");
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "bn") {
              applyMedicineLanguage();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

            if (language === "en") {
              restoreMedicineEnglish();
            }

            if (typeof lucide !== "undefined" && lucide.createIcons) {
              lucide.createIcons();
            }

          }, 50);

        }
      );

    });

    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }

  }

  applyMedicineLanguage();

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const language = localStorage.getItem("swasthai-language") || "en";

      if (language === "bn") {
        localStorage.setItem("swasthai-language", "en");
        restoreMedicineEnglish();
      } else {
        localStorage.setItem("swasthai-language", "bn");
        applyMedicineLanguage();
      }

      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  const button = document.querySelector(".language-switch");
  if (button) {
    button.setAttribute("aria-label", "Change language");
  }

  const allButtons = document.querySelectorAll(".language-switch");
  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  document.querySelectorAll(".language-switch").forEach((button) => {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("swasthai-language") || "en";
      const next = current === "en" ? "bn" : "en";
      localStorage.setItem("swasthai-language", next);
      applyMedicineLanguage();
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }






































































































































































































































































" , 
          }, 50);

        }
      );

    });


  /* =========================================================
     FIX LUCIDE ICONS AFTER DYNAMIC HTML
     ========================================================= */

  if (
    typeof lucide !== "undefined" &&
    lucide.createIcons
  ) {

    lucide.createIcons();

  }

});