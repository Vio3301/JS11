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
        this.health = 100;
        this.jumping = false
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
            // console.log(" >>> ", that)
            that.frames.push( that.frames.shift() )
            that.updateStyle()
        }, 200)
    }

    stop(){
        clearInterval(this.timer)
    }

    jump(){
        this.jamping = true
        var that = this
        this.div.className = 'dino jump'
        document.addEventListener('animationend', () => {
            that.div.className = 'dino'
            that.jamping = false
        });
    }
}

var d = new Dino()

// d.render( document.getElementById('scene') )

