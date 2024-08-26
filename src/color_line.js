export function findColorLine(object) {
  let result;
  if (object.health > 50) {
    result = 'healthy';
  } else if (object.health <= 50 || object.health > 15) {
    result = 'wounded';
  } else if (object.health <= 15) {
    result = 'critical';
  }
  return result;
}