#pragma strict

function Awake(){
	DontDestroyOnLoad (transform.gameObject);
}

function OnGUI(){
	guiText.text = "Player 2 total score: " + js_gameFlow2.scoreTotalPlayer2;
	guiText.transform.position = new Vector3(0.71, 0.66, 6);
}