var newMenu = TombRaiderMenu('demo1');
newMenu.setRadius(2.5);
newMenu.setCameraHeight(2);
newMenu.setCameraDistance(5);
Promise.all([
    newMenu.addItem('Shotgun','../models/shotgun.gltf',null,null),
    newMenu.addItem('EO Tech','../models/eotech.gltf',null,null),
    newMenu.addItem('USP','../models/usp.gltf',null,null),
    newMenu.addItem('SCAR','../models/scar.gltf',null,null),
    newMenu.addItem('M4 Rifle','../models/m4.gltf',null,null)
]).then(function() { newMenu.animate() });

$("#moveLeft").on("click",function(){
  newMenu.moveLeft();
  $("#itemName").html(newMenu.getSelectedName());
});

$("#moveRight").on("click",function(){
  newMenu.moveRight();
  $("#itemName").html(newMenu.getSelectedName());
});
