var Game = (function () {
    function Game(canvasId) {
        this.player = "Player1";
        this.score = 400;
        this.lives = 3;
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.highscores = [
            {
                playerName: 'Loek',
                score: 40000
            },
            {
                playerName: 'Daan',
                score: 34000
            },
            {
                playerName: 'Rimmert',
                score: 200
            }
        ];
        this.start_screen();
    }
    Game.prototype.start_screen = function () {
        this.writeAsteroidHeading();
        this.writeIntro();
        this.drawButton();
    };
    Game.prototype.writeAsteroidHeading = function () {
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "300px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Asteroids", this.canvas.width / 2, this.canvas.height / 2);
    };
    Game.prototype.writeIntro = function () {
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "100px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText("press play to start", this.canvas.width / 2, this.canvas.height / 1.5);
    };
    Game.prototype.drawButton = function () {
        var _this = this;
        var button = new Image();
        button.src = './assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png';
        button.onload = function () {
            _this.ctx.drawImage(button, 700, 800);
            _this.ctx.font = "20px calibri";
            _this.ctx.fillStyle = "black";
            _this.ctx.fillText("start", 770, 820);
        };
    };
    Game.prototype.drawAsteroid = function () {
        var _this = this;
        var asteroid = new Image();
        asteroid.src = './assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png';
        asteroid.onload = function () {
            _this.ctx.drawImage(asteroid, _this.canvas.width / 2, _this.canvas.height / 1.5);
        };
    };
    Game.prototype.level_screen = function () {
    };
    Game.prototype.title_screen = function () {
    };
    Game.prototype.randomNumber = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    return Game;
}());
var init = function () {
    var Asteroids = new Game(document.getElementById('canvas'));
};
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map