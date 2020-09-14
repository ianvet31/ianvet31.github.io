var pics = [
	"imgs/e1.jpg",
	"imgs/e2.jpg",
	"imgs/e3.jpg",
	"imgs/e4.jpg",
	"imgs/e5.jpg",
	"imgs/e6.jpg"
];

var img = document.querySelector("img");
var counter = 1;


function buttonElephant() {
	if(counter == 6){
		counter = 0;
	}
	img.src = pics[counter]
	img.src = pics[counter];
	counter = counter + 1;
}

function playPause(btn,vid) {
	var vid = document.getElementById(vid);
	if(vid.paused) {
		vid.play();
		btn.innerHTML = "Pause";
	} else {
		vid.pause();
		btn.innterHTML = "Play";
	}
}
