module.exports = function() {
  var {faker} = require("@faker-js/faker");
  var _ = require("lodash");
  faker.locale = "zh_CN";
  return {
    people: _.times(2, function(n) {
      return {
        id: n,
        name: faker.name.fullName(),
        avatar: faker.image.avatar()
      }
    })
  }
}
