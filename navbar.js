var navbar;
var home,videos,aboutUs;
function setup(){
	noCanvas();
	navbar = selectAll(".navbar");
	for(let i = 0; i < navbar.length; i ++){
		navbar[i].mouseOver(highlight);
		navbar[i].mouseOut(unhighlight);
	}
	
	home = navbar[0];
	videos = navbar[1];
	aboutUs = navbar[2];

	home.mouseClicked(openHome);
	videos.mouseClicked(openVideos);
	aboutUs.mouseClicked(openAbout);
}

function highlight(){
	this.style('background','yellow');
}

function unhighlight(){
	this.style('background','');
}

function openHome(){
	open('index.html','_self');
}

function openVideos(){
	open('Videos.html','_self');
}

function openAbout(){
	open('AboutUs.html','_self');
}
