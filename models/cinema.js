const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilms = function () {
  const filmTitles = this.films.map(function (film) {
    return film.title;
  })
  return filmTitles;
}

Cinema.prototype.findFilmByTitle = function (searchedFilm) {
  const foundFilm = this.films.find(function (film) {
    if (film.title === searchedFilm) return film;
  })
  return foundFilm;
}

Cinema.prototype.findFilmsByGenre = function (searchedGenre) {
  const foundFilms = this.films.filter((film) => {
    if (film.genre === searchedGenre) return film;
  })
  return foundFilms;
}

Cinema.prototype.areThereFilmsForThisYear = function (searchedYear) {
  return this.films.some((film) => {
    return film.year === searchedYear
  })
}

Cinema.prototype.areAllFilmsOverThisLength = function (enteredLength) {
  return this.films.every((film) => {
    return film.length > enteredLength
  })
}

Cinema.prototype.totalRunningTime = function () {
  const totalTime = this.films.length.reduce();
  return totalTime
}

// Cinema.prototype.areThereFilmsForThisYear = function (searchedYear) {
//   result = this.films.find(function (film) {
//     if (film.year === searchedYear) {
//       return true;
//     } else {
//       return false;
//     } 
//   })
//   return !!result;
// }

module.exports = Cinema;