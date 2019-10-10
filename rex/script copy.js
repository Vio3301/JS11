// dinoe componets

class Dino{
    constructor(){
        // animation cadre
        this.frames = [
            { x: -846, y: 0, w:45, h:54 },
            { x: -890, y: 0, w:45, h:54 },
            { x: -935, y: 0, w:45, h:54 },
            { x: -980, y: 0, w:45, h:54 },
            { x: -1026, y: 0, w:45, h:54 }
        ]
    }

    render( parent /* element */ ){
        var div = document.createElement('div')
        div.className = 'dino'
        this.div = div
        this.updateStyle()
        parent.appendChild(div)
    }


    updateStyle(){
        this.div.style.width = `${this.frames[0].w}px`
        this.div.style.height = `${this.frames[0].h}px`
        this.div.style.backgroundPosition = `${this.frames[0].x}px ${this.frames[0].y}px`
    }


    run(){
        var that = this
        this.timer = setInterval( function(){
            console.log(" >>> ", that)
            that.frames.push( that.frames.shift() )
            that.updateStyle()
        }, 200)
    }

    stop(){
        clearInterval(this.timer)
    }

    jump(){
        var that = this

        // HOMEWORK
        // event animation end

        this.div.className = 'dino jump'
        setTimeout( function(){
            that.div.className = 'dino'
        }, 500)
    }

}



function executeAction( e ){
    // alert(e.keyCode)

    switch (e.keyCode) {
        case 32: game_map[0].jump(); break;
        case 40: game_map[0].stop(); break;
        case 39: game_map[0].run(); break;
  
        default: break;
    }

    
}


var d = new Dino()

// d.render( document.getElementById('scene') )
// d.run()


document.body.onkeydown = executeAction

// HOMEWORK
// multiple js files
// class js -> Dino.js
// cactus -> class 
// birds -> 
