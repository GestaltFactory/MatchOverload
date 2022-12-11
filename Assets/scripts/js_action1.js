#pragma strict

static var speed: float = 3.0;

function Start(){
	speed = 3.0;
}

function Update () {
	transform.Translate(speed * Time.deltaTime,0,0);
}

function OnTriggerEnter(other: Collider){
	if(other.tag == "action2"){
		speed = 0.0;
	}
}