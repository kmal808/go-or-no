const globalURL = "https://services.surfline.com/kbyg/spots/forecasts/";

export const waveURL = (spotID: string) => {
  return `${globalURL}wave?spotId=${spotID}&days=16&intervalHours=1`;
};

export const ratingURL = (spotID: string) => {
  return `${globalURL}rating?spotId=${spotID}&days=16&intervalHours=1&correctedWind=false`;
};

export const windURL = (spotID: string) => {
  return `${globalURL}wind?spotId=${spotID}&days=16&intervalHours=1&corrected=false`;
};

export const tidesURL = (spotID: string) => {
  return `${globalURL}tides?spotId=${spotID}&days=16`;
};

export const weatherURL = (spotID: string) => {
  return `${globalURL}weather?spotId=${spotID}&days=16&intervalHours=1`;
};

export const ALA_MOANA_PARK_SPOT = "5842041f4e65fad6a770889c";
