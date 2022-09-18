import {
  ALA_MOANA_PARK_SPOT,
  ratingURL,
  tidesURL,
  waveURL,
  weatherURL,
  windURL,
} from "./apiRoutes";

interface Surf {
  min: number;
  max: number;
  optimalScore: number;
  plus: boolean;
  humanRelation: string;
  raw: { min: number; max: number };
}

interface Swell {
  height: number;
  period: number;
  direction: number;
  directionMin: number;
  optimalScore: number;
}

interface Wave {
  timestamp: number;
  utcOffset: number;
  surf: Surf;
  swells: Swell[];
}
interface Rating {
  timestamp: number;
  utcOffset: number;
  rating: { key: string; value: number };
}

interface Wind {
  timestamp: number;
  utcOffset: number;
  speed: number;
  direction: number;
  directionType: string;
  gust: number;
  optimalScore: number;
}

interface Tide {
  timestamp: number;
  utcOffset: number;
  type: string;
  height: number;
}

interface SunLightTimes {
  midnight: number;
  midnightUTCOffset: number;
  dawn: number;
  dawnUTCOffset: number;
  sunrise: number;
  sunriseUTCOffset: number;
  sunset: number;
  sunsetUTCOffset: number;
  dusk: number;
  duskUTCOffset: number;
}

interface Weather {
  timestamp: number;
  utcOffset: number;
  temperature: number;
  condition: string;
}

interface SurfLineWaveData {
  data: { wave: Wave[] };
}

interface SurfLineRatingData {
  data: { rating: Rating[] };
}

interface SurfLineWindData {
  data: { wind: Wind[] };
}

interface SurfLineTidesData {
  data: { tides: Tide[] };
}

interface SurfLineWeatherData {
  data: { sunlightTimes: SunLightTimes[]; weather: Weather[] };
}

export default function request<T>(
  url: string,
  config: RequestInit = {}
): Promise<T> {
  return fetch(url, config).then((response) => response.json());
}

const waveData = await request<SurfLineWaveData>(waveURL(ALA_MOANA_PARK_SPOT));

const ratingData = await request<SurfLineRatingData>(
  ratingURL(ALA_MOANA_PARK_SPOT)
);

const windData = await request<SurfLineWindData>(windURL(ALA_MOANA_PARK_SPOT));

const tidesData = await request<SurfLineTidesData>(
  tidesURL(ALA_MOANA_PARK_SPOT)
);

const weatherData = await request<SurfLineWeatherData>(
  weatherURL(ALA_MOANA_PARK_SPOT)
);

if (waveData && waveData.data) {
  const firstWave = waveData.data.wave[0];
  const humanRelation = document.getElementById("humanRelation");
  const minScore = document.getElementById("minScore");
  const maxScore = document.getElementById("maxScore");
  const humanRelationText = document.createElement("p");
  const minScoreText = document.createElement("p");
  const maxScoreText = document.createElement("p");
  humanRelationText.textContent = firstWave.surf.humanRelation;
  minScoreText.textContent = firstWave.surf.min.toString();
  maxScoreText.textContent = firstWave.surf.max.toString();
  humanRelation?.appendChild(humanRelationText);
  minScore?.appendChild(minScoreText);
  maxScore?.appendChild(maxScoreText);
}

if (ratingData && ratingData.data) {
  const firstRating = ratingData.data.rating[0];
  const rating = document.getElementById("rating");
  const ratingText = document.createElement("p");
  ratingText.innerText = firstRating.rating.key;
  rating?.appendChild(ratingText);
}

if (windData && windData.data) {
  const firstWind = windData.data.wind[0];
  const wind = document.getElementById("wind");
  const windText = document.createElement("p");
  windText.innerText = firstWind.speed.toString();
  wind?.appendChild(windText);
}

if (tidesData && tidesData.data) {
  const firstTide = tidesData.data.tides[0];
  const tide = document.getElementById("tide");
  const tideText = document.createElement("p");
  tideText.innerText = firstTide.height.toString();
  tide?.appendChild(tideText);
}

if (weatherData && weatherData.data) {
  const firstWeather = weatherData.data.weather[0];
  const tide = document.getElementById("weather");
  const weatherText = document.createElement("p");
  weatherText.innerText = firstWeather.temperature.toString();
  tide?.appendChild(weatherText);
}
