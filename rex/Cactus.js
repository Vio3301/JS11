class Cactus{
    constructor(){
        // animation cadre
        this.frames = [
            { x: -228, y: 0, w:18, h:54 },
            { x: -245, y: 0, w:18, h:54 },
            { x: -262, y: 0, w:18, h:54 },
            { x: -279, y: 0, w:18, h:54 },
            { x: -296, y: 0, w:18, h:54 }
        ]
    }

    render( parent /* element */ ){
        var div = document.createElement('div')
        div.className = 'cactus'
        this.div = div
        this.randomPosition()
        parent.appendChild(div)
    }


    randomPosition(){
        var rand = Math.round(Math.random()*(this.frames.length-1))
        // var position = Math.round(Math.random()*1233)
        var position = 0;
        console.log(" >>> ", rand)

        this.div.style.width = `${this.frames[rand].w}px`
        this.div.style.height = `${this.frames[rand].h}px`
        this.div.style.backgroundPosition = `${this.frames[rand].x}px ${this.frames[rand].y}px`
        this.div.style.transform = `translate(${position}px, -85px)`
    }

}

var c = new Cactus()

// c.render( document.getElementById('scene') )
// c.render( document.getElementById('scene') )

