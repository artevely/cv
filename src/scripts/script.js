const LANG_PATH = "lang";

function applyTranslations(translations) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = key.split(".").reduce((obj, k) => obj?.[k], translations);

        if (value !== undefined) {
            if (Array.isArray(value)) {
                if (el.tagName.toLowerCase() === "ul") {
                    el.innerHTML = value.map((item) => `<li>${item}</li>`).join("");
                } else {
                    el.innerHTML = value.join(", ");
                }
            } else {
                el.innerHTML = value; // поддерживаем <b>, <mark> и т.п.
            }
        }
    });
}

// загрузка JSON и применение перевода
async function loadLanguage(lang) {
    try {
        const response = await fetch(`${LANG_PATH}/${lang}.json`);
        if (!response.ok) throw new Error(`Ошибка загрузки перевода: ${response.status}`);
        const translations = await response.json();

        applyTranslations(translations);
        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);

        // переключаем активную кнопку
        document.querySelectorAll(".lang-switcher button").forEach((btn) => {
            btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
        });
    } catch (error) {
        console.error("Не удалось загрузить язык:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    loadLanguage(savedLang);

    document.querySelectorAll(".lang-switcher button").forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            loadLanguage(lang);
        });
    });
});
