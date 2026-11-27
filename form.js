/* ==========================================================================
   46-IDUM — Formalar Validatsiyasi va Yuborish Moduli (form.js)
   ========================================================================== */

(function () {
  'use strict';

  function setFieldError(input, message) {
    const group = input.closest('.form-group');
    const errEl = group ? group.querySelector('.form-error') : null;
    if (message) {
      input.classList.add('is-invalid');
      if (errEl) errEl.textContent = message;
      return false;
    }
    input.classList.remove('is-invalid');
    if (errEl) errEl.textContent = '';
    return true;
  }

  function validatePhone(value) {
    const digits = value.replace(/\D/g, '');
    return digits.length >= 9 && digits.length <= 15;
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function bindValidatedForm(formId, alertId, successMessage) {
    const form = document.getElementById(formId);
    const alertBox = document.getElementById(alertId);
    if (!form) return;

    const fields = Array.from(form.querySelectorAll('[data-validate]'));

    function validateSingle(input) {
      const rule = input.dataset.validate;
      const val = input.value.trim();

      if (input.hasAttribute('required') && !val) {
        return setFieldError(input, "Iltimos, ushbu maydonni to'ldiring.");
      }
      if (rule === 'name' && val.length < 3) {
        return setFieldError(input, "Kamida 3 ta belgi kiriting.");
      }
      if (rule === 'phone' && !validatePhone(val)) {
        return setFieldError(
          input,
          "Telefon raqamini to'g'ri kiriting (masalan: +998 90 123 45 67)."
        );
      }
      if (rule === 'email' && val && !validateEmail(val)) {
        return setFieldError(input, "Elektron pochta manzili noto'g'ri formatda.");
      }
      if (rule === 'message' && val.length < 10) {
        return setFieldError(
          input,
          "Xabar yoki murojaat matni kamida 10 ta belgidan iborat bo'lishi kerak."
        );
      }
      return setFieldError(input, '');
    }

    fields.forEach((field) => {
      field.addEventListener('blur', () => validateSingle(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('is-invalid')) {
          validateSingle(field);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let allValid = true;
      fields.forEach((field) => {
        if (!validateSingle(field)) allValid = false;
      });

      if (!allValid) {
        if (alertBox) {
          alertBox.className = 'form-alert error';
          alertBox.textContent =
            "Iltimos, qizil bilan belgilangan maydonlarni to'g'ri to'ldiring.";
        }
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (alertBox) {
        alertBox.className = 'form-alert success';
        alertBox.textContent = successMessage;
      }
      form.reset();
      fields.forEach((field) => setFieldError(field, ''));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindValidatedForm(
      'admissionForm',
      'admissionFormAlert',
      "Arizangiz tekshiruvdan muvaffaqiyatli o'tdi! Eslatma: bu demo-forma bo'lib, haqiqiy qabul uchun maktab ma'muriyati tomonidan server yoki Telegram-botga ulanadi."
    );

    bindValidatedForm(
      'contactForm',
      'contactFormAlert',
      "Murojaatingiz shaklan tasdiqlandi! Eslatma: sayt statik rejimda ishlayotgani sababli murojaatlarni qabul qilish uchun ma'muriyat tomonidan backend/pochta xizmati ulanadi."
    );
  });
})();
