import seedrandom from 'seedrandom'
import crypto from 'crypto';

interface ArtworkPreset {
  ringCount: number;
  dotSize: number;
  dotsPerRing: number;
  spread: number;
  randomRadius: boolean;
  randomDotSize: boolean;
  hueMin: number;
  hueMax: number;
  satMin: number;
  satMax: number;
  lightMin: number;
  lightMax: number;
  hueBg: number;
  satBg: number;
  lightBg: number;
  seed: string;
}

const RANGES = {
  ringCount: {
    max: 30,
    min: 1,
  },
  dotSize: {
    max: 30,
    min: 1,
  },
  dotsPerRing: {
    max: 30,
    min: 1,
  },
  spread: {
    max: 50,
    min: 1,
  },
  hueMin: {
    max: 20,
    min: 0,
  },
  hueMax: {
    max: 360,
    min: 90,
  },
  satMin: {
    max: 100,
    min: 0,
  },
  satMax: {
    max: 100,
    min: 0,
  },
  lightMin: {
    max: 50,
    min: 0,
  },
  lightMax: {
    max: 100,
    min: 50,
  },
  hueBg: {
    max: 360,
    min: 0,
  },
  satBg: {
    max: 100,
    min: 0,
  },
  lightBg: {
    max: 100,
    min: 0,
  },
};

/**
 * @function R
 * @description returns a random number between max and min
 * @param {Number} max
 * @param {Number} [min]
 * @param {Boolean} [f]
 */
const R = (max: number, min:number, rand: prng, f = true): number => {
  return f
    ? Math.floor(rand() * (max - min) + min)
    : rand() * max;
};

export const randomPreset = (seed: string): ArtworkPreset => {
	const rand = seedrandom(crypto.createHash('md5').update(seed).digest("hex"));
  return {
    ringCount: R(RANGES.ringCount.max, RANGES.ringCount.min, rand),
    dotSize: R(RANGES.dotSize.max, RANGES.dotSize.min, rand),
    dotsPerRing: R(RANGES.dotSize.max, RANGES.dotSize.min, rand),
    spread: R(RANGES.spread.max, RANGES.spread.min, rand),
    randomRadius: R(10, 0, rand) > 5,
    randomDotSize: R(10, 0, rand) > 5,
    hueMin: R(RANGES.hueMin.max, RANGES.hueMin.min, rand),
    hueMax: R(RANGES.hueMax.max, RANGES.hueMax.min, rand),
    satMin: R(RANGES.satMin.max, RANGES.satMin.min, rand),
    satMax: R(RANGES.satMax.max, RANGES.satMax.min, rand),
    lightMin: R(RANGES.lightMin.max, RANGES.lightMin.min, rand),
    lightMax: R(RANGES.lightMax.max, RANGES.lightMax.min, rand),
    hueBg: R(RANGES.hueBg.max, RANGES.hueBg.min, rand),
    satBg: R(RANGES.satBg.max, RANGES.satBg.min, rand),
    lightBg: R(RANGES.lightBg.max, RANGES.lightBg.min, rand),
	seed
  };
};

const coords = (number: number, arr: number[] = []) => {
  const frags = 360 / number;
  for (let i = 0; i <= number; i++) {
    arr.push((frags / 180) * i * Math.PI);
  }
  return arr;
};

export const generateSvg = (preset: ArtworkPreset) => {
  console.log(preset)
  const {
    ringCount,
    dotSize,
    dotsPerRing,
    randomRadius,
    randomDotSize,
    hueMin,
    hueMax,
    satMin,
    satMax,
    lightMin,
    lightMax,
    spread,
    hueBg,
    satBg,
    lightBg,
	seed
  } = preset;

  const rand = seedrandom(seed);
  rand()


  const cx = 500;
  const cy = 500;
  const fill = () =>
    `hsl(${R(hueMax, hueMin, rand)}, ${R(satMax, satMin, rand)}%, ${R(
      lightMax,
      lightMin, rand
    )}%)`;
  let s = `<svg data-app-elm="svg" id="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000" style="background-color: hsl(${hueBg}, ${satBg}%, ${lightBg}%)">
  <g id="g"></g><circle cx="${cx}" cy="${cy}" r="${dotSize}" fill="${fill()}" />`;

  for (let i = 1; i <= ringCount; i++) {
    const r = randomRadius ? R(500, 1, rand) : spread * i;
    const theta = coords(dotsPerRing * i);
    for (let j = 0; j < theta.length; j++) {
      const x = cx - Math.round(r * Math.cos(theta[j]));
      const y = cy - Math.round(r * Math.sin(theta[j]));
      s += `<circle cx="${x}" cy="${y}" r="${
        randomDotSize ? R(35, 2, rand) : dotSize
      }" fill="${fill()}" />`;
    }
  }
  return s + "</svg>";
};
