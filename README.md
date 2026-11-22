# Achims Waschstrasse – Website

React-Website für die Waschstraße in Bünde (Vite + React Router).

## Voraussetzungen

- [Node.js](https://nodejs.org/) (LTS, Version 18 oder neuer) inkl. npm

## Lokal starten

```bash
npm install
npm run dev
```

Im Browser: **http://localhost:5173**

## GitHub Pages

Öffentliche URL (nach Aktivierung):  
**https://marquuez.github.io/achims-waschstrasse/**

### Einmalig auf GitHub einrichten

1. Repository: [marquuez/achims-waschstrasse](https://github.com/marquuez/achims-waschstrasse)
2. **Settings** → **Pages**
3. **Build and deployment** → **Source:** **GitHub Actions**
4. Änderungen auf den Branch **`main`** pushen – der Workflow **Deploy GitHub Pages** baut und veröffentlicht automatisch.

### Lokal wie auf GitHub Pages testen

```bash
npm run preview:pages
```

(Der Build nutzt dann den Pfad `/achims-waschstrasse/` wie auf GitHub Pages.)

## Produktions-Build (ohne Pages-Pfad)

```bash
npm run build
npm run preview
```

## Inhalte anpassen

- Kontakt, Öffnungszeiten, Preise, Fahrzeugmaße, Zahlungsarten, Waschkarte, Impressum: `src/data/site.js`
- Logos der Zahlungsarten: `public/payment/`
- Schriftarten (Lilita One, Pacifico, Nunito) werden lokal über `@fontsource` ausgeliefert – siehe `src/fonts.js`. Bitte keine Google-Fonts-Links in `index.html` einfügen (Datenschutz).
- Instagram-Link: Feld `instagram` in `src/data/site.js`
- Logo: `public/logo.png` (grünes Banner mit Waschbär). Daraus erzeugt `npm run brand:assets` die Grafiken `logo-banner.png`, `wordmark.png` (Header/Footer), `mascot.png` (Startseite) und `favicon.png`.
- Achtung: `npm run logo:cut` überschreibt `public/logo.png` mit dem alten Logo aus `logo-source.png`.
- Logo neu erzeugen: `npm run logo:cut`

## Seiten

- `/` – Startseite
- `/datenschutz` – Datenschutzerklärung
- `/agb` – Allgemeine Geschäftsbedingungen
- `/impressum` – Impressum
