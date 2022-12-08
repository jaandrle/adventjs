function fitsInOneBox(boxes){
  const keys= "lwh".split("");
  return boxes.every((box_current, i) => {
      const box_next= boxes[i + 1] ?? boxes[0];
      const status= keys.map(diff).join("");
      return status==="111" || status==="222";
      
      function diff(k){
        const l= box_current[k];
        const r= box_next[k];
        return l>r ? 1 : (r>l ? 2 : 0);
      }
  });
}
