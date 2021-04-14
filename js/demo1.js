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

document.getElementById("moveLeft").addEventListener("click",function(){
  newMenu.moveLeft();
  document.getElementById("itemName").textContent = newMenu.getSelectedName();
});

document.getElementById("moveRight").addEventListener("click",function(){
  newMenu.moveRight();
  document.getElementById("itemName").textContent = newMenu.getSelectedName();
});
