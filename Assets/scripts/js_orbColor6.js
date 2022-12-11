#pragma strict

static var color: Color = Color.black;

function Awake () {
	transform.renderer.material.color = color;
}

function Update () {
	transform.renderer.material.color = color;
}