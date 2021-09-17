const formatIntToTime = (elapsed: number): string => {
  if (elapsed < 0) {
    elapsed = 0;
  }
  if (elapsed >= 3600) {
    elapsed = 3600 - 1;
  }
  elapsed = Math.floor(elapsed);
  const min = Math.floor(elapsed / 60);
  const sec = elapsed - min * 60;
  const minInStr = min < 10 ? `0${min}` : min.toString();
  const secInStr = sec < 10 ? `0${sec}` : sec.toString();
  return [minInStr, secInStr].join(":");
};

export default formatIntToTime;
