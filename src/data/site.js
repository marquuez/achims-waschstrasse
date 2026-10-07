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
  { day: 'Montag', hours: '08:00–19:00' },
  { day: 'Dienstag', hours: '08:00–19:00' },
  { day: 'Mittwoch', hours: '08:00–19:00' },
  { day: 'Donnerstag', hours: '08:00–19:00' },
  { day: 'Freitag', hours: '08:00–19:00' },
  { day: 'Samstag', hours: '08:00–19:00' },
  { day: 'Sonntag', hours: 'Geschlossen', closed: true },
]

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
    title: 'Wachs',
    description: 'Schutz und Glanz für lang anhaltende Sauberkeit.',
    icon: '✨',
  },
  {
    title: 'Trocknung',
    description: 'Hochleistungstrocknung für streifenfreies Ergebnis.',
    icon: '💨',
  },
]

export const PRICING = [
  {
    name: 'Premium',
    price: '21,- €',
    features: [
      'Schaumteppich',
      'Felgenreinigung',
      'ShineTecs Polierstation',
      'Hochdruck-BPS',
      'Unterbodenwäsche',
      'Hochleistungstrocknung',
      'Microfaser Tuchtrockner',
    ],
  },
  {
    name: 'Cabrio',
    price: '18,- €',
    features: [
      'Schaumbogen',
      'Felgenreinigung',
      'DryGloss Extra (kein Wachs)',
      'Reduzierter Druck der Dachbürste',
      'Hochleistungstrocknung',
      'Microfaser Tuchtrockner',
    ],
  },
  {
    name: 'Glanz',
    price: '18,- €',
    features: [
      'Schaumbogen',
      'Felgenreinigung',
      'Wachs',
      'Hochdruck-BPS',
      'Hochleistungstrocknung',
      'Microfaser Tuchtrockner',
    ],
  },
  {
    name: 'Wash',
    price: '15,- €',
    features: [
      'Schaumbogen',
      'Felgenreinigung',
      'DryGloss Extra',
      'Hochleistungstrocknung',
      'Microfaser Tuchtrockner',
    ],
  },
]

export const VEHICLE_LIMITS = {
  maxHeight: '2,60 m',
  maxWidth: '2,55 m',
  forbidden: [
    'Pickup',
    'Anhänger',
    'PKW mit Spoileranbauten',
    'Dachträger / Dachboxen',
  ],
}
