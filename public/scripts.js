
var imageListLeo1= ["leo1.jpg","leo2.jpg", "leo3.jpg","leo4.jpg","leo5.jpg"];
var imageIndexLeo1=0;

var imageListLeo2= ["leoT1.jpg","leoT2.jpeg", "leoT3.jpg","leoT4.jpg"];
var imageIndexLeo2=0;

function showleo1(){
	var image= document.getElementById("image");
	imageIndexLeo1= (imageIndexLeo1 + 1) % imageListLeo1.length;
	image.src= imageListLeo1[imageIndexLeo1];
}

function showleo2(){
	var image= document.getElementById("image");
	imageIndexLeo2= (imageIndexLeo2 + 1) % imageListLeo2.length;
	image.src= imageListLeo2[imageIndexLeo2];
}