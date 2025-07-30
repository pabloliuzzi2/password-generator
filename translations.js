// Sistema di traduzioni multilingua
const translations = {
    it: {
        title: "Generatore Password",
        app_name: "PassGen",
        generate_password: "Genera Password",
        copy: "Copia",
        length: "Lunghezza:",
        uppercase: "Maiuscole (A-Z)",
        lowercase: "Minuscole (a-z)",
        numbers: "Numeri (0-9)",
        symbols: "Simboli (!@#$%^&*)",
        strength: "Forza:",
        strength_weak: "Debole",
        strength_fair: "Discreta",
        strength_good: "Buona",
        strength_strong: "Forte",
        generate: "Genera Password",
        verification_title: "Verifica di Sicurezza",
        verification_desc: "Per garantire la sicurezza, completa questa verifica prima di accedere al generatore di password",
        captcha_placeholder: "Inserisci il risultato",
        verify: "Verifica e Continua",
        back_to_verification: "Torna alla Verifica",
        footer: "Generatore di password sicuro e gratuito powered by NBN",
        copied: "Password copiata!",
        error_length: "Seleziona almeno una opzione per la password",
        error_captcha: "Risultato non corretto. Riprova.",
        error_not_verified: "Devi prima completare la verifica di sicurezza per accedere al generatore di password.",
        captcha_math: "Risultato dell'operazione matematica:",
        captcha_color: "Colore del testo:",
        captcha_count: "Conta i caratteri:",
        verification_success: "Verifica completata! Ora puoi generare password sicure."
    },
    en: {
        title: "Password Generator",
        app_name: "PassGen",
        generate_password: "Generate Password",
        copy: "Copy",
        length: "Length:",
        uppercase: "Uppercase (A-Z)",
        lowercase: "Lowercase (a-z)",
        numbers: "Numbers (0-9)",
        symbols: "Symbols (!@#$%^&*)",
        strength: "Strength:",
        strength_weak: "Weak",
        strength_fair: "Fair",
        strength_good: "Good",
        strength_strong: "Strong",
        generate: "Generate Password",
        verification_title: "Security Verification",
        verification_desc: "To ensure security, complete this verification before accessing the password generator",
        captcha_placeholder: "Enter the result",
        verify: "Verify and Continue",
        back_to_verification: "Back to Verification",
        footer: "Secure and free password generator powered by NBN",
        copied: "Password copied!",
        error_length: "Select at least one password option",
        error_captcha: "Incorrect result. Try again.",
        error_not_verified: "You must first complete the security verification to access the password generator.",
        captcha_math: "Result of mathematical operation:",
        captcha_color: "Text color:",
        captcha_count: "Count the characters:",
        verification_success: "Verification completed! You can now generate secure passwords."
    },
    es: {
        title: "Generador de Contraseñas",
        app_name: "PassGen",
        generate_password: "Generar Contraseña",
        copy: "Copiar",
        length: "Longitud:",
        uppercase: "Mayúsculas (A-Z)",
        lowercase: "Minúsculas (a-z)",
        numbers: "Números (0-9)",
        symbols: "Símbolos (!@#$%^&*)",
        strength: "Fuerza:",
        strength_weak: "Débil",
        strength_fair: "Regular",
        strength_good: "Buena",
        strength_strong: "Fuerte",
        generate: "Generar Contraseña",
        verification_title: "Verificación de Seguridad",
        verification_desc: "Para garantizar la seguridad, completa esta verificación antes de acceder al generador de contraseñas",
        captcha_placeholder: "Ingresa el resultado",
        verify: "Verificar y Continuar",
        back_to_verification: "Volver a la Verificación",
        footer: "Generador de contraseñas seguro y gratuito powered by NBN",
        copied: "¡Contraseña copiada!",
        error_length: "Selecciona al menos una opción para la contraseña",
        error_captcha: "Resultado incorrecto. Inténtalo de nuevo.",
        error_not_verified: "Debes completar primero la verificación de seguridad para acceder al generador de contraseñas.",
        captcha_math: "Resultado de la operación matemática:",
        captcha_color: "Color del texto:",
        captcha_count: "Cuenta los caracteres:",
        verification_success: "¡Verificación completada! Ahora puedes generar contraseñas seguras."
    },
    fr: {
        title: "Générateur de Mots de Passe",
        app_name: "PassGen",
        generate_password: "Générer un Mot de Passe",
        copy: "Copier",
        length: "Longueur:",
        uppercase: "Majuscules (A-Z)",
        lowercase: "Minuscules (a-z)",
        numbers: "Chiffres (0-9)",
        symbols: "Symboles (!@#$%^&*)",
        strength: "Force:",
        strength_weak: "Faible",
        strength_fair: "Moyenne",
        strength_good: "Bonne",
        strength_strong: "Forte",
        generate: "Générer un Mot de Passe",
        verification_title: "Vérification de Sécurité",
        verification_desc: "Pour garantir la sécurité, complétez cette vérification avant d'accéder au générateur de mots de passe",
        captcha_placeholder: "Entrez le résultat",
        verify: "Vérifier et Continuer",
        back_to_verification: "Retour à la Vérification",
        footer: "Générateur de mots de passe sécurisé et gratuit powered by NBN",
        copied: "Mot de passe copié !",
        error_length: "Sélectionnez au moins une option pour le mot de passe",
        error_captcha: "Résultat incorrect. Réessayez.",
        error_not_verified: "Vous devez d'abord compléter la vérification de sécurité pour accéder au générateur de mots de passe.",
        captcha_math: "Résultat de l'opération mathématique:",
        captcha_color: "Couleur du texte:",
        captcha_count: "Comptez les caractères:",
        verification_success: "Vérification terminée ! Vous pouvez maintenant générer des mots de passe sécurisés."
    },
    de: {
        title: "Passwort-Generator",
        app_name: "PassGen",
        generate_password: "Passwort Generieren",
        copy: "Kopieren",
        length: "Länge:",
        uppercase: "Großbuchstaben (A-Z)",
        lowercase: "Kleinbuchstaben (a-z)",
        numbers: "Zahlen (0-9)",
        symbols: "Symbole (!@#$%^&*)",
        strength: "Stärke:",
        strength_weak: "Schwach",
        strength_fair: "Mittel",
        strength_good: "Gut",
        strength_strong: "Stark",
        generate: "Passwort Generieren",
        verification_title: "Sicherheitsüberprüfung",
        verification_desc: "Um die Sicherheit zu gewährleisten, vervollständigen Sie diese Überprüfung, bevor Sie auf den Passwort-Generator zugreifen",
        captcha_placeholder: "Geben Sie das Ergebnis ein",
        verify: "Überprüfen und Fortfahren",
        back_to_verification: "Zurück zur Überprüfung",
        footer: "Sicherer und kostenloser Passwort-Generator powered by NBN",
        copied: "Passwort kopiert!",
        error_length: "Wählen Sie mindestens eine Passwort-Option aus",
        error_captcha: "Falsches Ergebnis. Versuchen Sie es erneut.",
        error_not_verified: "Sie müssen zuerst die Sicherheitsüberprüfung abschließen, um auf den Passwort-Generator zuzugreifen.",
        captcha_math: "Ergebnis der mathematischen Operation:",
        captcha_color: "Textfarbe:",
        captcha_count: "Zählen Sie die Zeichen:",
        verification_success: "Überprüfung abgeschlossen! Sie können jetzt sichere Passwörter generieren."
    }
};

// Funzione per cambiare lingua
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Aggiorna il placeholder dell'input captcha
    const captchaInput = document.getElementById('captchaInput');
    if (captchaInput && translations[lang] && translations[lang]['captcha_placeholder']) {
        captchaInput.placeholder = translations[lang]['captcha_placeholder'];
    }
    
    // Aggiorna il titolo della pagina
    document.title = translations[lang]?.title || 'PassGen';
    
    // Salva la lingua preferita
    localStorage.setItem('preferredLanguage', lang);
    
    // Rigenera il captcha con la nuova lingua se siamo nello step 1
    const verificationCard = document.getElementById('verificationCard');
    if (verificationCard && verificationCard.style.display !== 'none') {
        // Se siamo nella verifica, rigenera il captcha
        const app = window.passGenApp;
        if (app && app.generateCaptcha) {
            app.generateCaptcha();
        }
    }
}

// Funzione per ottenere la traduzione
function getTranslation(key, lang = 'it') {
    return translations[lang]?.[key] || translations['it'][key] || key;
} 