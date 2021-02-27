function clock() {
	var myTimer = setInterval(myClock, 1000);
	var c = 30;

	function myClock() {
	  document.getElementById("demo").innerHTML = --c;
	  if (c == 0) {
		clearInterval(myTimer);
		alert("Reached zero");
	  }
	}
  }

var playing = false;
var startButton;
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What is CSS Stand for?", "Colorized Standards Sheet", "Cascading Style Sheet", "Computer Saving System", "B" ],
	[ "What email Service was owned by Microsoft?", "AOL", "Gmail", "Hotmail", "C" ],
	[ "What are the Primary Colors?", "Red, Blue, Yellow", "Green, Yellow, Orange", "Brown, Green, Purple", "A" ],
	[ "Which Number is a Primary Number?", "23", "9", "55", "A" ],
	[ "What is a common Blood Type in Humans?", "AB", "O", "B", "B" ],
	[ "What is the only Fruit to have seeds on the Outside?", "Bannana", "Orange", "Starawberry", "C" ]
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Next Question</button>";

}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);

