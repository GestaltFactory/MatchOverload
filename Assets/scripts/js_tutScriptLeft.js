#pragma strict

var target1: GameObject;
var target2: GameObject;

function OnMouseDown(){
	if(js_tutScriptRight.tut1 == false && js_tutScriptRight.tut2){
		target1.SetActive(true);
		js_tutScriptRight.tut1 = true;
	}
	else if(js_tutScriptRight.tut1 == false && js_tutScriptRight.tut2 == false){
		target2.SetActive(true);
		js_tutScriptRight.tut2 = true;
	}
}
