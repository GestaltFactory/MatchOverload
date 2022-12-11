#pragma strict



function OnGUI(){
	guiText.text = "Player 1 score: " + js_gameFlow1.scorePlayer1;
	guiText.transform.position = new Vector3(0.11, 0.62, 6);
}