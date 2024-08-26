import { findColorLine } from "../color_line.js";

test("findColorLine 1", () => {
  const object = {
    id: 1,
    name: 'Маг',
    health: 90
  };
  const result = findColorLine(object);
  expect(result).toBe('healthy');
});
