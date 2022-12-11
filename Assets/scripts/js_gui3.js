#pragma strict



function OnGUI(){
	guiText.text = "Player 2 score: " + js_gameFlow2.scorePlayer2;
	guiText.transform.position = new Vector3(0.71, 0.62, 6);
}