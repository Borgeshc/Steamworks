using UnityEngine;
using System.Collections;

public class MoveTriggerObjectForward : MonoBehaviour {

	public float speed;

	void OnTriggerStay(Collider col)
	{
		col.transform.position += transform.forward * speed / Time.deltaTime / 100;
	}
}
