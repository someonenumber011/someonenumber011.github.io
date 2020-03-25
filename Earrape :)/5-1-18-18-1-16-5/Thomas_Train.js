
		     
var thomasBass = new Howl({
        src: ["audio/Thomas The Tank Engine"],
        loop: true,
});
  
var thomasBass = new Howl({
        src: ["audio/Thomas_The_Tank_Engine_Bass_boosted.mp3"],
        loop: true,
});

thomasBass.volume = 0.1

function run() {
	thomasNormal.play();
        thomasBass.play()
}
