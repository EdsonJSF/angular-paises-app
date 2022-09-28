export interface Country {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: CapitalInfo;
  car: Car;
  alpha2Code: string;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: CoatOfArms;
  continents: string[];
  currencies: Currencies;
  demonyms: Demonyms;
  fifa: string;
  flag: string;
  flags: CoatOfArms;
  gini: Gini;
  idd: Idd;
  independent: boolean;
  landlocked: boolean;
  languages: Languages;
  latlng: number[];
  maps: Maps;
  name: Name;
  population: number;
  postalCode: PostalCode;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: Translations;
  unMember: boolean;
}

export interface Translations {
  ara: Name;
  bre: Name;
  ces: Name;
  cym: Name;
  deu: Name;
  est: Name;
  fin: Name;
  fra: Name;
  hrv: Name;
  hun: Name;
  ita: Name;
  jpn: Name;
  kor: Name;
  nld: Name;
  per: Name;
  pol: Name;
  por: Name;
  rus: Name;
  slk: Name;
  spa: Name;
  swe: Name;
  tur: Name;
  urd: Name;
  zho: Name;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  side: string;
  signs: string[];
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currencies {
  PEN: Pen;
}

export interface Pen {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Gini {
  '2019': number;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  aym: string;
  que: string;
  spa: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  nativeName?: NativeName;
  official: string;
}

export interface NativeName {
  aym: Translation;
  que: Translation;
  spa: Translation;
}

export interface Translation {
  common: string;
  official: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}
