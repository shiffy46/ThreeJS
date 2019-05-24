var isMoving = false;
var mousex = 0;
var mousey = 0;
var Block = null;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector3();
var vec = new THREE.Vector3();

var globalCube = null;

var geometry = new THREE.BoxGeometry( 8, 15, 1);
//var material = new THREE.MeshLambertMaterial( { color: 0x00ff00} );
var loader = new THREE.TextureLoader();
var materials = [
    new THREE.MeshLambertMaterial({map: loader.load('Textures/football_texture.jpg')}),
    new THREE.MeshLambertMaterial({map: loader.load('Textures/football_texture.jpg')}),
    new THREE.MeshLambertMaterial({map: loader.load('Textures/football_texture.jpg')}),
    new THREE.MeshLambertMaterial({map: loader.load('Textures/football_texture.jpg')}),
    new THREE.MeshLambertMaterial({map: loader.load('Textures/football_texture.jpg')}),
    new THREE.MeshLambertMaterial({map: loader.load('Textures/football_texture.jpg')})
]
materials.transparent = true;
materials.opacity = 0.2;
var cube = new THREE.Mesh( geometry, materials );
cube.position.set(0.0000,0.0000,-1.0000);
cube.scale.set(1,0,1)
cube.castShadow = true;
cube.userData = {name : "FIELD"}
cube.receiveShadow = true;

scene.add( cube );
TweenMax.to(cube.scale ,0.5, {y:1, ease : Circ.easeOut});


var projector = new THREE.Projector();
var planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1);

function grabBlock(event) {
    event.preventDefault();

    mouse.x = ( event.clientX   / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    mouse.z = 0.5;

    var mv = new THREE.Vector3(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
    0.5 );
    var raycaster1 = raycaster.setFromCamera(mv, camera);
    var pos = raycaster.ray.intersectPlane(planeZ);

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    if(intersects.length != 0)
    {
        if(intersects[0].object.userData.name != "FIELD") { 
            Block = intersects[0];
            globalCube = Block.object;
            isMoving = true;
        }
    }

}


function moveBlock(event) {

    mouse.x = ( event.clientX   / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    mouse.z = 0.5;

    var projector = new THREE.Projector();

    if(isMoving == true)
    {
        var ratio = (window.innerWidth/window.innerHeight);
        var mv = new THREE.Vector3(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1,
            1.5 );
        var raycaster1 = raycaster.setFromCamera(mv, camera);
        var pos = raycaster.ray.intersectPlane(planeZ);
        //console.log("This is the y Coord: " + Block.point.y);
        Block.object.position.x = pos.x;
        Block.object.position.y = pos.y;
    }

}

function relBlock(event) {
    Block = null;
    isMoving = false;
}

window.addEventListener('mousedown', grabBlock)
window.addEventListener('mousemove', moveBlock)
window.addEventListener('mouseup', relBlock)