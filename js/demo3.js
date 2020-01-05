$(document).ready(function(){
	var jsonConfig = '{"objects":[{"name":"Github","action":"","params":"","model":"models/github.json"},{"name":"Map","action":"","params":"","model":"models/map.json"},{"name":"Speaker","action":"","params":"","model":"models/speaker.json"},{"name":"Home","action":"","params":"","model":"models/home.json"},{"name":"Notification","action":"","params":"","model":"models/notification.json"},{"name":"Retweet","action":"","params":"","model":"models/retweet.json"}],"distance":11600,"height":2400,"radius":4000}';
	var newMenu = new tombraidermenu('demo');
	newMenu.setConfig(jsonConfig);

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
        document.addEventListener("action", function(e) {
          $("#slider").slideToggle();
    	  console.log("The selected index is: "+e.detail.selected);
        });
});
