#pragma strict

var rotateSpeed : float;
function Update () 
{
	transform.Rotate (rotateSpeed * Time.deltaTime, 0, 0);
}

function OnBecameVisible()
{
	enabled = true;	
}

function OnBecameInvisible()
{
	enabled = false;	
}