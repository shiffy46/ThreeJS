function addBlock() {
    var cube = initBlock();
    mainPractice.scene.add( cube );
    TweenMax.to(cube.scale ,0.5, {x:1,y:1, ease : Circ.easeOut});
    setBlockProps(cube);
    mainPractice.activeSection.drills.push(cube);
    console.log("Section Name: "+mainPractice.activeSection.name);
    console.log("Section Blocks: "+mainPractice.activeSection.drills.length);

}

//create the block
function initBlock() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshLambertMaterial( { color: 0xFFFFFF} );
    material.opacity = 0.5;
    material.transparent = true;
    var cube = new THREE.Mesh( geometry, material );
    cube.position.set(0.0000,0.00000,1.0000);
    cube.scale.set(0,0,1)
    cube.castShadow = true;
    cube.receiveShadow = true;
    return(cube);
}

//when a cube is created, we create the userdata for that cube that corresponds to practice information
function setBlockProps(cube) {
    cube.userData.name = "Drill" ;
    cube.userData.description = "TEST";
    cube.userData.coach = "CAMPELL";
    cube.userData.personnel = "RUNNINGBACKS";
}

function lengthenBlock() {
    if(mainPractice.globalBlock != null && mainPractice.globalBlock.scale.y < 10){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5,{y:"+="+0.45, ease : Circ.easeOut});
    }
}

function widenBlock() {
    if(mainPractice.globalBlock != null && mainPractice.globalBlock.scale.x < 6){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5,{x:"+="+0.45, ease : Circ.easeOut});
    }
}

function shortenBlock() {
    if(mainPractice.globalBlock != null && mainPractice.globalBlock.scale.y > 0.75){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5,{y:"-="+0.45, ease : Circ.easeOut});
    }
}

function squeezeBlock() {
    if(mainPractice.globalBlock != null && mainPractice.globalBlock.scale.x > 0.75){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5,{x:"-="+0.45, ease : Circ.easeOut});
    }
}

function deleteBlock() {
    if(mainPractice.globalBlock != null){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5, {x:0,y:0, ease : Circ.easeOut});
        setTimeout( function() {
            mainPractice.scene.remove(mainPractice.globalBlock);
            mainPractice.globalBlock=null;
        },500);
    }
}