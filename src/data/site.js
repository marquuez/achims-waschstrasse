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
  { day: 'Montag', hours: '08:00–18:30' },
  { day: 'Dienstag', hours: '08:00–18:30' },
  { day: 'Mittwoch', hours: '08:00–18:30' },
  { day: 'Donnerstag', hours: '08:00–18:30' },
  { day: 'Freitag', hours: '08:00–18:30' },
  { day: 'Samstag', hours: '08:00–18:30' },
  { day: 'Sonntag', hours: 'Geschlossen', closed: true },
]

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
  'Intensiv-Vorwäsche inkl. Felgen',
  'Schaumwand',
  'Unterbodenwäsche',
  'Ceramic-Politur',
  'Glanztrocknung',
  'Premiumversiegelung (Wachs)',
]

export const PRICING = [
  {
    name: 'Platin',
    price: '19,50 €',
    features: PLATIN_FEATURES,
  },
  {
    name: 'Glanz',
    price: '16,50 €',
    features: [
      'Intensiv-Vorwäsche inkl. Felgen',
      'Schaumwand',
      'Premiumversiegelung (Wachs)',
      'Glanztrockner',
    ],
  },
  {
    name: 'Intensiv',
    price: '14,50 €',
    features: ['Intensiv-Vorwäsche', 'Aktivschaum', 'Unterbodenwäsche', 'Glanztrockner'],
  },
  {
    name: 'Schaumpflege',
    price: '12,50 €',
    features: ['Vorwäsche', 'Aktivschaum', 'Glanztrockner'],
  },
  {
    name: 'Pickup und Cabrio',
    price: '22,50 €',
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
