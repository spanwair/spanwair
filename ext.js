(async () => {
  const f = async (url) => {
    try {
      return await fetch(url)
        .then(r => r.json());
    } catch (err) {
      console.log('err :>> ', err);
      return [];
    }
  }
  const ch = document.getElementById('changeble');
  let uP, cL, iP;
  await Promise.all([
    f('under_preparation.json').then(r=>uP=r).catch(err=>console.log('err :>> ', err)),
    f('country_language.json').then(r=>cL=r).catch(err=>console.log('err :>> ', err)),
    f('https://geolocation-db.com/json/').then(r=>iP=r).catch(err=>console.log('err :>> ', err)),
  ])
  .then(() => {
    if (!!uP && !!cL && !!iP) {
      if (!!iP.country_code) {
        const c = iP.country_code || '';
        const fL = cL[c] || 'GB';
        const fI = uP.find(u => u.symbol === fL);
        if (!!fI) {
          ch.innerText = fI.text;
        }
      }
    }
  })
  .catch(err => console.log('err :>> ', err));
})();
