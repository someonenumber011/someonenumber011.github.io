

var thomasNormal = new Audio("Thomas The Tank Engine.mp3)
;
  
var thomasBass = new Howl({
        src: ["audio/Thomas_The_Tank_Engine_Bass_boosted.mp3"],
        loop: true,
});

function run() {
	thomasNormal.play();
        thomasBass.play()
}
