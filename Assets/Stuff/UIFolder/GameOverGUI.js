#pragma strict
@script ExecuteInEditMode()
var background : GUIStyle;
var gameOverText : GUIStyle;
var gameOverShadow : GUIStyle;
var gameOverScale = 1.5;
var gameOverShadowScale = 0.5;

private var fontSize : int = 40;


function OnGUI()
{
	GUI.skin.label.fontSize = GUI.skin.box.fontSize = GUI.skin.button.fontSize = fontSize;
	GUI.Label(Rect((Screen.width/2) - 300, (Screen.height/2), 1500, 4000), "CLICK ANY KEY TO CONTINUE"); 

	GUI.matrix = Matrix4x4.TRS(Vector3(-280, 0, 0), Quaternion.identity, Vector3.one *gameOverShadowScale);
	GUI.Label ( Rect( (Screen.width / (2 * gameOverShadowScale)) - 150,((Screen.height / (2 * gameOverShadowScale))- 40) - 40, 300, 100), "Congratulations!!!",gameOverShadow);
	GUI.matrix = Matrix4x4.TRS(Vector3(0, 0, 0), Quaternion.identity, Vector3.one * gameOverScale);
}