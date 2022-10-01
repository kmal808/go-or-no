export interface RootObject {
  associated: Associated;
  data: Data;
}

export interface Associated {
  forecastLocation: Location;
  location: Location;
  offshoreLocation: Location;
  units: Units;
  utcOffset: number;
}

export interface Location {
  lat: number;
  lon: number;
}

export interface Units {
  swellHeight: string;
  temperature: string;
  tideHeight: string;
  waveHeight: string;
  windSpeed: string;
}

export interface Data {
  wave: Wave[];
}

export interface Wave {
  surf: Surf;
  swells: Swell[];
  timestamp: number;
  utcOffset: number;
}

export interface Surf {
  humanRelation: HumanRelation;
  max: number;
  min: number;
  optimalScore: number;
  plus: boolean;
  raw: Raw;
}

export enum HumanRelation {
  ChestToHead = "Chest to head",
  ThighToStomach = "Thigh to stomach",
  ThighToWaist = "Thigh to waist",
  WaistToChest = "Waist to chest",
  WaistToShoulder = "Waist to shoulder",
}

export interface Raw {
  max: number;
  min: number;
}

export interface Swell {
  direction: number;
  directionMin: number;
  height: number;
  optimalScore: number;
  period: number;
}
