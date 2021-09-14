export default function unitConverter(input, unit) {
  if (unit === '°F') return (input * 9) / 5 + 32;

  return input;
}
