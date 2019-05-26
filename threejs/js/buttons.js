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
    stopRay();
    cube.userData.name = "Drill" ;
    cube.userData.description = "TEST";
    cube.userData.coach = "CAMPELL";
    cube.userData.personnel = "RUNNINGBACKS";
}

function lengthenBlock() {
    stopRay();
    if(mainPractice.globalBlock != null && mainPractice.globalBlock.scale.y < 10){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5,{y:"+="+0.45, ease : Circ.easeOut});
    }
}

function widenBlock() {
    stopRay();
    if(mainPractice.globalBlock != null && mainPractice.globalBlock.scale.x < 6){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5,{x:"+="+0.45, ease : Circ.easeOut});
    }
}

function shortenBlock() {
    stopRay();
    if(mainPractice.globalBlock != null && mainPractice.globalBlock.scale.y > 0.75){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5,{y:"-="+0.45, ease : Circ.easeOut});
    }
}

function squeezeBlock() {
    stopRay();
    if(mainPractice.globalBlock != null && mainPractice.globalBlock.scale.x > 0.75){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5,{x:"-="+0.45, ease : Circ.easeOut});
    }
}

function deleteBlock() {
    stopRay();
    if(mainPractice.globalBlock != null){
        TweenMax.to(mainPractice.globalBlock.scale ,0.5, {x:0,y:0, ease : Circ.easeOut});
        setTimeout( function() {
            mainPractice.scene.remove(mainPractice.globalBlock);
            mainPractice.globalBlock=null;
        },500);
    }
}

function stopRay() {
    console.log("hovering");
    isHovering = true;
}

function resumeRay() {
    console.log(" not hovering");
    isHovering = false;
}

function addSection() {
    var minuteBut = createButton("btn btn-secondary","addSection()","button");
    var sectionBut = createButton("btn btn-secondary btn-block","addSection()","button");
    var div = document.createElement("div");
    var att = "class";
    var value = "btn-group";
    var att2 = "style";
    var value2 = "padding:2px;";
    div.setAttribute(att, value);
    div.setAttribute(att2, value2);
    div.appendChild(minuteBut);
    div.appendChild(sectionBut);
    var sections = document.getElementById("sections");
    sections.appendChild(div);
}

function createButton(className, onClickFunc, type ) {
    var button = document.createElement("button");
    addAtt(button,"class",className);
    addAtt(button,"onclick", onClickFunc);
    addAtt(button,"type",type);
    addAtt(button, "onmouseenter", "stopRay()");
    addAtt(button, "onmouseleave", "resumeRay()");
    button.innerHTML = "section" + mainPractice.sections.length;
    return(button);
}

function addAtt(element,attName,value) {
    element.setAttribute(attName,value);
}