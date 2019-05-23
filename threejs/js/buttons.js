function addBlock() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshLambertMaterial( { color: 0x00ff00} );
    material.opacity = 0.5;
    material.transparent = true;
    var cube = new THREE.Mesh( geometry, material );
    cube.position.set(0.0000,0.0000,0.0000);
    cube.scale.set(0,0,1)
    scene.add( cube );
    TweenMax.to(cube.scale ,0.5, {x:1,y:1, ease : Circ.easeOut});
}

function lengthenBlock() {
    if(globalCube != null){
        TweenMax.to(globalCube.scale ,0.5,{y:"+="+0.45, ease : Circ.easeOut});
    }
}

function widenBlock() {
    if(globalCube != null){
        TweenMax.to(globalCube.scale ,0.5,{x:"+="+0.45, ease : Circ.easeOut});
    }
}

function shortenBlock() {
    if(globalCube != null){
        TweenMax.to(globalCube.scale ,0.5,{y:"-="+0.45, ease : Circ.easeOut});
    }
}

function squeezeBlock() {
    if(globalCube != null){
        TweenMax.to(globalCube.scale ,0.5,{x:"-="+0.45, ease : Circ.easeOut});
    }
}

function deleteBlock() {
    if(globalCube != null){
        TweenMax.to(globalCube.scale ,0.5, {x:0,y:0, ease : Circ.easeOut});
        setTimeout( function() {
            scene.remove(globalCube);
            globalCube=null;
        },500);
    }
}