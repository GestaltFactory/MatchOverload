#pragma strict



function OnGUI(){
	guiText.text = "Time left: " + js_gameFlow1.timer.ToString("f0");
	guiText.transform.position = new Vector3(0.41, 0.75, 6);
}