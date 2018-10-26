function setTimeoutFunc() {
	$("#Location").hide();
	$("#Location").fadeIn(4000);
}

setTimeout(setTimeoutFunc, 0);



function getPhoto() {
	$(".photo").hide();
}

getPhoto();

$("#album").click(function() {
	$(".photo").toggle();
});





<!-- typing effect -->

var target = document.getElementById("dt");
var target2 = document.getElementById("dt2");
var target3 = document.getElementById("dt3");
var target4 = document.getElementById("dt4");

var iter_1=0;
var iter_2=0;
var iter_3=0;
var iter_4=0;



function getDetails_1() {
	text_1 = target.innerText;
	len = text_1.length;
	Typing_1();
}


function Typing_1(){
	if(iter_1<=len) {
		target.innerText = text_1.substring(0,iter_1);
		iter_1++;
		setTimeout("Typing_1()", 100);
	}
	else {
		iter_1=0;
	}
}
		
function getDetails_2() {
	text_2 = target2.innerText;
	len_2 = text_2.length;
	Typing_2();
}

function Typing_2() {
	if(iter_2<=len_2) {
		target2.innerText = text_2.substring(0,iter_2);
		iter_2++;
		setTimeout("Typing_2()", 100);
	}
	else {
		iter_2=0;
	}
}

function getDetails_3() {
	text_3 = target3.innerText;
	len_3 = text_3.length;
	Typing_3();
}

function Typing_3() {
	if(iter_3<=len_3) {
		target3.innerText = text_3.substring(0, iter_3);
		iter_3++;
		setTimeout("Typing_3()", 100);
	}
	else {
		iter_3=0;
	}
}

function getDetails_4() {
	text_4 = target4.innerText;
	len_4 = text_4.length;
	Typing_4();
}

function Typing_4() {
	if(iter_4 <=len_4) {
		target4.innerText = text_4.substring(0, iter_4);
		iter_4++;
		setTimeout("Typing_4()", 100);
	}
	else {
		iter_4=0;
	}
}
	
