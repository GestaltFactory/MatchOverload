#pragma strict

var objects: GameObject[];				// the shapes use in the Random.Range
var objectPosPlayer2: Transform;		// the position whwre the shape for player 1 will appear in the scene

var lv1: boolean = true;				// three bool use to activate the proper difficulty level
var lv2: boolean = false;
var lv3: boolean = false;

static var scorePlayer2: int = 0;
static var scoreTotalPlayer2: int = 0;
static var time: boolean = false;
static var gameCount: int = 5;

var myCounter: float = 0.0;      // time delay before being able to press the button to instantialise another shape
private var actual: GameObject; 	     // the actual shape in the scene is put in this variable
static var n1: GameObject;              // n1, n2 and n3 are container that allows the system to remember the shape that came before
static var n2: GameObject;
static var n3: GameObject;

private var dirRight: boolean = false;   	// if right has been pressed
private var dirLeft: boolean = false;		// if left has been pressed
static var beginGame: boolean = true;      // begin game with space while other control are deactivated

function Start () {
	scorePlayer2 = 0;
	scoreTotalPlayer2 = 0;
	beginGame = true;
	js_orbColor4.color = Color.red;			// change the color of the orb to show on which level the player is 
	actual = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
	myCounter = 1.2;
}

function Update () {
	if(Input.GetKeyDown("space") && beginGame && myCounter <= 0){			// begin the game by pressing space
		js_action1.speed = 3.0;					// stop the shape in the middle of the playfield
		beginGame = false;
		n1 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
		myCounter = 1.2;
	}
	
	if(myCounter <= 0.0 && lv1){
		LV1();	
	}
	else if(myCounter <= 0.0 && lv2){
		LV2();	
	}
	else if(myCounter <= 0.0 && lv3){
		LV3();	
	}
	else{
		myCounter -= Time.deltaTime;
	}

	if(time){						// victory conditions
		beginGame = true;
		if(gameCount > 0){									
			if(lv1){
				if(scorePlayer2 < 30){
					scoreTotalPlayer2 += scorePlayer2;
					scorePlayer2 = 0; 
					lv1 = true;
					js_orbColor4.color = Color.red;
					time = false;
				}
				else if(scorePlayer2 >= 30 && scorePlayer2 < 50){
					scoreTotalPlayer2 += scorePlayer2;
					scorePlayer2 = 0; 
					lv1 = true;
					js_orbColor4.color = Color.red;
					time = false;
				}
				else if(scorePlayer2 >= 50){
					scoreTotalPlayer2 += scorePlayer2;
					scorePlayer2 = 0;
					lv1 = false;
					js_orbColor4.color = Color.black;
					lv2 = true;
					js_orbColor5.color = Color.red;
					time = false;
				}	
			}
			else if(lv2){
				if(scorePlayer2 < 30){
					scoreTotalPlayer2 += scorePlayer2;
					scorePlayer2 = 0; 
					lv2 = false;
					js_orbColor5.color = Color.black;
					lv1 = true;
					js_orbColor4.color = Color.red;
					time = false;
				}
				else if(scorePlayer2 >= 30 && scorePlayer2 < 50){
					scoreTotalPlayer2 += scorePlayer2;
					scorePlayer2 = 0; 
					lv2 = true;
					js_orbColor5.color = Color.red;
					time = false;
				}
				else if(scorePlayer2 >= 50){
					scoreTotalPlayer2 += scorePlayer2;
					scorePlayer2 = 0; 
					lv2 = false;
					js_orbColor5.color = Color.black;
					lv3 = true;
					js_orbColor6.color = Color.red;
					time = false;
				}	
			}
			else if(lv3){
				if(scorePlayer2 < 30){
					scoreTotalPlayer2 += scorePlayer2;
					scorePlayer2 = 0; 
					lv3 = false;
					js_orbColor6.color = Color.black;
					lv2 = true;
					js_orbColor5.color = Color.red;
					time = false;		
				}
				else if(scorePlayer2 >= 30 && scorePlayer2 < 50){
					scoreTotalPlayer2 += scorePlayer2;
					scorePlayer2 = 0; 
					lv3 = true;
					js_orbColor6.color = Color.red;
					time = false;
				}
				else if(scorePlayer2 >= 50){
					scoreTotalPlayer2 += scorePlayer2;
					scorePlayer2 = 0; 
					lv3 = true;
					js_orbColor6.color = Color.red;
					time = false;
				}	
			}
		}
		else{
			Application.LoadLevel(3);
		}
	}
}

// the three functions below are the main game itself. 

function LV1(){
	if(Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !Input.GetKeyDown("left") && !beginGame){
		js_action1.speed = 3.0;
		dirLeft = false;
		dirRight = true;
		if(n1.tag == actual.tag && dirRight && !dirLeft){
			scorePlayer2 += 5;
			actual = n1;					// put the var in n1 in actual and change the random value of n1 afterward
			n1 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;
		}
		else if(n1.tag != actual.tag && dirRight && !dirLeft){
			scorePlayer2 -= 5;
			actual = n1;
			n1 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;
		}
	}	
	if(Input.GetKeyDown("left") && !Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !beginGame){
		js_action1.speed = 3.0;
		dirRight = false;
		dirLeft = true;
		if(n1.tag == actual.tag && !dirRight && dirLeft){
			scorePlayer2 -= 5;
			actual = n1;
			n1 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;
		}
		else if(n1.tag != actual.tag && !dirRight && dirLeft){
			scorePlayer2 += 5;
			actual = n1;
			n1 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;
		}
	}	
	if(Input.GetKeyDown("down") && !Input.GetKeyDown("right") && !Input.GetKeyDown("left") && !beginGame){
		js_action1.speed = 3.0;
		dirRight = false;
		dirLeft = false;
		actual = n1;
		n1 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);	
		myCounter = 1.2;
	}
}

function LV2(){				
	if(n2 == null){
		if(Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirLeft = false;
			dirRight = true;
			scorePlayer2 -= 5;			
			n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;
		}	
		if(Input.GetKeyDown("left") && !Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = true;
			scorePlayer2 -= 5;
			n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;

		}	
		if(Input.GetKeyDown("down") && !Input.GetKeyDown("right") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = false;
			n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);							
			myCounter = 1.2;
		}
	}
		
	else if(n2 != null){
		if(Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirLeft = false;
			dirRight = true;
			if(n2.tag == actual.tag && dirRight && !dirLeft){
				scorePlayer2 += 15;
				actual = n1;					// put n2 in n1 and n1 in actual and change the random value of n2
				n1 = n2;
				n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
				myCounter = 1.2;
			}
			else if(n2.tag != actual.tag && dirRight && !dirLeft){
				scorePlayer2 -= 5;
				actual = n1;
				n1 = n2;
				n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
				myCounter = 1.2;
			}
		}	
		if(Input.GetKeyDown("left") && !Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = true;
			if(n2.tag == actual.tag && !dirRight && dirLeft){
				scorePlayer2 -= 5;
				actual = n1;
				n1 = n2;
				n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
				myCounter = 1.2;
			}
			else if(n2.tag != actual.tag && !dirRight && dirLeft){
				scorePlayer2 += 15;
				actual = n1;
				n1 = n2;
				n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
				myCounter = 1.2;
			}
		}	
		if(Input.GetKeyDown("down") && !Input.GetKeyDown("right") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = false;
			actual = n1;
			n1 = n2;
			n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);	
			myCounter = 1.2;
		}
	}
}

function LV3(){
	if(n2 == null && n3 == null){
		if(Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirLeft = false;
			dirRight = true;
			scorePlayer2 -= 5;			
			n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;
		}	
		if(Input.GetKeyDown("left") && !Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = true;
			scorePlayer2 -= 5;
			n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;

		}	
		if(Input.GetKeyDown("down") && !Input.GetKeyDown("right") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = false;
			n2 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);							
			myCounter = 1.2;
		}
	}
	
	if(n2 != null && n3 == null){
		if(Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirLeft = false;
			dirRight = true;
			scorePlayer2 -= 5;    // at this stage, there is nothing to compare, so the only good answer is next or you lose points			
			n3 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;
		}	
		if(Input.GetKeyDown("left") && !Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = true;
			scorePlayer2 -= 5;
			n3 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
			myCounter = 1.2;

		}	
		if(Input.GetKeyDown("down") && !Input.GetKeyDown("right") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = false;
			n3 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);							
			myCounter = 1.2;
		}
	}	
								
	else if(n2 != null && n3 != null){
		if(Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirLeft = false;
			dirRight = true;
			if(n3.tag == actual.tag && dirRight && !dirLeft){
				scorePlayer2 += 30;
				actual = n1;					// put n3 in n2, n2 in n1 and n1 in actual and change the random value of n3
				n1 = n2;
				n2 = n3;
				n3 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
				myCounter = 1.2;
			}
			else if(n3.tag != actual.tag && dirRight && !dirLeft){
				scorePlayer2 -= 5;
				actual = n1;
				n1 = n2;
				n2 = n3;
				n3 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
				myCounter = 1.2;
			}
		}	
		if(Input.GetKeyDown("left") && !Input.GetKeyDown("right") && !Input.GetKeyDown("down") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = true;
			if(n3.tag == actual.tag && !dirRight && dirLeft){
				scorePlayer2 -= 5;
				actual = n1;
				n1 = n2;
				n2 = n3;
				n3 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
				myCounter = 1.2;
			}
			else if(n3.tag != actual.tag && !dirRight && dirLeft){
				scorePlayer2 += 30;
				actual = n1;
				n1 = n2;
				n2 = n3;
				n3 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);
				myCounter = 1.2;
			}
		}	
		if(Input.GetKeyDown("down") && !Input.GetKeyDown("right") && !Input.GetKeyDown("left") && !beginGame){
			js_action1.speed = 3.0;
			dirRight = false;
			dirLeft = false;
			actual = n1;
			n1 = n2;
			n2 = n3;
			n3 = Instantiate(objects[(Random.Range(0, objects.Length))], objectPosPlayer2.transform.position, objectPosPlayer2.transform.rotation);	
			myCounter = 1.2;
		}
	}	
}