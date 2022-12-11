#pragma strict

function OnTriggerEnter(other: Collider){
	if(other.tag == "trigger"){
		gameObject.SetActive(false);
	}
}