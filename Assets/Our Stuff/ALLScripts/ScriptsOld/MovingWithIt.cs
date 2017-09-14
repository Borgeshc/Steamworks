using UnityEngine;
using System.Collections;

public class MovingWithIt : MonoBehaviour {
	
	void OnTriggerEnter(Collider other){
		if(other.tag == "Player"){
			other.transform.parent = transform;}
	}
}