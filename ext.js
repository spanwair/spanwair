(async () => {
  const ch = document.getElementById('changeble');
  const uP = await axios.get('under_preparation.json');
  const countryLanguage = await axios.get('country_language.json');
  const iP = await axios.get('https://geolocation-db.com/json/');
  if (!!uP && !!iP && !!uP.data && !!iP.data) {
    if (!!iP.data.country_code) {
      const c = iP.data.country_code || '';
      const foundLanguage = countryLanguage.data[c] || 'GB';
      const fI = uP.data.find(u => u.symbol === foundLanguage);
      if (!!fI) {
        ch.innerText = fI.text;
      }
    }
  }
})();
