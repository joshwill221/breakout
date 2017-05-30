// Create the start that will contain the whole game
var mainState = {
    preload: function() {
        // Here we preload the assets
        game.load.image('paddle', 'assets/paddle.png');
    },
    
    create: function() {
        // Here we create the game
        
        // Set the background colour to blue
        game.stage.backgroundColor = '#3598db';
        
        // Start the Arcade physics system (for movements and collisions)
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // Add the physics engine to all the game objects
        game.world.enableBody = true;
        
        // Create the left/right arrow keys
        this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        // Add the paddle at the botton of the screen
        this.paddle = game.add.sprite(150, 400, 'paddle');
        
        // Make sure the paddle won't move when it hits the ball
        this.paddle.body.immovable = true;
    },
    
    update: function() {
        // Here we update the game 60 times per second
        
        // Move the paddle left/right when an arrow key is pressed
        if (this.left.isDown) 
            this.paddle.body.velocity.x = -300;
        else if (this.right.isDown)
            this.paddle.body.velocity.x = 300;
        else
            // Stop the paddle when no key is pressed;
            this.paddle.body.velocity.x = 0;
        
    },
};

// Initialise the game and start out state
var game = new Phaser.Game(400, 450, Phaser.AUTO, 'phaser-game');
game.state.add('main', mainState);
game.state.start('main');