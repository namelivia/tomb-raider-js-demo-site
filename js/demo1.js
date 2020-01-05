$(document).ready(function(){
	var newMenu = new tombraidermenu('demo1');
	newMenu.setRadius(2800);
	newMenu.setCameraHeight(1200);
	newMenu.setCameraDistance(5800);
	newMenu.addModel('Shotgun','../models/shotgun.json',null,null);
	newMenu.addModel('EO Tech','../models/eotech.json',null,null);
	newMenu.addModel('USP','../models/usp.json',null,null);
	newMenu.addModel('SCAR','../models/scar.json',null,null);
	newMenu.addModel('M4 Rifle','../models/m4.json',null,null);

	$("#moveLeft").on("click",function(){
	  newMenu.moveLeft();
	  $("#itemName").html(newMenu.getSelectedName());
	});

	$("#moveRight").on("click",function(){
	  newMenu.moveRight();
	  $("#itemName").html(newMenu.getSelectedName());
	});
});
