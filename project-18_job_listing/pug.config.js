const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data.json', 'utf-8'));

module.exports = {
  locals: {
    site: data.site,
    jobItems: data.jobItems,
  },
};
