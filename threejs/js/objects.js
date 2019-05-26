



//Constructor for practice plan
function Practice(currentDate,sport,sections,duration,totalDrills,startTime,endTime,startDate,scene,activeSection, globalBlock) {
    this.currentDate = currentDate;
    this.sport = sport;
    this.sections = sections; //store section objects
    this.duration = duration; //in minutes
    this.totalDrills = totalDrills;
    this.startTime = startTime;
    this.endTime = endTime;
    this.startDate = startDate;
    this.scene = scene;
    this.activeSection = activeSection;
    this.globalBlock = globalBlock;
}

function setGlobalBlock(practice, Drill) {
    if(practice.globalBlock != null) {
        TweenMax.to(practice.globalBlock.material ,0.5, {opacity:0.75, ease : Circ.easeOut});
        TweenMax.to(practice.globalBlock.position ,0.5, {z:-0.75, ease : Circ.easeOut});
    }
    practice.globalBlock = Drill;
    if(Drill != null){
        TweenMax.to(practice.globalBlock.material ,0.25, {opacity:0.5, ease : Circ.easeOut});
        TweenMax.to(practice.globalBlock.position ,0.5, {z:1.5, ease : Circ.easeOut});
    }
}

//constructor for sections of practice
function Section(name,duration,drills) {
    this.name = name;
    this.duration = duration;
    this.drills = drills;
}




var mainScene = createScene();
var mainPractice = new Practice(new Date(), "football", [], 90, 0, "some time", "some time", "some date", mainScene, null,null)
var section1 = new Section("section1", 0, []);
var isHovering = false;
mainPractice.sections.push(section1);
mainPractice.activeSection = mainPractice.sections[0];


