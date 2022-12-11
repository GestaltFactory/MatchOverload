#pragma strict

function Awake(){
	DontDestroyOnLoad (transform.gameObject);
}

function OnGUI(){
	guiText.text = "Player 1 total score: " + js_gameFlow1.scoreTotalPlayer1;
	guiText.transform.position = new Vector3(0.11, 0.66, 6);
}