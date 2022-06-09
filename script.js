'use strict'


function outShortInfo(num) {
	let arrayImages = [document.getElementById("firstImage"), document.getElementById("secondImage"),document.getElementById("thirdImage"), document.getElementById("fourthImage"),document.getElementById("fifthImage"), document.getElementById("sixthImage"),document.getElementById("seventhImage"), document.getElementById("eighthImage"),document.getElementById("ninthImage"), document.getElementById("tenthImage"),document.getElementById("eleventhImage")];
	switch (num){
	case 0:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:200px; left:85px;";
		break;
	case 1:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:279px; left:85px;";
		break;
	case 2:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:240px; left:355px;";
		break;
	case 3:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:299px; left:508px;";
		break;
	case 4:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:240px; left:660px;";
		break;
	case 5:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:299px; left:1125px;";
		break;
	case 6:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:240px; left:830px;";
		break;
	case 7:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:240px; left:1000px;";
		break;
	case 8:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:248px; left:930px;";
		break;
	case 9:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:248px; left:1115px;";
		break;
	case 10:
		arrayImages[num].style=" opacity:1;	visibility: visible;top:248px; left:1180px;";
		break;
	}
}
function exitShortInfo(num) {
	let arrayImages = [document.getElementById("firstImage"), document.getElementById("secondImage"),document.getElementById("thirdImage"), document.getElementById("fourthImage"),document.getElementById("fifthImage"), document.getElementById("sixthImage"),document.getElementById("seventhImage"), document.getElementById("eighthImage"),document.getElementById("ninthImage"), document.getElementById("tenthImage"),document.getElementById("eleventhImage")];
	switch (num) {
		case 0:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:400px; left:85px;";
			break;
		case 1:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:400px; left:85px;";
			break;
		case 2:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:300px; left:355px;";
			break;
		case 3:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:400px; left:508px;";
			break;
		case 4:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:350px; left:660px;";
			break;
		case 5:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:400px; left:1125px;";
			break;
		case 6:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:350px; left:830px;";
			break;
		case 7:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:350px; left:1000px;";
			break;
		case 8:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:350px; left:930px;";
			break;
		case 9:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:350px; left:1115px;";
			break;
		case 10:
			arrayImages[num].style=" opacity: 0;	visibility: hidden; top:350px; left:1180px;";
			break;
	}
}

function outInfo(num) {
	document.getElementById("footer-site").style.display="block";
	let arrayPagesInfo = [document.getElementById("firstPageInfo"), document.getElementById("secondPageInfo"), document.getElementById("thirdPageInfo"),document.getElementById("fourthPageInfo"),document.getElementById("fifthPageInfo"),document.getElementById("sixthPageInfo"),document.getElementById("seventhPageInfo"),document.getElementById("eighthPageInfo"),document.getElementById("ninthPageInfo"),document.getElementById("tenthPageInfo"),document.getElementById("eleventhPageInfo")];

	let arrayBtns = [document.getElementById("firstBtn"), document.getElementById("secondBtn"), document.getElementById("thirdBtn"),document.getElementById("fourthBtn"),document.getElementById("fifthBtn"),document.getElementById("sixthBtn"),document.getElementById("seventhBtn"),document.getElementById("eighthBtn"),document.getElementById("ninthBtn"),document.getElementById("tenthBtn"),document.getElementById("eleventhBtn")];

	let arrayColBars = [document.getElementById("col-sidebarChronology1"),document.getElementById("col-sidebarChronology2")];

	
	arrayPagesInfo[num].style.display = 'none';
	for (let i = 0; i < 11; ++i) {
		if (arrayPagesInfo[i].style.display == "block") {
			arrayPagesInfo[i].style.display = 'none';
			arrayBtns[i].style.background = "#e8dbd3";
			arrayColBars[0].style.display = "none";
			arrayColBars[1].style.display = "none";
		}
	}

	if (arrayPagesInfo[num].style.display == "none") {
		arrayPagesInfo[num].style.display = "block";
		arrayBtns[num].style.background = "#f05f40";
		arrayColBars[0].style.display = "block";
		arrayColBars[1].style.display = "block";
	}
	else {
		arrayPagesInfo[num].style.display = 'none';
		arrayBtns[num].style.background = "#e8dbd3";
		arrayColBars[0].style.display = "none";
		arrayColBars[1].style.display = "none";
	}
}