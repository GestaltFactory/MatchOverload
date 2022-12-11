#pragma strict

var target1: GameObject;
var target2: GameObject;

static var tut1: boolean = true;
static var tut2: boolean = true;

function OnMouseDown(){
	if(tut1 && tut2){
		target1.SetActive(false);
		tut1 = false;
	}
	else if(!tut1 && tut2){
		target2.SetActive(false);
		tut2 = false;
	}
}
