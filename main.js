// Create the start that will contain the whole game
var mainState = {
    preload: function() {
        // Here we preload the assets
    },
    
    create: function() {
        // Here we create the game
    },
    
    update: function() {
        // Here we update the game 60 times per second
    },
};

// Initialise the game and start out state
var game = new Phaser.Game(400, 450, Phaser.AUTO, 'phaser-game');
game.state.add('main', mainState);
game.state.start('main');