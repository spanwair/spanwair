export const languageConfig = 'cs';

export const searchIsOn = true;
export const configuration = {
  isBazosSearchOn: false,
  isSautoSearchOn: false,
  isAaaautoSearchOn: true,
};
const corseOrFetch = true;
export const defaultUrls = {
  corsAnywhere: corseOrFetch ? 'https://cors-anywhere.herokuapp.com/' : 'https://thingproxy.freeboard.io/fetch/',
  bazosMainUrl: 'https://auto.bazos.cz',
  sAutoGetModels: 'https://www.sauto.cz/ajax/hierarchy?type=model&manufacturer_id=',
  sAutoMainSearchUrl: 'https://www.sauto.cz/hledani?ajax=2&condition=1&condition=4&condition=2&category=1',
  getIpAsDataIp: 'https://api.ipify.org/?format=json',
  aaaAutoMainSearchUrl: 'https://www.aaaauto.cz/cz/cars.php?carlist=1',
};
