
		     
var thomasNormal = new Howl({
        src: ["audio/Thomas The Tank Engine.mp3"],
        loop: true,
});
  
var thomasBass = new Howl({
        src: ["audio/Thomas_The_Tank_Engine_Bass_boosted.mp3"],
        loop: true,
});


function run() {
	thomasNormal.play();
	
        setTimeout(thomasBass.play(),300);
}
