// Applicazione principale PassGen
class PassGen {
    constructor() {
        this.currentLanguage = 'it';
        this.isVerified = false;
        this.captchaAnswer = null;
        this.currentStep = 1; // 1 = verification, 2 = password generator
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadLanguagePreference();
        this.generateCaptcha();
        this.updateStrengthMeter();
        this.showStep(1); // Start with verification step
    }

    setupEventListeners() {
        // Selettore lingua
        const languageSelect = document.getElementById('languageSelect');
        languageSelect.addEventListener('change', (e) => {
            this.currentLanguage = e.target.value;
            changeLanguage(this.currentLanguage);
        });

        // Controllo lunghezza password
        const lengthSlider = document.getElementById('passwordLength');
        const lengthValue = document.getElementById('lengthValue');
        lengthSlider.addEventListener('input', (e) => {
            lengthValue.textContent = e.target.value;
            this.updateStrengthMeter();
        });

        // Checkbox opzioni password
        const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateStrengthMeter();
            });
        });

        // Pulsante copia
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.addEventListener('click', () => this.copyPassword());

        // Pulsante genera password
        const generateBtn = document.getElementById('generateBtn');
        generateBtn.addEventListener('click', () => this.generatePassword());

        // Pulsante verifica captcha
        const verifyBtn = document.getElementById('verifyBtn');
        verifyBtn.addEventListener('click', () => this.verifyCaptcha());

        // Pulsante torna alla verifica
        const backToVerificationBtn = document.getElementById('backToVerificationBtn');
        backToVerificationBtn.addEventListener('click', () => this.backToVerification());

        // Input captcha
        const captchaInput = document.getElementById('captchaInput');
        captchaInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.verifyCaptcha();
            }
        });
    }

    loadLanguagePreference() {
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage && translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
            document.getElementById('languageSelect').value = savedLanguage;
            changeLanguage(savedLanguage);
        }
    }

    generatePassword() {
        // Non serve più controllare isVerified perché il pulsante è visibile solo dopo la verifica
        const length = parseInt(document.getElementById('passwordLength').value);
        const useUppercase = document.getElementById('uppercase').checked;
        const useLowercase = document.getElementById('lowercase').checked;
        const useNumbers = document.getElementById('numbers').checked;
        const useSymbols = document.getElementById('symbols').checked;

        if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
            this.showError(getTranslation('error_length', this.currentLanguage));
            return;
        }

        const password = this.createPassword(length, useUppercase, useLowercase, useNumbers, useSymbols);
        document.getElementById('passwordOutput').value = password;
        
        this.updateStrengthMeter();
        this.showSuccess();
    }

    // SICUREZZA: Funzione per generazione numeri casuali crittograficamente sicuri
    getSecureRandomInt(min, max) {
        const range = max - min + 1;
        const bytesNeeded = Math.ceil(Math.log2(range) / 8);
        const maxNum = Math.pow(256, bytesNeeded);
        const maxValidNum = maxNum - (maxNum % range);
        
        let randomValue;
        do {
            const randomBytes = new Uint8Array(bytesNeeded);
            crypto.getRandomValues(randomBytes);
            randomValue = 0;
            for (let i = 0; i < bytesNeeded; i++) {
                randomValue = (randomValue << 8) + randomBytes[i];
            }
        } while (randomValue >= maxValidNum);
        
        return min + (randomValue % range);
    }

    // SICUREZZA: Funzione per ottenere carattere casuale sicuro
    getSecureRandomChar(charset) {
        const index = this.getSecureRandomInt(0, charset.length - 1);
        return charset[index];
    }

    createPassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
        let charset = '';
        let password = '';

        if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (useNumbers) charset += '0123456789';
        if (useSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        // SICUREZZA: Assicurati che almeno un carattere di ogni tipo selezionato sia incluso
        if (useUppercase) password += this.getSecureRandomChar('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        if (useLowercase) password += this.getSecureRandomChar('abcdefghijklmnopqrstuvwxyz');
        if (useNumbers) password += this.getSecureRandomChar('0123456789');
        if (useSymbols) password += this.getSecureRandomChar('!@#$%^&*()_+-=[]{}|;:,.<>?');

        // SICUREZZA: Riempi il resto della password con caratteri casuali sicuri
        for (let i = password.length; i < length; i++) {
            password += this.getSecureRandomChar(charset);
        }

        // Mischia la password
        return this.shuffleString(password);
    }

    shuffleString(str) {
        const arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }

    copyPassword() {
        const passwordOutput = document.getElementById('passwordOutput');
        if (passwordOutput.value) {
            passwordOutput.select();
            passwordOutput.setSelectionRange(0, 99999);
            document.execCommand('copy');
            
            const copyBtn = document.getElementById('copyBtn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = getTranslation('copied', this.currentLanguage);
            copyBtn.classList.add('success');
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('success');
            }, 2000);
        }
    }

    updateStrengthMeter() {
        const length = parseInt(document.getElementById('passwordLength').value);
        const useUppercase = document.getElementById('uppercase').checked;
        const useLowercase = document.getElementById('lowercase').checked;
        const useNumbers = document.getElementById('numbers').checked;
        const useSymbols = document.getElementById('symbols').checked;

        let score = 0;
        let strength = 'weak';

        // Calcola il punteggio basato sulle opzioni
        if (useUppercase) score += 1;
        if (useLowercase) score += 1;
        if (useNumbers) score += 1;
        if (useSymbols) score += 1;

        // Aggiungi punti per la lunghezza
        if (length >= 12) score += 1;
        if (length >= 16) score += 1;
        if (length >= 20) score += 1;

        // Determina la forza
        if (score >= 6) strength = 'strong';
        else if (score >= 4) strength = 'good';
        else if (score >= 2) strength = 'fair';
        else strength = 'weak';

        // Aggiorna l'interfaccia
        const strengthFill = document.getElementById('strengthFill');
        const strengthText = document.getElementById('strengthText');

        strengthFill.className = `strength-fill ${strength}`;
        strengthText.textContent = getTranslation(`strength_${strength}`, this.currentLanguage);
    }

    generateCaptcha() {
        const captchaTypes = ['math', 'color', 'count'];
        const captchaType = captchaTypes[Math.floor(Math.random() * captchaTypes.length)];
        const challengeDiv = document.getElementById('captchaChallenge');

        switch (captchaType) {
            case 'math':
                this.generateMathCaptcha(challengeDiv);
                break;
            case 'color':
                this.generateColorCaptcha(challengeDiv);
                break;
            case 'count':
                this.generateCountCaptcha(challengeDiv);
                break;
        }
    }

    generateMathCaptcha(challengeDiv) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operators = ['+', '-', '×'];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        let result;
        let displayOperator;

        switch (operator) {
            case '+':
                result = num1 + num2;
                displayOperator = '+';
                break;
            case '-':
                result = num1 - num2;
                displayOperator = '-';
                break;
            case '×':
                result = num1 * num2;
                displayOperator = '×';
                break;
        }

        // SICUREZZA: Usa textContent invece di innerHTML per prevenire XSS
        challengeDiv.textContent = '';
        
        const instructionDiv = document.createElement('div');
        instructionDiv.textContent = getTranslation('captcha_math', this.currentLanguage);
        challengeDiv.appendChild(instructionDiv);
        
        const equationDiv = document.createElement('div');
        equationDiv.style.fontSize = '2rem';
        equationDiv.style.margin = '1rem 0';
        equationDiv.textContent = `${num1} ${displayOperator} ${num2} = ?`;
        challengeDiv.appendChild(equationDiv);

        this.captchaAnswer = result.toString();
    }

    generateColorCaptcha(challengeDiv) {
        const colors = ['rosso', 'blu', 'verde', 'giallo', 'viola', 'arancione'];
        const colorNames = {
            it: ['rosso', 'blu', 'verde', 'giallo', 'viola', 'arancione'],
            en: ['red', 'blue', 'green', 'yellow', 'purple', 'orange'],
            es: ['rojo', 'azul', 'verde', 'amarillo', 'violeta', 'naranja'],
            fr: ['rouge', 'bleu', 'vert', 'jaune', 'violet', 'orange'],
            de: ['rot', 'blau', 'grün', 'gelb', 'lila', 'orange']
        };

        const colorIndex = Math.floor(Math.random() * colors.length);
        const colorName = colorNames[this.currentLanguage][colorIndex];
        const colorValue = colors[colorIndex];

        // SICUREZZA: Usa createElement invece di innerHTML per prevenire XSS
        challengeDiv.textContent = '';
        
        const instructionDiv = document.createElement('div');
        instructionDiv.textContent = getTranslation('captcha_color', this.currentLanguage);
        challengeDiv.appendChild(instructionDiv);
        
        const colorDiv = document.createElement('div');
        colorDiv.style.fontSize = '2rem';
        colorDiv.style.margin = '1rem 0';
        colorDiv.style.color = colorValue;
        colorDiv.textContent = colorName;
        challengeDiv.appendChild(colorDiv);

        this.captchaAnswer = colorName;
    }

    generateCountCaptcha(challengeDiv) {
        const characters = ['★', '♦', '♠', '♥', '♣', '●', '■', '▲'];
        const char = characters[Math.floor(Math.random() * characters.length)];
        const count = Math.floor(Math.random() * 5) + 3;
        
        let displayText = '';
        for (let i = 0; i < count; i++) {
            displayText += char + ' ';
        }

        // SICUREZZA: Usa createElement invece di innerHTML per prevenire XSS
        challengeDiv.textContent = '';
        
        const instructionDiv = document.createElement('div');
        instructionDiv.textContent = getTranslation('captcha_count', this.currentLanguage);
        challengeDiv.appendChild(instructionDiv);
        
        const countDiv = document.createElement('div');
        countDiv.style.fontSize = '2rem';
        countDiv.style.margin = '1rem 0';
        countDiv.style.letterSpacing = '0.5rem';
        countDiv.textContent = displayText;
        challengeDiv.appendChild(countDiv);

        this.captchaAnswer = count.toString();
    }

    showStep(step) {
        this.currentStep = step;
        
        if (step === 1) {
            document.getElementById('verificationCard').style.display = 'block';
            document.getElementById('passwordCard').style.display = 'none';
            document.getElementById('captchaInput').focus();
        } else if (step === 2) {
            document.getElementById('verificationCard').style.display = 'none';
            document.getElementById('passwordCard').style.display = 'block';
        }
    }

    backToVerification() {
        this.showStep(1);
        this.generateCaptcha();
        document.getElementById('captchaInput').value = '';
    }

    // SICUREZZA: Funzione per validazione input captcha
    validateCaptchaInput(input) {
        // Rimuovi spazi e normalizza
        const cleanInput = input.trim();
        
        // Validazione lunghezza (1-10 caratteri)
        if (cleanInput.length < 1 || cleanInput.length > 10) {
            return { valid: false, reason: 'length' };
        }
        
        // Validazione caratteri (solo lettere, numeri e spazi)
        const validChars = /^[a-zA-Z0-9\s]+$/;
        if (!validChars.test(cleanInput)) {
            return { valid: false, reason: 'chars' };
        }
        
        return { valid: true, input: cleanInput };
    }

    verifyCaptcha() {
        const userInput = document.getElementById('captchaInput').value;
        
        // SICUREZZA: Validazione rigorosa dell'input
        const validation = this.validateCaptchaInput(userInput);
        
        if (!validation.valid) {
            let errorMessage = getTranslation('error_captcha', this.currentLanguage);
            if (validation.reason === 'length') {
                errorMessage = 'Input troppo lungo o troppo corto. Inserisci 1-10 caratteri.';
            } else if (validation.reason === 'chars') {
                errorMessage = 'Caratteri non validi. Usa solo lettere e numeri.';
            }
            this.showError(errorMessage);
            document.getElementById('captchaInput').value = '';
            this.generateCaptcha();
            return;
        }
        
        if (validation.input.toLowerCase() === this.captchaAnswer.toLowerCase()) {
            this.isVerified = true;
            this.showStep(2);
            this.showSuccess(getTranslation('verification_success', this.currentLanguage));
        } else {
            this.showError(getTranslation('error_captcha', this.currentLanguage));
            document.getElementById('captchaInput').value = '';
            this.generateCaptcha();
        }
    }

    showSuccess(message = null) {
        if (message) {
            // Mostra un toast di successo
            const toast = document.createElement('div');
            toast.className = 'success-toast';
            toast.textContent = message;
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #48BB78;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1000;
                animation: slideIn 0.3s ease-out;
            `;

            document.body.appendChild(toast);

            setTimeout(() => {
                toast.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
        } else {
            // Animazione del pulsante
            const generateBtn = document.getElementById('generateBtn');
            generateBtn.classList.add('success');
            setTimeout(() => {
                generateBtn.classList.remove('success');
            }, 300);
        }
    }

    showError(message) {
        // Crea un toast di errore
        const toast = document.createElement('div');
        toast.className = 'error-toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #E53E3E;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
}

// Aggiungi stili CSS per le animazioni dei toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Inizializza l'applicazione quando il DOM è caricato
document.addEventListener('DOMContentLoaded', () => {
    // SICUREZZA: Non esporre l'istanza globalmente per prevenire manipolazione
    const app = new PassGen();
    
    // Esponi solo i metodi necessari per il cambio lingua
    window.passGenApp = {
        generateCaptcha: () => app.generateCaptcha()
    };
}); 