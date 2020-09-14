export const getFahrenheitValue = (celsiusValue) => {
  return (celsiusValue * 9) / 5 + 32;
};

export const getMphValue = (mpsValue) => {
  //mps = metre/sec
  return mpsValue * 2.237;
};

export const getMilesValue = (m) => {
  //m = meter
  return m / 1609;
};
