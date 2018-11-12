class Game {
    //global attr for canvas
    //readonly attributes must be initialized in the constructor
    private readonly canvas: HTMLCanvasElement; // find the right type
    private readonly ctx: CanvasRenderingContext2D; // find the right type

    context: CanvasRenderingContext2D;

    //some global player attributes
    private readonly player: string = "Player1";
    private readonly score: number = 400;
    private readonly lives: number = 3;
    private readonly highscores: Array<any>; //TODO: do not use 'any': write an interface!

    public constructor(canvasId: HTMLCanvasElement) {
        //construct all canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        //set the context of the canvas
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
        ]

        // all screens: uncomment to activate 
        this.start_screen();
        //this.level_screen();
        //this.title_screen();
        

    }

    

    //-------- Splash screen methods ------------------------------------
    /**
     * Function to initialize the splash screen
     */
    public start_screen() {
        //1. add 'Asteroids' text
        //2. add 'Press to play' text
        //3. add button with 'start' text
        //4. add Asteroid image
        this.writeAsteroidHeading();
        this.writeIntro();
        this.drawButton();   
    }
    public writeAsteroidHeading(){
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "300px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Asteroids",this.canvas.width/2,this.canvas.height/2);
    }

    public writeIntro(){
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "100px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText("press play to start",this.canvas.width/2,this.canvas.height/1.5);
    
    }
    public drawButton(){
        let button = new Image();
        button.src = './assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png';

        button.onload = () => {
            this.ctx.drawImage(button, 700,800);
            this.ctx.font = "20px calibri";
            this.ctx.fillStyle = "black";
            this.ctx.fillText("start",770,820);
            
        };

        
    }

    public drawAsteroid(){
        let asteroid = new Image();
        asteroid.src = './assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png';

        asteroid.onload = () => {
            this.ctx.drawImage(asteroid, this.canvas.width/2,this.canvas.height/1.5);
        };
    }

    //-------- level screen methods -------------------------------------
    /**
     * Function to initialize the level screen
     */
    public level_screen() {
        //1. load life images
        //2. draw current score
        //3. draw random asteroids
        //4. draw player spaceship
    }

    //-------- Title screen methods -------------------------------------

    /**
    * Function to initialize the title screen   
    */
    public title_screen() {
        //1. draw your score
        //2. draw all highscores
    }

    //-------Generic canvas functions ----------------------------------

    /**
    * Renders a random number between min and max
    * @param {number} min - minimal time
    * @param {number} max - maximal time
    */
    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }
}

//this will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
};
//add loadlistener for custom font types
window.addEventListener('load', init);
