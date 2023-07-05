import "jest-extended";
import Chance from 'chance';

const seed = process.env.CHANCE_SEED ? parseInt(process.env.CHANCE_SEED) : new Chance().natural();

global.chance = new Chance(seed);

afterAll(() => {
  jest.restoreAllMocks();
});
