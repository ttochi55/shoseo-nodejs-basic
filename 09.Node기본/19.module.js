module.exports = {
  randInt: (from, to) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
  },
  area: (radius) => {
    return Math.PI * radius * radius;
  },
};
