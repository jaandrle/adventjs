function wrapping(gifts){
  return gifts.map(function wrapGift(gift){
    const wrap= "*".repeat(gift.length);
    return `**${wrap}\n*${gift}*\n${wrap}**`;
  });
}
