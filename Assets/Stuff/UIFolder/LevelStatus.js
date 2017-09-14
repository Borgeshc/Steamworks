// LevelStatus: Master level state machine script.
var exitGateway: GameObject;
var levelGoal: GameObject;
var unlockedSound: AudioClip;
var levelCompleteSound: AudioClip;
var mainCamera: GameObject;
var unlockedCamera: GameObject;
var levelCompletedCamera: GameObject;

// This is where info like the number of items the player must collect in order to complete the level lives.

var itemsNeeded: int = 20;	// This is how many fuel canisters the player must collect.


// Awake(): Called by Unity when the script has loaded.
// We use this function to initialise our link to the Lerpz GameObject.
function Awake()
{
	levelGoal.GetComponent(MeshCollider).isTrigger = false;	
}	
function UnlockLevelExit()
{
	Debug.Log("FIRST!");
	Debug.Log("Malcolm");
	Debug.Log("Kenneth IS Awesome");
	Debug.Log("HELP!");
	yield WaitForSeconds(1);
	exitGateway.active = false; // ... the fence goes down briefly...
	yield WaitForSeconds(0.2); //... pause for a fraction of a second...
	exitGateway.active = true; //... now the fence flashes back on again...
	yield WaitForSeconds(0.2); //... another brief pause before...
	exitGateway.active = false; //... the fence finally goes down forever!
	levelGoal.GetComponent(MeshCollider).isTrigger = true;
	yield WaitForSeconds(4); // give the player time to see the result.
	Debug.Log("So mUch For Wating");
	Debug.Log("It's the end of Ken's Mother");
}

//function LevelCompleted()
//{
//	Debug.Log("ALSO FIRST!");
//	mainCamera.GetComponent(AudioListener).enabled = false;
//	levelCompletedCamera.active = true;
//	levelCompletedCamera.GetComponent(AudioListener).enabled = true;
//	Debug.Log("I like to...");
//	Debug.Log("fly like an eagle!");
//	Application.LoadLevel("SWFinalScreenFinal"); //...just show the Game Over sequence.
//}



