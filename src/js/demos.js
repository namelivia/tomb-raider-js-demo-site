$(document).ready(function(){
	var newMenu = new tombraidermenu('demo1');
	newMenu.setRadius(2800);
	newMenu.setCameraHeight(1200);
	newMenu.setCameraDistance(5800);
	newMenu.addModel('shotgun','../models/shotgun.json','a','a');
	newMenu.addModel('EO Tech','../models/eotech.json','a','a');
	newMenu.addModel('USP','../models/usp.json','a','a');
	newMenu.addModel('SCAR','../models/scar.json','a','a');
	newMenu.addModel('M4 Rifle','../models/m4.json','a','a');

	$("#moveLeft").on("click",function(){
	  newMenu.moveLeft();
	});

	$("#moveRight").on("click",function(){
	  newMenu.moveRight();
	});

	var newMenu2 = new tombraidermenu('demo2');
	newMenu2.setRadius(2000);
	newMenu2.setCameraHeight(1200);
	newMenu2.setCameraDistance(5800);
	newMenu2.addModel('Diaspora *','../models/diaspora.json','a','a');
	newMenu2.addModel('Creative Commons Search','../models/creativecommons.json','a','a');
	newMenu2.addModel('GNU','../models/gnu.json','a','a');
	newMenu2.addModel('Skateistan','../models/skateistan.json','a','a');

	$("#moveLeft2").on("click",function(){
	  newMenu2.moveLeft();
	});

	$("#moveRight2").on("click",function(){
	  newMenu2.moveRight();
	});
});
