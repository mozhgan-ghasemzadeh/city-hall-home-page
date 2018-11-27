
var NewsArray =[["NewsTitle1","Lorem ipsum dolor sit amet"]
               ,["NewsTitle2","consectetur adipisicing elit"]
               ,["NewsTitle3","tempor incididunt ut labore et dolore magna aliqua"]
               ,["NewsTitle4"," sed do eiusmod Ut enim ad minim veniam"]
               ,["NewsTitle5","quis nostrud exercitation ullamco laboris nisi ut aliquip ex "]
               ,["NewsTitle6","Duis aute irure dolor in reprehenderit in voluptate velit esse"]
               ,["NewsTitle7","cillum dolore eu fugiat nulla pariatur"]];

var sec = 4000; //time of news changes
var time;
var index;
// change news
function publishNews(j){
	if (j!=-1){
		index = j;	
	}
	var bullets = document.querySelectorAll(" #bubbles div");
	for(var k=0;k < bullets.length;k++){
		bullets[k].style.backgroundColor = "white";
	}
	
	
	document.querySelector(" h1 a").innerHTML = NewsArray[index][0];
	document.querySelector("p").innerHTML = NewsArray[index][1];
	bullets[index].style.backgroundColor = "#2c3e50";
	index++;
	if( index > (bullets.length - 1) ) { 
		index = 0;
	 }
	time = setTimeout('publishNews('+index+')',sec);
}

// change news onclick event of bullets
function bulletsClick(e){
	clearTimeout(time);
	var k = e.target.number ;
	publishNews(k);
}
//mouse over on news div,it stops changing news,stop on the current news
function Mouseon(){
	clearTimeout(time);
}
//mouse out of news div,it continue to show news
function Mouseout(){
var k= -1;
time = setTimeout('publishNews('+k+')',sec);
}




//add bullets to news div
function addBullet(){
	var div = document.getElementById("bubbles");
	for(var k=0;k<NewsArray.length;k++){
		var newBullet = document.createElement("div");
		div.appendChild(newBullet);
		newBullet.classList.add("bullet");
		newBullet.addEventListener('click', bulletsClick); //add click event to bullets
		newBullet.number = k;
	}
}

// show sub menu
function showSubMenu(li){
		
	var ul = li.querySelector("ul");
	var img = li.querySelectorAll("img");
	var span = li.querySelector("span");
	
	if(ul.classList == "subItemshide"){ // open sub menu

		var allitems = document.querySelectorAll("nav>ul>li");
		for (var i = 0; i < allitems.length-1; i++) { // check if other menu items are showing their sub menus,close it,before showing the clicked menu item's sub menu
			allitems[i].querySelector("ul").classList.add("subItemshide");
			hide(allitems[i].querySelectorAll("img"),allitems[i],allitems[i].querySelector("span"));
		}
		ul.classList.remove("subItemshide");
		ul.classList.add("subItemsshow");
		show(img,li,span);
	}
	else{ // close sub menu
		ul.classList.remove("subItemsshow");
		ul.classList.add("subItemshide");
		hide(img,li,span);
	}
}



//show responsive menu 
function ShowMenuonclick(){
	var ul = document.querySelector("nav>ul");
	var menuimg = document.querySelectorAll(" div img");
	
	if(ul.classList == "Itemshide"){ // show menu if menu is not showing
		ul.classList.remove("Itemshide");
		ul.classList.add("Itemsshow");
		menuimg[0].style.display = "none";
		menuimg[1].style.display = "inline-block";
		document.querySelector("section").style.zIndex = "-1";
	}
	else{ // hide menu when menu is showing
		// close all opened submenus before closing menu item(mobile version)
		var liArray = ul.querySelectorAll("li>ul");
		var img = ul.querySelectorAll("li>img");
		var span = ul.querySelector("li>span");
		var li = ul.querySelector("li");
		for (var i = 0; i < liArray.length-1; i++){
			if(liArray[i].classList == "subItemsshow"){
			liArray[i].classList.remove("subItemsshow");
			liArray[i].classList.add("subItemshide");
			hide(img,li,span);

			}
		}
		document.querySelector("section").style.zIndex = "0";
		ul.classList.remove("Itemsshow");
		ul.classList.add("Itemshide");
		menuimg[0].style.display = "inline-block";
		menuimg[1].style.display = "none";
	}

}


// change background and icon of menu item
function show(img,li,span){

	img[0].style.display = "none";
	img[1].style.display = "inline-block";
	li.style.backgroundColor ="#2c3e50";
	span.style.color ="white";

}
// change the backgroum and icon of opened menu item to normal
function hide(img,li,span){
	img[0].style.display = "inline-block";
	img[1].style.display = "none";
	li.style.backgroundColor ="white";
	span.style.color ="#2c3e50";
}


addBullet();
publishNews(0);