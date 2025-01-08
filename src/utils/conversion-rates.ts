export const getRandomRate = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getCurrentRates = () => {
  return {
    dolphinToPearl: getRandomRate(15, 25), // 1 dolphin = 15-25 pearl coins
    dolphinToGem: getRandomRate(80, 120), // gems now require 80-120 dolphins
  };
};