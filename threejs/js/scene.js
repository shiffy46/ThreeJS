



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

var light = new THREE.PointLight(0xFFFFFF,1,500);
light.position.set(0,0,25);
scene.add(light);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#e5e5e5");
document.body.appendChild( renderer.domElement );

camera.position.z = 10;

window.addEventListener('resize',function()
{
    var width = window.innerWidth; 
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    console.log("camera aspect: " + camera.aspect);
    camera.updateProjectionMatrix();
}
);


var animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();