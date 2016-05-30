var render = function() {
  var gameBoard = document.querySelector("#game-board")

  gameBoard.innerHTML = '';
  for (i = 0; i < 9; i++) {
    gameBoard.innerHTML += '<div class="game-grid" id="t' + i + '"></div>';
  }
}; // render

var gameCycle = function() {
  render();
  var overlay = document.getElementsByClassName("overlay")[0];
  var results = document.getElementById("game-results");
  overlay.style.top = "-100000";

  function Player(color) {
    this.color = color,
    this.markedSpots = []
  }

  var playerX = new Player("x");
  var playerO = new Player("o");
  var currentPlayer = playerX;
  var allMarkedSpots = [];
  var won = false;

  var includesAll = function() {
    for (var i = 0; i < arguments.length; i++) {
      if (!this.includes(arguments[i])) {
        return false;
      }
    }
    return true;
  }; // includesALl

  var winConditions = [
    ["t0","t1","t2"],["t3","t4","t5"],["t6","t7","t8"],
    ["t0","t3","t6"],["t1","t4","t7"],["t2","t5","t8"],
    ["t0","t4","t8"],["t2","t4","t6"]
  ];

  var markSpot = function(player, location) {
    player.markedSpots.push(location.id);
    allMarkedSpots.push(location.id);
    if (player.color === "x") {
      location.classList.add("marked", "marked-x");
    } else {
      location.classList.add("marked", "marked-o");
    }
    console.log(player.color + " has " + player.markedSpots + " marked.");
  }; // markSpot

  var turn = function() {
    if (currentPlayer === playerX) {
      currentPlayer = playerO;
    } else {
      currentPlayer = playerX;
    }
  }; //turn

  var checkWin = function() {
    for (var j = 0; j < winConditions.length; j++) {
      if (includesAll.apply(currentPlayer.markedSpots, winConditions[j])) {
        console.log("Player " + currentPlayer.color + " wins!");
        overlay.style.top = "";
        results.innerHTML = "Player " + currentPlayer.color + " wins!";
        return won = true;
      } else if (allMarkedSpots.length >= 9) {
        console.log("It's a cat's game!");
        overlay.style.top = "";
        results.innerHTML = "It's a cat's game!";
        return won = false;
      }
    }
  }; //checkWin

  var gameGrids = document.getElementsByClassName("game-grid");
  Array.prototype.forEach.call(gameGrids, function(el,i) {
    el.addEventListener("mouseover", function() {
      if (!Array.prototype.includes.call(el.classList, "marked")) {
        this.classList.add("marked-" + currentPlayer.color);
      }
    });
    el.addEventListener("mouseout", function() {
      if (!Array.prototype.includes.call(el.classList, "marked")) {
        this.classList.remove("marked-" + currentPlayer.color);
      }
    });
    el.addEventListener("click", function() {
      if (!Array.prototype.includes.call(el.classList, "marked") && !won) {
        console.log(el.id);
        markSpot(currentPlayer, el);
        checkWin();
        turn();
      }
    });
  });
}; // gameCycle()

document.addEventListener("DOMContentLoaded", function() {
  render();
  document.getElementById("start-game").addEventListener("click", gameCycle);
});
