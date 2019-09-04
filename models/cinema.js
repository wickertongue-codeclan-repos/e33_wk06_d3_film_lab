const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilms = function () {
  const filmTitles = this.films.map(function (film) {
    return film.title;
  });
  return filmTitles;
};

Cinema.prototype.findFilmByTitle = function (searchedFilm) {
 return this.films.find((film) => {
    return film.title === searchedFilm;
 });
};

Cinema.prototype.findFilmsByGenre = function (searchedGenre) {
  const foundFilms = this.films.filter((film) => {
    if (film.genre === searchedGenre) return film;
  });
  return foundFilms;
};

Cinema.prototype.areThereFilmsForThisYear = function (searchedYear) {
  return this.films.some((film) => {
    return film.year === searchedYear;
  });
};

Cinema.prototype.areAllFilmsOverThisLength = function (enteredLength) {
  return this.films.every((film) => {
    return film.length > enteredLength;
  });
};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
};

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