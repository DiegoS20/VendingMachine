export default function getStringTime(time = 0) {
  const minute = Math.trunc(time / 60);
  const seconds = time % 60;
  return `${minute}:${seconds}`;
}
