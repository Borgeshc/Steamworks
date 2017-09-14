#pragma strict

var sound : AudioClip;

function OnTriggerEnter (Col : Collider)
{
	if(Col.CompareTag("Blade"))
		GetComponent.<AudioSource>().PlayOneShot(sound);

}