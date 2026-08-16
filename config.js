// Paste your Apps Script Web App deployment URL here.
const API_URL = 'https://script.google.com/macros/s/AKfycbwjpkveKP6BTqGqm9eBHxI7eJBnCxflgY5Krmu9SA6xiCS5tMBD5y24VqXXfOEuC4f-yw/exec';

// The six stalls. `code` must match VALID_STALLS in Code.gs.
// `flag` uses flagcdn.com's free public flag images (ISO country codes).
const COUNTRIES = [
  { code: 'zambia',      name: 'Zambia',        flag: 'zm' },
  { code: 'russia',      name: 'Russia',        flag: 'ru' },
  { code: 'canada',      name: 'Canada',        flag: 'ca' },
  { code: 'southafrica', name: 'South Africa',  flag: 'za' },
  { code: 'china',       name: 'China',         flag: 'cn' },
  { code: 'japan',       name: 'Japan',         flag: 'jp' },
];

function flagUrl(isoCode) {
  return `https://flagcdn.com/w320/${isoCode}.png`;
}
