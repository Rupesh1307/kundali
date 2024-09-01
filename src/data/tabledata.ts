export interface PlanetInfo {
  planet: string;
  sign: string;
  signLord: string;
  degree: string;
  house: string;
}

export const planetData: PlanetInfo[] = [
  {
    planet: 'Ascendant',
    sign: 'Pisces',
    signLord: 'Jupiter',
    degree: '13°13\'24"',
    house: '1',
  },
  {
    planet: 'Sun',
    sign: 'Sagittarius',
    signLord: 'Jupiter',
    degree: '13°13\'24"',
    house: '10',
  },
  {
    planet: 'Moon',
    sign: 'Aries',
    signLord: 'Mars',
    degree: '13°13\'24"',
    house: '2',
  },
  {
    planet: 'Mercury',
    sign: 'Capricorn',
    signLord: 'Saturn',
    degree: '13°13\'24"',
    house: '11',
  },
  {
    planet: 'Venus',
    sign: 'Capricorn',
    signLord: 'Saturn',
    degree: '13°13\'24"',
    house: '11',
  },
  {
    planet: 'Mars',
    sign: 'Capricorn',
    signLord: 'Saturn',
    degree: '13°13\'24"',
    house: '11',
  },
  {
    planet: 'Jupiter',
    sign: 'Sagittarius',
    signLord: 'Jupiter',
    degree: '13°13\'24"',
    house: '10',
  },
  {
    planet: 'Saturn',
    sign: 'Aquarius',
    signLord: 'Jupiter',
    degree: '13°13\'24"',
    house: '12',
  },
  {
    planet: 'Rahu',
    sign: 'Virgo',
    signLord: 'Mercury',
    degree: '13°13\'24"',
    house: '12',
  },
  {
    planet: 'Ketu',
    sign: 'Pisces',
    signLord: 'Mercury',
    degree: '13°13\'24"',
    house: '12',
  },
  {
    planet: 'Neptune',
    sign: 'Capricorn',
    signLord: 'Saturn',
    degree: '13°13\'24"',
    house: '12',
  },
  {
    planet: 'Uranus',
    sign: 'Capricorn',
    signLord: 'Saturn',
    degree: '13°13\'24"',
    house: '12',
  },
  {
    planet: 'Pluto',
    sign: 'Capricorn',
    signLord: 'Saturn',
    degree: '13°13\'24"',
    house: '12',
  },
];
