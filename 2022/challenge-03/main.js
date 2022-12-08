function distributeGifts(packOfGifts, reindeers) {
  const carry= 2 * reindeers.reduce(capacity, 0);
  const weights= packOfGifts.reduce(capacity, 0);
  return Math.floor(carry / weights);
  function capacity(acc, curr){ return acc+curr.length; }
}
