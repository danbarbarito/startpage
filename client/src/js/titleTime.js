const moment = require('moment');
const intervalTime = 1000;

window.setInterval(() => {
  const now = moment().format("hh:mm:ss");
  document.title = now;
}, intervalTime);
