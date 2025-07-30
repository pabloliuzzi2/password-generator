# PassGen - Generatore di Password Sicuro

Un'applicazione web moderna per la generazione di password sicure con design flat minimal, supporto multilingua e sistema di verifica a 2 step.

## 🚀 Caratteristiche Principali

- **🔐 Generazione Password Sicure**: Algoritmo crittograficamente sicuro per la generazione di password
- **🌍 Supporto Multilingua**: Italiano, Inglese, Spagnolo, Francese, Tedesco
- **🎨 Design Flat Minimal**: Interfaccia moderna e pulita con colore rosso dominante
- **🛡️ Sistema Anti-Bot Avanzato**: Verifica captcha a 2 step per prevenire l'uso automatizzato
- **📊 Indicatore di Forza**: Valutazione in tempo reale della sicurezza della password
- **📱 Responsive Design**: Ottimizzato per desktop, tablet e mobile
- **📋 Copia negli Appunti**: Funzionalità one-click per copiare le password
- **🔄 Flusso Intuitivo**: Processo a 2 step con navigazione chiara
- **🎯 Feedback Intelligente**: Messaggi di errore e successo specifici e chiari

## 🎨 Design

- **Stile**: Flat minimal con ombre sottili
- **Colore Dominante**: Rosso (#E53E3E)
- **Font**: Inter (Google Fonts)
- **Icona**: SVG personalizzata con tema sicurezza

## 🌍 Lingue Supportate

- 🇮🇹 **Italiano** (default)
- 🇺🇸 **English**
- 🇪🇸 **Español**
- 🇫🇷 **Français**
- 🇩🇪 **Deutsch**

## 🛡️ Sistema Anti-Bot Avanzato

L'applicazione implementa un sistema di verifica a **2 step** per garantire la sicurezza:

### Step 1: Verifica di Sicurezza
Prima di accedere al generatore, l'utente deve completare una verifica captcha che include tre tipi di sfide:

1. **🧮 Operazioni Matematiche**: Calcoli semplici (addizione, sottrazione, moltiplicazione)
2. **🎨 Riconoscimento Colori**: Identificazione del colore del testo in diverse lingue
3. **🔢 Conteggio Caratteri**: Conta di simboli specifici (★, ♦, ♠, ♥, ♣, ●, ■, ▲)

### Step 2: Generatore Password
Solo dopo la verifica completata, l'utente può accedere al generatore di password con tutte le funzionalità disponibili.

### Caratteristiche di Sicurezza:
- **Verifica obbligatoria**: Non è possibile aggirare il sistema di verifica
- **Captcha dinamici**: Ogni tentativo genera una nuova sfida
- **Supporto multilingua**: I captcha si adattano alla lingua selezionata
- **Feedback intelligente**: Messaggi di errore specifici e chiari

## 📱 Funzionalità

### Generazione Password
- Lunghezza personalizzabile (8-64 caratteri)
- Opzioni configurabili:
  - Maiuscole (A-Z)
  - Minuscole (a-z)
  - Numeri (0-9)
  - Simboli (!@#$%^&*)

### Indicatore di Forza
- **Debole**: Password con caratteristiche limitate
- **Discreta**: Password con alcune caratteristiche di sicurezza
- **Buona**: Password con buone caratteristiche di sicurezza
- **Forte**: Password con caratteristiche di sicurezza ottimali

### Interfaccia Utente
- **🎯 Indicatori di Step**: Visualizzazione chiara del progresso (Step 1 → Step 2)
- **🎛️ Controllo slider**: Per la lunghezza della password (8-64 caratteri)
- **☑️ Checkbox personalizzabili**: Per le opzioni di caratteri
- **📊 Barra di forza visiva**: Con colori corrispondenti al livello di sicurezza
- **🔘 Pulsanti con feedback visivo**: Animazioni e stati di hover
- **💬 Toast notifications**: Messaggi di successo e errore eleganti
- **🔄 Navigazione fluida**: Possibilità di tornare alla verifica se necessario

## 🚀 Installazione e Utilizzo

1. **Clona il repository**:
   ```bash
   git clone https://github.com/yourusername/Pass-gen.git
   cd Pass-gen
   ```

2. **Apri l'applicazione**:
   - Apri `index.html` nel tuo browser web
   - Oppure avvia un server locale:
     ```bash
     python -m http.server 8000
     # Poi vai su http://localhost:8000
     ```

3. **Utilizzo**:
   - **Step 1**: Completa la verifica captcha di sicurezza
   - **Step 2**: Configura le opzioni della password
   - **Genera**: Clicca su "Genera Password"
   - **Copia**: Usa il pulsante "Copia" per copiare negli appunti

## 📁 Struttura del Progetto

```
Pass-gen/
├── index.html          # File HTML principale
├── styles.css          # Stili CSS
├── app.js              # Logica JavaScript principale
├── translations.js     # Sistema di traduzioni
├── assets/
│   └── icon.svg        # Icona dell'applicazione
└── README.md           # Documentazione
```

## 🔧 Tecnologie e Architettura

### 🛠️ Stack Tecnologico
- **HTML5**: Struttura semantica e accessibile
- **CSS3**: Stili moderni con variabili CSS, Grid, Flexbox e animazioni
- **JavaScript ES6+**: Logica dell'applicazione con classi e moduli
- **LocalStorage**: Salvataggio persistente delle preferenze utente
- **Web APIs**: Clipboard API per la copia negli appunti

### 🏗️ Architettura dell'Applicazione

#### Struttura del Codice
```
PassGen/
├── 📄 index.html          # Struttura HTML principale
├── 🎨 styles.css          # Stili CSS con design system
├── ⚙️ app.js              # Logica principale dell'applicazione
├── 🌍 translations.js     # Sistema di traduzioni multilingua
├── 🖼️ assets/icon.svg     # Icona SVG dell'applicazione
└── 📚 README.md           # Documentazione completa
```

#### Componenti Principali
- **PassGen Class**: Classe principale che gestisce tutta la logica
- **Sistema di Step**: Gestione del flusso a 2 step (verifica → generazione)
- **Captcha Engine**: Generazione dinamica di captcha multilingua
- **Password Generator**: Algoritmo di generazione password sicure
- **Translation System**: Sistema di traduzioni completo

### 🔐 Sicurezza Implementata

#### Algoritmo di Generazione
```javascript
// Esempio di generazione password
function createPassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
    // 1. Costruisce il charset basato sulle opzioni
    // 2. Assicura almeno un carattere per ogni tipo selezionato
    // 3. Riempe il resto della password
    // 4. Mischia i caratteri per maggiore sicurezza
}
```

#### Sistema Anti-Bot
- **Captcha dinamici**: Ogni tentativo genera una nuova sfida
- **Validazione lato client**: Controlli immediati per feedback veloce
- **Prevenzione automatizzazione**: Difficoltà per bot e script

### 🌍 Sistema Multilingua

#### Struttura Traduzioni
```javascript
const translations = {
    'it': { /* Traduzioni italiane */ },
    'en': { /* Traduzioni inglesi */ },
    'es': { /* Traduzioni spagnole */ },
    'fr': { /* Traduzioni francesi */ },
    'de': { /* Traduzioni tedesche */ }
};
```

#### Funzionalità
- **Cambio lingua in tempo reale**: Aggiornamento immediato dell'interfaccia
- **Salvataggio preferenze**: La lingua viene ricordata tra le sessioni
- **Captcha multilingua**: I captcha si adattano alla lingua selezionata

## 🎯 Funzionalità Avanzate

### 🔐 Algoritmo di Generazione
- **Randomizzazione sicura**: Utilizza `Math.random()` per la generazione
- **Distribuzione garantita**: Assicura la presenza di almeno un carattere per ogni tipo selezionato
- **Miscelazione**: Mischia i caratteri per maggiore sicurezza
- **Validazione**: Controlla che almeno un'opzione sia selezionata

### 🌍 Gestione Lingue
- **Salvataggio automatico**: La lingua preferita viene salvata nel localStorage
- **Cambio in tempo reale**: Aggiornamento immediato di tutti gli elementi
- **Traduzioni complete**: Tutti gli elementi dell'interfaccia sono tradotti
- **Captcha multilingua**: I captcha si adattano alla lingua selezionata

### 🛡️ Sicurezza e UX
- **Verifica obbligatoria**: Sistema a 2 step non aggirabile
- **Validazione input**: Controlli lato client per tutti gli input
- **Prevenzione bot**: Captcha dinamici e variabili
- **Feedback intelligente**: Messaggi di errore specifici e utili
- **Navigazione intuitiva**: Flusso chiaro e progressivo

### 🎨 Design e Animazioni
- **Indicatori di step**: Visualizzazione chiara del progresso
- **Animazioni fluide**: Transizioni e feedback visivo
- **Toast notifications**: Messaggi di successo e errore eleganti
- **Responsive design**: Ottimizzato per tutti i dispositivi

## 🎨 Personalizzazione

### Colori
I colori possono essere personalizzati modificando le variabili CSS in `styles.css`:

```css
:root {
    --primary-red: #E53E3E;
    --primary-red-dark: #C53030;
    --primary-red-light: #FC8181;
    /* ... altri colori */
}
```

### Aggiungere Nuove Lingue
Per aggiungere una nuova lingua, modifica `translations.js`:

```javascript
const translations = {
    // ... lingue esistenti
    'nuova_lingua': {
        title: "Titolo",
        app_name: "Nome App",
        // ... altre traduzioni
    }
};
```

## 📱 Compatibilità e Requisiti

### 🌐 Browser Supportati
- **Chrome**: Versione 60+
- **Firefox**: Versione 55+
- **Safari**: Versione 12+
- **Edge**: Versione 79+

### 📱 Dispositivi
- **Desktop**: Ottimizzato per schermi da 1024px in su
- **Tablet**: Supporto completo per iPad e tablet Android
- **Smartphone**: Design responsive per iOS e Android

### 💻 Sistemi Operativi
- **Windows**: 10, 11
- **macOS**: 10.14+
- **Linux**: Distribuzioni moderne
- **iOS**: 12+
- **Android**: 8+

### 🔧 Requisiti Tecnici
- **JavaScript**: Abilitato nel browser
- **LocalStorage**: Supportato per salvare le preferenze
- **CSS Grid/Flexbox**: Per il layout responsive

## 🤝 Contributi

I contributi sono benvenuti! Per contribuire al progetto:

### 🚀 Come Contribuire

1. **Fork**: Fai un fork del repository
2. **Branch**: Crea un branch per la tua feature (`git checkout -b feature/nuova-funzionalita`)
3. **Commit**: Committa le modifiche (`git commit -am 'Aggiunge nuova funzionalità'`)
4. **Push**: Fai push al branch (`git push origin feature/nuova-funzionalita`)
5. **Pull Request**: Apri una Pull Request

### 📋 Aree di Miglioramento

- **🌍 Nuove lingue**: Aggiungere supporto per altre lingue
- **🎨 Temi**: Implementare temi di colore personalizzabili
- **🔐 Algoritmi**: Migliorare gli algoritmi di generazione password
- **📱 PWA**: Convertire in Progressive Web App
- **🧪 Test**: Aggiungere test automatizzati
- **📚 Documentazione**: Migliorare la documentazione del codice

### 🐛 Segnalazione Bug

Se trovi un bug, apri una issue con:
- Descrizione dettagliata del problema
- Passi per riprodurre il bug
- Screenshot (se applicabile)
- Browser e versione utilizzati

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 🚀 Roadmap Futura

### 🔮 Prossime Funzionalità
- **🔐 Gestione Password**: Salvataggio sicuro delle password generate
- **📊 Statistiche**: Analisi della forza delle password generate
- **🎨 Temi**: Modalità scura e temi personalizzabili
- **📱 PWA**: Installazione come app nativa
- **🔗 Integrazione**: API per integrazione con altri servizi
- **📈 Analytics**: Statistiche di utilizzo (privacy-friendly)

### 🛠️ Miglioramenti Tecnici
- **⚡ Performance**: Ottimizzazioni per caricamento più veloce
- **🔒 Sicurezza**: Implementazione di algoritmi crittografici più avanzati
- **🧪 Testing**: Suite di test automatizzati
- **📚 Docs**: Documentazione API e guide per sviluppatori

## 🙏 Ringraziamenti

- **Google Fonts** per il font Inter
- **La comunità open source** per l'ispirazione e le librerie
- **Tutti i contributori** che hanno testato e migliorato l'applicazione
- **Gli utenti** che forniscono feedback prezioso

## 📞 Supporto e Note Utili

### 🆘 Supporto
- **Issues**: Per bug e richieste di funzionalità
- **Discussions**: Per domande e discussioni generali
- **Wiki**: Per guide dettagliate e FAQ

### 💡 Note per Sviluppatori

#### 🔧 Sviluppo Locale
```bash
# Clona il repository
git clone https://github.com/yourusername/Pass-gen.git
cd Pass-gen

# Avvia un server locale
python -m http.server 8000
# oppure
npx serve .

# Apri nel browser
open http://localhost:8000
```

#### 🧪 Testing
- **Browser Testing**: Testa su Chrome, Firefox, Safari, Edge
- **Responsive Testing**: Verifica su mobile, tablet, desktop
- **Accessibility**: Controlla l'accessibilità con screen reader
- **Performance**: Usa Lighthouse per ottimizzazioni

#### 🔍 Debug
- **Console**: Controlla la console del browser per errori
- **LocalStorage**: Verifica il salvataggio delle preferenze
- **Network**: Controlla il caricamento delle risorse

### 📋 Checklist di Deployment

- [ ] Test su tutti i browser target
- [ ] Verifica responsive design
- [ ] Controllo accessibilità
- [ ] Test performance
- [ ] Validazione HTML/CSS
- [ ] Minificazione risorse (opzionale)
- [ ] Compressione immagini (opzionale)

### 🚀 Ottimizzazioni Suggerite

#### Performance
- **Lazy Loading**: Per componenti non critici
- **Service Worker**: Per cache offline
- **CDN**: Per risorse esterne (Google Fonts)

#### Sicurezza
- **CSP**: Content Security Policy
- **HTTPS**: Sempre in produzione
- **Validazione**: Input sanitization

#### UX
- **Loading States**: Indicatori di caricamento
- **Error Boundaries**: Gestione errori elegante
- **Progressive Enhancement**: Funzionalità graduali

---

**PassGen** - Genera password sicure con stile! 🔐✨

*Sicuro, moderno, multilingua - Il tuo generatore di password di fiducia.* 