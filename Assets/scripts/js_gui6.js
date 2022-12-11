#pragma strict



function OnGUI(){
	guiText.text = "Game left: " + js_gameFlow1.gameCount;
	guiText.transform.position = new Vector3(0.41, 0.68, 6);
}