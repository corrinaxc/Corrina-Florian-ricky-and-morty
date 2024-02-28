import { fetchData } from "./index.js";

test('returns an array if called fetchData', () => {
  const result = fetchData();
  expect(result).toBe([`${character.image}, ${character.name}, ${character.status}, ${character.type}, ${character.episode.length}`]);
});