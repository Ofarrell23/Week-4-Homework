
let pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
let questions = [
    [ "What is the definition of CSS? ", "Cascading Style Sheet", "Colorized Standards Sheet", "computer", "unfiltered", "A"],
	[ "What email Service was owned by Microsoft?", "gmail", "AOL", "hotmail","generation", "C" ],
	[ "?", 
	"Voice over Internet Protocol", "Vice over Internal Proceedure", "25", "A" ],
	[ "What is 8 / 2?", "10", "2", "4", "C" ],
	[ "What is 7 x 3?", "21", "24", "25", "A" ],
	[ "What is 8 / 2?", "10", "2", "4", "C" ]
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
    chD = questions[pos][4];
	test.innerHTML = "<h3>"+question+"</h>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br>";
    test.innerHTML += "<button onclick='startQuiz()'>Start Quiz</button>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
	
}


function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(let i=0; i<choices.length; i++){
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