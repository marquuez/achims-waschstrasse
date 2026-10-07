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

- Kontakt, Öffnungszeiten, Preise: `src/data/site.js`
- Instagram-Link: Feld `instagram` in `src/data/site.js`
- Logo: `public/logo.png` (aus `public/logo-source.png`, weißer Rand transparent)
- Logo neu erzeugen: `npm run logo:cut`

## Seiten

- `/` – Startseite
- `/datenschutz` – Datenschutzerklärung
- `/agb` – Allgemeine Geschäftsbedingungen
