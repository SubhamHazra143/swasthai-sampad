document.addEventListener("DOMContentLoaded", () => {

    /* Set the same favicon across all pages */
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "/favicon.ico";
    document.head.appendChild(favicon);

  /* ================= CURRENT YEAR ================= */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* ================= MOBILE MENU ================= */

  const menuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

      const isOpen = mobileMenu.classList.toggle("active");

      menuButton.textContent = isOpen ? "✕" : "☰";

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

    });


    mobileMenu.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open menu"
        );

      });

    });

  }


  /* ================= HEADER SHADOW ================= */

  const header = document.querySelector(".site-header");

  if (header) {

    const updateHeader = () => {

      if (window.scrollY > 15) {

        header.style.boxShadow =
          "0 8px 30px rgba(0, 0, 0, 0.12)";

      } else {

        header.style.boxShadow =
          "0 5px 25px rgba(0, 0, 0, 0.08)";

      }

    };

    window.addEventListener("scroll", updateHeader);

    updateHeader();

  }


  /* ================= DOCTOR APPOINTMENTS ================= */

  const doctorForm =
    document.getElementById("doctor-booking-form");

  const doctorSelect =
    document.getElementById("doctor-select");

  const appointmentDate =
    document.getElementById("appointment-date");


  const doctorSchedules = {

    "Dr. Manisha Ray": [2, 5],

    "Dr. Abhisekh Reja": [6],

    "Dr. Vivek Shaw": [1],

    "Dr. Ahin Ash": [3, 6]

  };


  /* ---------- Minimum booking date ---------- */

  if (appointmentDate) {

    const tomorrow = new Date();

    tomorrow.setHours(0, 0, 0, 0);

    tomorrow.setDate(
      tomorrow.getDate() + 1
    );


    const year =
      tomorrow.getFullYear();

    const month =
      String(
        tomorrow.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        tomorrow.getDate()
      ).padStart(2, "0");


    appointmentDate.min =
      `${year}-${month}-${day}`;

  }


  /* ---------- Validate doctor's day ---------- */

  function validateDoctorDate() {

    if (
      !doctorSelect ||
      !appointmentDate
    ) {
      return true;
    }


    const doctor =
      doctorSelect.value;

    const dateValue =
      appointmentDate.value;


    if (!doctor || !dateValue) {

      appointmentDate.setCustomValidity("");

      return true;

    }


    const selectedDate =
      new Date(`${dateValue}T00:00:00`);

    const selectedDay =
      selectedDate.getDay();


    const allowedDays =
      doctorSchedules[doctor] || [];


    if (!allowedDays.includes(selectedDay)) {

      appointmentDate.setCustomValidity(
        "This doctor is not available on the selected day. Please choose the doctor's consultation day."
      );

      appointmentDate.reportValidity();

      return false;

    }


    appointmentDate.setCustomValidity("");

    return true;

  }


  if (doctorSelect) {

    doctorSelect.addEventListener(
      "change",
      () => {

        if (appointmentDate) {

          appointmentDate.value = "";

          appointmentDate.setCustomValidity("");

        }

      }
    );

  }


  if (appointmentDate) {

    appointmentDate.addEventListener(
      "change",
      validateDoctorDate
    );

  }


  /* ---------- Doctor book buttons ---------- */

  document
    .querySelectorAll(".doctor-book-button[data-doctor]")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const doctorName =
            button.dataset.doctor;


          if (doctorSelect) {

            doctorSelect.value =
              doctorName;

          }


          if (appointmentDate) {

            appointmentDate.value = "";

            appointmentDate.setCustomValidity("");

          }


          const panel =
            document.getElementById(
              "appointment-panel"
            );


          if (panel) {

            panel.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }
      );

    });


  /* ---------- Doctor form ---------- */

  if (doctorForm) {

    doctorForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        if (!validateDoctorDate()) {
          return;
        }


        const doctor =
          doctorSelect.value;


        const selectedOption =
          doctorSelect.options[
            doctorSelect.selectedIndex
          ];


        const specialty =
          selectedOption?.dataset.specialty
          || "";


        const date =
          appointmentDate.value;


        const patientName =
          document
            .getElementById("patient-name")
            .value
            .trim();


        const patientPhone =
          document
            .getElementById("patient-phone")
            .value
            .trim();


        const patientNote =
          document
            .getElementById("patient-note")
            .value
            .trim();


        if (
          !doctor ||
          !date ||
          !patientName ||
          !patientPhone
        ) {

          doctorForm.reportValidity();

          return;

        }


        const formattedDate =
          new Date(
            `${date}T00:00:00`
          ).toLocaleDateString(
            "en-IN",
            {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric"
            }
          );


        let message =
          `Hello Swasthai Sampad,\n\n` +
          `I want to book a doctor's appointment.\n\n` +
          `Doctor: ${doctor}\n` +
          `Specialty: ${specialty}\n` +
          `Preferred Date: ${formattedDate}\n` +
          `Name: ${patientName}\n` +
          `Phone: ${patientPhone}`;


        if (patientNote) {

          message +=
            `\nAdditional Note: ${patientNote}`;

        }


        message +=
          `\n\nI understand that this is an appointment request and that availability and timing should be confirmed by Swasthai Sampad.`;


        const whatsappUrl =
          `https://wa.me/919831998054?text=${encodeURIComponent(message)}`;


        window.open(
          whatsappUrl,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }

});
  /* =========================================================
     MEDICINE SAVINGS CALCULATOR
  ========================================================= */

  const savingsInput =
    document.getElementById("medicine-amount");

  const discountResult =
    document.getElementById("discount-result");

  const savingResult =
    document.getElementById("saving-result");


  function getMedicineDiscount(amount) {

    if (amount >= 25000) {
      return 25;
    }

    if (amount >= 20000) {
      return 24;
    }

    if (amount >= 15000) {
      return 23;
    }

    if (amount >= 10000) {
      return 22;
    }

    return 21;

  }


  function updateSavingsCalculator() {

    if (!savingsInput) {
      return;
    }


    const amount =
      Number(savingsInput.value) || 0;


    const discount =
      getMedicineDiscount(amount);


    const saving =
      amount * discount / 100;


    if (discountResult) {

      discountResult.textContent =
        `${discount}%`;

    }


    if (savingResult) {

      savingResult.textContent =
        `₹${saving.toLocaleString("en-IN", {
          maximumFractionDigits: 2
        })}`;

    }

  }


  if (savingsInput) {

    savingsInput.addEventListener(
      "input",
      updateSavingsCalculator
    );

    updateSavingsCalculator();

  }