import { ALA_MOANA_PARK_SPOT, waveURL } from "./apiRoutes";

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

const waveData = await request<SurfLineWaveData>(waveURL(ALA_MOANA_PARK_SPOT));

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
