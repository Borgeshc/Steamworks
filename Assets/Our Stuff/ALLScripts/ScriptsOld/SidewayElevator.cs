using UnityEngine;
using System.Collections;

public class SidewayElevator : MonoBehaviour {
	void OnTriggerStay (Collider other){
		if (other.attachedRigidbody)
			other.attachedRigidbody.AddForce (Vector3.right * 10);
	}

	 

}

