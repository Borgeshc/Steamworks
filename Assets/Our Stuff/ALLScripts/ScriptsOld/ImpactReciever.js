var mass: float = 1.0; // the lower the mass, the higher the impact
var hitForce: float = 1.5; // impact "force" when hit by rigidbody 
private var impact = Vector3.zero; // character momentum 
private var character: CharacterController;
 
function Start(){
     character = GetComponent(CharacterController);
 }
 
function AddImpact(force: Vector3){
     var dir = force.normalized;
     dir.y = 0.5; // add some velocity upwards - it's cooler this way
     impact += dir.normalized * force.magnitude / mass;
 }
 
function Update(){
     if (impact.magnitude > 0.05){ // if momentum > 0.2...
         character.Move(impact * Time.deltaTime); // move character
     }
     // impact vanishes to zero over time
     impact = Vector3.Lerp(impact, Vector3.zero, 5*Time.deltaTime);
 }
 
function OnCollisionHit(col: Collision){ // collision adds impact
     AddImpact(col.relativeVelocity * hitForce);
 }
 
 @script RequireComponent(CharacterController)