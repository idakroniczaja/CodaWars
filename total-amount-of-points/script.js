
function points(games) {
    var i = 0;
    var points = 0;
    for (i; i < games.length; i++) {
        let each = games[i].split(":");
        if (each[0] > each[1]) {
            points += 3;
        } else if (each[0] == each[1]) {
            points += 1;
        } else {
            points += 0;
        }
    }
    return points;
}





function points(games) {
    function points(games) {
        let total = 0;
        games.map(game => {
          if (game[0] === game[2]) {
            total += 1;
          } else if (game[0] > game[2]) {
            total += 3;
          }
        });
        return total;
      }
  }

  points(game)