var Layer = cc.Layer.extend({

    player:null,

    ctor:function () {
        this._super();

        Global.layer = this; //Used in player to addChild 
        player = new Player();
        player.control(this);

        // Mouse controls 
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseUp: function (event) {
                var newPlayer = new Player();
                newPlayer.update(event._x, event._y); 
                setTimeout(newPlayer.destroy, 1000);

            } 
        }, this);

        this.schedule(this.update,0.2);
       
        return true;
    },
    
    update: function(){

     }
});
