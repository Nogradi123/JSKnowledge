

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   return moviesArray.map(director => director.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
  
    const getDirector = moviesArray.filter((director) => {
      if(director.director != 'Steven Spielberg') {
        return 0
      } else {
        return director.director
      }
    })
  
    const getDramaMovies = getDirector.filter((genre) => {
      return genre.genre.indexOf('Drama') >= 0
    })
  
    return getDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }
  
    const { totalScores, validMovieCount } = moviesArray.reduce((sum, currentMovie) => {
      if(!currentMovie.hasOwnProperty('score')) {
        sum.totalScores += currentMovie.score;
      }
      if(currentMovie.hasOwnProperty('score')) {
        sum.totalScores += currentMovie.score;
        sum.validMovieCount++;
      }
      return sum
    }, {totalScores: 0, validMovieCount: 0});
  
    if(validMovieCount === 0) {
      return 0;
    }
    const avgScore = validMovieCount === 0 ? 0 : totalScores / validMovieCount;
    return Math.round(avgScore * 100) / 100;


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const getDramaMovies = moviesArray.filter((genre) => {
        return genre.genre.indexOf('Drama') >= 0;
      }) 
      
      const { totalScores, validMovieCount } = getDramaMovies.reduce((sum, currentMovie) => {
        if(!currentMovie.hasOwnProperty('score')) {
          sum.totalScores += currentMovie.score;
        }
        if(currentMovie.hasOwnProperty('score')) {
          sum.totalScores += currentMovie.score;
          sum.validMovieCount++;
        }
        return sum
      }, {totalScores: 0, validMovieCount: 0});
  
      const avgScore = validMovieCount === 0 ? 0 : totalScores / validMovieCount;
      return Math.round(avgScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = moviesArray.map(function(movies) {
    return movies;
  });
  
  return newArray.sort(function(a, b) {
    if(a.year < b.year) return -1;
    if(a.year > b.year) return 1;
    
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArray = moviesArray.map((title) => title.title);

  if(newArray.length > 20) {
    return newArray.slice(0,20);
  }

  return newArray.sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
