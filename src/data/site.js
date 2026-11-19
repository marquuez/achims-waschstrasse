export const CONTACT = {
  address: 'Ernst-Reuter-Straße 74',
  city: '32257 Bünde, Deutschland',
  phone: '+49 5223 7926860',
  phoneHref: 'tel:+4952237926860',
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
  office: 'Finanzamt Wiedenbrück',
  taxNumber: '347/5166/1012',
  vatId: 'DE289075977',
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
    description: 'Hochleistungstrocknung für streifenfreies Ergebnis.',
    icon: '💨',
  },
  {
    title: 'Politur',
    description: 'Ceramic-Politur für extra Tiefenglanz und Lackschutz.',
    icon: '🔆',
  },
]

const PLATIN_FEATURES = [
  'Intensiv-Vorwäsche',
  'Felgenreinigung',
  'Schaumwand',
  'Unterbodenwäsche',
  'Ceramic-Politur',
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
    features: [
      'Intensiv-Vorwäsche',
      'Felgenreinigung',
      'Unterbodenwäsche',
      'Premium-Wachsversiegelung',
      'Glanztrocknung',
    ],
  },
  {
    name: 'Intensiv',
    icon: 'bubbles',
    price: '14,50 €',
    freeVacuum: true,
    features: ['Intensiv-Vorwäsche', 'Aktivschaum', 'Unterbodenwäsche', 'Glanztrocknung'],
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
    features: [...PLATIN_FEATURES],
  },
]

export const VEHICLE_LIMITS = {
  maxHeight: '2,60 m',
  maxWidth: '2,55 m',
  forbidden: [
    'Anhänger',
    'PKW mit Spoileranbauten',
    'Dachträger / Dachboxen',
  ],
}
