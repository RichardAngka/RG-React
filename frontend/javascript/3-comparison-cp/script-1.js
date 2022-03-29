const numberChecker = (number) => {
  if (number > 0) {
    return "Bilangan positif";
  } else if (number === 0) {
    return "Bilangan nol";
  } else {
    return "Bilangan negatif";
  }
};

module.exports = numberChecker;
