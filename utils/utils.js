module.exports = {
  math: (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
}