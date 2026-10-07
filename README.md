# Achims Waschstrasse – Website

React-Website für die Waschstraße in Bünde (Vite + React Router).

## Voraussetzungen

- [Node.js](https://nodejs.org/) (LTS, Version 18 oder neuer) inkl. npm

## Lokal starten

```bash
cd "C:\Users\TWS\Documents\Achim Waschstrasse"
npm install
npm run dev
```

Im Browser öffnen: **http://localhost:5173**

## Produktions-Build

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
