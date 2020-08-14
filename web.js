var pics = [
	"imgs/e1.jpg",
	"imgs/e2.jpg",
	"imgs/e3.jpg",
	"imgs/e4.jpg",
	"imgs/e5.jpg",
	"imgs/e6.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 6){
		counter = 0;)
	}
	img.src = pics[counter]
	counter = counter + 1;

});