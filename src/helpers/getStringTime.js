export default function getStringTime(time = 0) {
  const minute = Math.trunc(time / 60);
  const remainder = time % 60;
  const seconds = remainder < 10 ? `0${remainder}` : remainder;
  return `${minute}:${seconds}`;
}
