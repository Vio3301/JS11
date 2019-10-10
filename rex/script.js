///////////////////////////////////////////MAP//////////////////////////////////
var step = 5; // 1step = 50px;
var game_map = Array(200)
    game_map.fill(null)   // inple 100 de gauri cu null (fill - inple)
    game_map[0] = new Dino()
    game_map[0].run()
    game_map.push(new Cactus())
game_map.forEach(function(object, index){//<<< sa citim acasa despre el
  

    if(object == null){

    }else{
        addToScene(index)
        var left = step * index
        object.div.style.transform = `translateX(${left}px)`
    }
    console.log(object, index)
}) 

function apdateScene(){

    game_map.forEach(function(object, index){
        if(object !== null){
        var left = step * index
        object.div.style.transform = `translateX(${left}px)`
        }
    })

    // document.getElementById('scene').innerText = game_map[0].health
}


function addToScene(index){ // va primi un index
    if(game_map[index] !== null){
    game_map[index].render( document.getElementById('scene') )
    }
}
function removeFromScene(index){ // va primi un index
    if(game_map[index]!== null){
        document.getElementById('scene').removeChild(game_map[index].div)
    }
}



function gameLoop(){
    setInterval(function(){  

        removeFromScene(1)
        game_map.splice(1,1) /// udaleste de fiecare data sa stearga 
        if(Math.random() <0.01){
            game_map.push(new Cactus())
            addToScene(game_map.length - 1)
            
        }else if(Math.random()> 0.9){
            game_map.push(new Bird())
            addToScene(game_map.length - 1)
            game_map[game_map.length - 1].run()
        }
        else{
            game_map.push(null)
        }
        if(game_map[1]instanceof Cactus && !game_map[0].jamping) {    //// este ceva din clasa cactusului
          game_map[0].health -= 50

        }      
        apdateScene()
       
     },50)
}

gameLoop()
///////////////////////////////////////////MAP/////////////////////////////////






// function executeAction( e ){
//     alert(e.keyCode)

//     switch (e.keyCode) {
//         case 32: game_map[0].jump(); break;
//         case 40: game_map[0].stop(); break;
//         case 39: game_map[0].run(); break;
  
//         default: break;
//     }

    
// }

// document.body.onkeydown = executeAction


// HOMEWORK
// class js -> Dino.js
// cactus -> class 
// birds -> 