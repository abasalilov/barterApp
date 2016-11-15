var craigslist = require('node-craigslist')

module.exports = {
  confirmationRouter: function (req, res, next) {
    var query = JSON.parse(req.query.user)
    var city = query.location.toString();
    var skill = query.barterSkill.toString()
    client = new craigslist.Client({
      city : city,
    });
    options = {
      category: 'bar'
    }
    client
    .search(options, skill)
    .then((listings) => {
      res.json(listings)
    // play with listings here... 
    // listings.forEach((listing) => console.log(listing));
  })
    .catch((err) => {
      console.error(err);
    })
  }
}
