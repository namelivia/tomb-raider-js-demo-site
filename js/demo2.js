$(document).ready(function(){
	var newMenu = new tombraidermenu('demo');
	newMenu.setRadius(2000);
	newMenu.setCameraHeight(1200);
	newMenu.setCameraDistance(5800);
	newMenu.addModel('Diaspora *','../models/diaspora.json','link','http://joindiaspora.com');
	newMenu.addModel('Creative Commons Search','../models/creativecommons.json','link','https://search.creativecommons.org/');
	newMenu.addModel('GNU','../models/gnu.json','link','http://www.gnu.org');
	newMenu.addModel('Skateistan','../models/skateistan.json','link','http://skateistan.org');

	$("body").keydown(function(e) {
	  if(e.keyCode == 37) {
	    newMenu.moveLeft();
	    $("#selected").html(newMenu.getSelectedName());
	  }
	  else if(e.keyCode == 39) {
	    newMenu.moveRight();
	    $("#selected").html(newMenu.getSelectedName());
	  }
	  else if(e.keyCode == 13) {
	    newMenu.action();
	  }
	});
});
