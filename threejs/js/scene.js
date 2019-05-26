


function createScene() {
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set( 0, -5, 100 );
camera.lookAt( 0, 15, 25);

var light = new THREE.PointLight(0xFFFFFF,1,500);
light.castShadow = true;
light.position.set(0,0,25);
light.lookAt(0,0,0);
scene.add(light);

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#e5e5e5");
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
document.body.appendChild( renderer.domElement );

camera.position.z = 10;

window.addEventListener('resize',function()
{
    var width = window.innerWidth; 
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
}
);

setBaseCubes(scene, camera);

var animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();
return(scene);
}