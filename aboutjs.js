var pics = ["imgs/e1.jpg","imgs/e2.jpg","imgs/e3.jpg","imgs/e4.jpg","imgs/e5.jpg","imgs/e6.jpg",
"imgs/e7.jpg","imgs/e8.jpg","imgs/e9.jpg","imgs/e10.jpg","imgs/e11.jpg","imgs/e12.jpg","imgs/e13.jpg",
"imgs/e14.jpg","imgs/e15.jpg","imgs/e16.jpg","imgs/e17.jpg","imgs/e18.jpg","imgs/e19.jpg","imgs/e20.jpg"
];

var btn = document.getElementById("e_button");
var img = document.getElementById("imger");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 20){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;

});