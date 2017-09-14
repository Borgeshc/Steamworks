#pragma strict
 var SpawnPoint : Transform;
 var respawn : boolean = false;
 var PlayerLife : int;
 
 function Update () {
 
    if(PlayerLife <= 0)
    {
    respawn = true;
    }
    else
    {
    respawn = false;
    }
 
     if(respawn)
     {
 
     transform.position = SpawnPoint.position;
 
     }
 }
