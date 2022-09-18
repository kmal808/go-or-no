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
interface SurfLineWaveData {
  data: { wave: Wave[] };
}

export default function request<T>(
  url: string,
  config: RequestInit = {}
): Promise<T> {
  return fetch(url, config).then((response) => response.json());
}

const waveData = await request<SurfLineWaveData>(
  "https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=5842041f4e65fad6a770889c&days=16&intervalHours=1"
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

// rating url:
// https://services.surfline.com/kbyg/spots/forecasts/rating?spotId=5842041f4e65fad6a770889c&days=16&intervalHours=1&correctedWind=false

// wind url:
// https://services.surfline.com/kbyg/spots/forecasts/wind?spotId=5842041f4e65fad6a770889c&days=16&intervalHours=1&corrected=false

// tides url:
// https://services.surfline.com/kbyg/spots/forecasts/tides?spotId=5842041f4e65fad6a770889c&days=16
// weather url:
// https://services.surfline.com/kbyg/spots/forecasts/weather?spotId=5842041f4e65fad6a770889c&days=16&intervalHours=1
