export default function unitConverter(input, unit) {
  if (unit === '°F') return Math.round((input * 9) / 5 + 32);

  return Math.round(input);
}
