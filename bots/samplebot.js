// Bot: SampleBot
// Ruleset: default
// Just a skeleton showing the structure of a bot.
// --------------------------------------------------

var SampleBot = function() {};

SampleBot.prototype = new Bot();

SampleBot.prototype.setup = function() {};

SampleBot.prototype.run = function() {
    //terá o comando final para execução
	var command = 'strafe-left';
    var targetAngle = '';

    if (this.opponent == null) {
        //inimigo mais perto
        var closer = 0;
        var nearBotDistance = 99999999;
        //para cada robo em jogo
        for (i in this.state.bots) {
            //se o robo for inimigo
            if(this.state.bots[i].name != this.name){
                //se o robo estiver mais perto do que o ultimo avaliado
                if(this.state.bots[i].x < nearBotDistance){
                    nearBotDistance = this.state.bots[i].x;
                    closer = this.state.bots[i].id;
                }

            }
        }
        this.opponent = closer
    }

    if (this.opponent != null) {

            var target = this.state.bots[this.opponent];
        if(target.alive == 0){
            return;
        }
            var dir = this.getDirection(target);
            command = dir.command;
            var distanceToEnemy = this.myDistanceToPoint(target.x, target.y);

        if (dir.command != 'forward') {
            command = dir.command;
        } else {
            // If we're far away, move forward
            if (dist > 10 * this.radius) {
                command = "forward";
            } else if (this.canShoot && this.weapons.bullet > 0) {
                // If we're close and can shoot, shoot
                command = "fire";
            } else {
                // Strafe
                if (this.strafe > 25) {
                    command = "strafe-left";
                } else {
                    command = "strafe-right";
                }

                // Decrease strafe counter
                this.strafe--;

                if (this.strafe == 0) {
                    this.strafe = 50;
                }
            }
        }
    }



    return {command: command, team: {} };
};

server.registerBotScript("SampleBot");
