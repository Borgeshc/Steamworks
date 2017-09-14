using UnityEngine;
using System.Collections;

public class PlayTimeScript : MonoBehaviour
{
	public int playtime = 0;
	private int seconds = 0;
	private int minutes = 0;

	private int fontSize = 50;

	void Start ()
	{
		StartCoroutine ("Playtimer");
	}

	private IEnumerator Playtimer ()
	{
		while (true)
		{
			yield return new WaitForSeconds(1);
			playtime +=1;
			seconds = (playtime % 60);
			minutes = (playtime / 60) % 60;
		}
	}

	void OnGUI()
	{
		GUI.skin.label.fontSize = GUI.skin.box.fontSize = GUI.skin.button.fontSize = fontSize;

		if (seconds < 10) {
			GUI.Label (new Rect (0, 0, 8000, 1000), "" + minutes.ToString () + ":0" + seconds.ToString ());
		} else {
			GUI.Label (new Rect (0, 0, 8000, 1000), "" + minutes.ToString () + ":" + seconds.ToString ());
		}
	}
}

