const random = {
  getRandomInteger(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
  },
  getRandomValueFromArray(array) {
    return array[random.getRandomInteger(0, array.length - 1)];
  },
};

module.exports = random;
