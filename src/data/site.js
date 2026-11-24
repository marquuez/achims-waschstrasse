export const CONTACT = {
  address: 'Ernst-Reuter-Straße 74',
  city: '32257 Bünde, Deutschland',
  phone: '+49 160 90222734',
  phoneHref: 'tel:+4916090222734',
  email: 'info@achims-waschstrasse.de',
  emailHref: 'mailto:info@achims-waschstrasse.de',
  instagram: 'https://www.instagram.com/',
  mapsQuery: 'Ernst-Reuter-Straße 74, 32257 Bünde',
}

export const OPENING_HOURS = [
  { day: 'Montag', hours: '08:00–18:00' },
  { day: 'Dienstag', hours: '08:00–18:00' },
  { day: 'Mittwoch', hours: '08:00–18:00' },
  { day: 'Donnerstag', hours: '08:00–18:00' },
  { day: 'Freitag', hours: '08:00–18:00' },
  { day: 'Samstag', hours: '08:00–18:00' },
  { day: 'Sonntag', hours: '08:00–18:00' },
]

// Kurzfassung für den Footer
export const OPENING_SUMMARY = {
  label: 'Mo – So',
  hours: '08:00–18:00 Uhr',
  note: 'Täglich geöffnet',
}

export const TAX_INFO = {
  vatId: 'DE289075977',
}

// Impressum: Inhaber/in bzw. Vertretungsberechtigte/r (Pflichtangabe nach § 5 DDG)
export const IMPRINT = {
  company: "Achims Waschstraße",
  owner: 'Geschäftsführer: Christof Lempa',
}

export const CARE_PROGRAM = [
  {
    title: 'Vorwäsche',
    description: 'Gründliche Vorbereitung mit Schaum und Hochdruck.',
    icon: '💧',
  },
  {
    title: 'Hauptwäsche',
    description: 'Schonende Reinigung der Fahrzeugoberfläche.',
    icon: '🧽',
  },
  {
    title: 'Premium\u00ADversiegelung',
    description: 'Schutz und Glanz für lang anhaltende Sauberkeit.',
    icon: '✨',
  },
  {
    title: 'Trocknung',
    description: 'Hochleistungstrocknung für ein streifenfreies Ergebnis.',
    icon: '💨',
  },
  {
    title: 'Politur',
    description: 'Keramikpolitur für extra Tiefenglanz und Lackschutz.',
    icon: '🔆',
  },
]

// Inhalte wie auf der beleuchteten Preistafel vor Ort
const PLATIN_FEATURES = [
  'Intensiv-Vorwäsche',
  'Felgenreinigung',
  'Schaumwand',
  'Unterbodenwäsche',
  'Keramikpolitur',
  'Premium-Wachsversiegelung',
  'Glanztrocknung',
]

const GLANZ_FEATURES = [
  'Intensiv-Vorwäsche',
  'Felgenreinigung',
  'Schaumwand',
  'Unterbodenwäsche',
  'Premium-Wachsversiegelung',
  'Glanztrocknung',
]

export const PRICING = [
  {
    name: 'Platin',
    icon: 'foam-sparkle',
    price: '19,50 €',
    freeVacuum: true,
    features: PLATIN_FEATURES,
  },
  {
    name: 'Glanz',
    icon: 'sparkle',
    price: '16,50 €',
    freeVacuum: true,
    features: GLANZ_FEATURES,
  },
  {
    name: 'Intensiv',
    icon: 'bubbles',
    price: '14,50 €',
    freeVacuum: true,
    features: [
      'Intensiv-Vorwäsche',
      'Schaumwand',
      'Unterbodenwäsche',
      'Premium-Wachsversiegelung',
      'Glanztrocknung',
    ],
  },
  {
    name: 'Schaumpflege',
    icon: 'foam',
    price: '12,50 €',
    features: ['Vorwäsche', 'Aktivschaum', 'Glanztrocknung'],
  },
  {
    name: 'Pick-up / Cabrio',
    icon: 'cabrio',
    price: '22,50 €',
    freeVacuum: true,
    features: [...GLANZ_FEATURES],
  },
]

export const VEHICLE_LIMITS = {
  maxHeight: '2,15 m',
  maxWidth: '2,40 m',
  groundClearance: '0,10 m',
  maxTireWidth: '370 mm',
  note: 'Bei Sondergrößen von Reifen und Felgen bitte das Bedienpersonal fragen.',
  forbidden: [
    'Anhänger',
    'PKW mit Spoileranbauten',
    'Dachträger / Dachboxen',
  ],
}

// Zahlungsarten (Logos liegen in public/payment/)
export const PAYMENT_METHODS = [
  { name: 'Barzahlung', logo: 'payment/bar.svg' },
  { name: 'Kartenzahlung', logo: 'payment/karte.svg' },
  { name: 'Visa', logo: 'payment/visa.svg' },
  { name: 'Mastercard', logo: 'payment/mastercard.svg' },
  { name: 'DKV', logo: 'payment/dkv.png' },
  { name: 'UTA', logo: 'payment/uta.png' },
]

// Achims Waschkarte – Aufladen & Bonus sichern
export const WASHCARD = {
  title: "Achims Waschkarte",
  claim: 'Aufladen & Waschbonus sichern!',
  tiers: [
    { charge: '50 €', credit: '52,50 €', bonus: '+5 %' },
    { charge: '100 €', credit: '107,50 €', bonus: '+7,5 %' },
    { charge: '150 €', credit: '165 €', bonus: '+10 %' },
    { charge: '200 €', credit: '225 €', bonus: '+12,5 %' },
  ],
  highlight: 'Kostenlose Kundenkarte ab 50 € Erstaufladung',
  benefits: ['Keine Monatsgebühr', 'Keine Vertragsbindung', 'Für alle Waschprogramme'],
  note: 'Pilotaktion – begrenzte Ausgabe',
}

// So fahren Sie durch die Waschstraße (Förderband)
export const CONVEYOR_GUIDE = {
  rules: ['Gang raus', 'Automatik „N“', 'Motor aus', 'Nicht lenken', 'Nicht bremsen'],
  before: [
    'Antenne abschrauben oder einfahren',
    'Außenspiegel einklappen',
    'Fenster und Schiebedach schließen',
    'Scheibenwischer ausschalten (auch Regensensor und Heckwischer)',
    'Langsam und gerade auf das Förderband fahren, bis Sie zum Anhalten aufgefordert werden',
  ],
  manual: [
    'Kupplung treten und den Gang herausnehmen (Leerlauf)',
    'Handbremse lösen',
    'Motor ausschalten',
    'Füße von den Pedalen nehmen – nicht bremsen',
    'Lenkrad loslassen – nicht lenken',
    'Erst nach dem Freigabesignal Motor starten, Gang einlegen und zügig ausfahren',
  ],
  automatic: [
    'Wählhebel auf „N“ (Neutral) stellen',
    'Elektrische Parkbremse lösen und Auto-Hold ausschalten',
    'Motor ausschalten – sofern das Fahrzeug dabei in „N“ bleibt',
    'Fuß von der Bremse nehmen – nicht bremsen',
    'Lenkrad loslassen – nicht lenken',
    'Erst nach dem Freigabesignal Motor starten, auf „D“ schalten und zügig ausfahren',
  ],
  automaticNote:
    'Springt Ihr Automatikfahrzeug beim Abstellen des Motors automatisch auf „P“? Dann nutzen Sie den Waschstraßen-Modus laut Bedienungsanleitung oder fragen Sie unser Personal.',
}
