$(document).ready(function(){

	//Variables to COntrol flow of whole Quiz
	var questionNo = 1;
	var correct = 0;
	var incorrect = 0;
	var choice = "undefined";
	var selection = false;

	//Start Button to be pressed before 
	//first question is shown on screen
	$(".js-quiz-window").click(".start-button",function(){
		if (questionNo == 1){
			$(".js-start-quiz").fadeOut();
			$(".results").hide();
			$(".parent-container").delay(400).fadeIn();
			$(".overlay-instructions").hide();
			$(".js-question-container").show();
			$(".status").show();
			$(".js-submit-button").show();
			$(".choice-error").hide();
			$(".js-next").hide();
			$(".current-question").text(questionNo + " ");
			$(".correct").text(correct +" ");
			$(".incorrect").text(incorrect + " ");
			$(".js-question").text(activeQuestion(questionNo));
			choices(questionNo);
		}
	});

	//Make a choice but make it changeable untill
	//it is submitted by pressing button
	$(".choices").on("click","#button-choice",function(){
		choice = $(this).children().text();
		if (choice != "undefined" && selection == false)
		{
			$(".choice-error").fadeOut(600);
			$(".js-choice-made").text("Are you sure its \""+choice+"\"?");	
		}
	})

	//Show the answer after submit button is pressed
	//and disable choices so it cannot be modified
	$(".status").on("click",".js-submit-button", function(){

		if(choice != "undefined"){
			$(".js-submit-button").hide();
			if (questionNo < 10){
				$(".js-next").show();
				selection = true;
			}

			else{
				$(".next-button").text("Show Results");
				$(".js-next").show();
			}
			if(choice == rightAnswer(questionNo)) {
				questionNo++;
				correct++;
				$(".correct").text(correct +" ");
				$(".js-choice-made").text("\""+choice+"\" is a Correct answer!");
			}

			else{
				questionNo++;
				incorrect++;
				$(".incorrect").text(incorrect + " ");
				$(".js-choice-made").text("\""+choice+"\" is a wrong answer!");
			}
		}

		else{
			$(".choice-error").fadeIn(600).show();
		}
		

	})

	//Press Next Button to move to next question
	$(".status").on("click",".js-next", function(){

		if (questionNo < 11){
			$(".js-question").text(activeQuestion(questionNo));
			choices(questionNo);
			$(".js-submit-button").show();
			$(".current-question").text(questionNo + " ");
			$(".js-choice-made").text("Make a Choice");
		}

		else{
			$(".parent-container").fadeOut(600);
			$(".js-question-container").fadeOut(600);
			$(".status").hide();
			$(".correct-choices").text(" "+correct+" ");
			$(".incorrect-choices").text(" "+incorrect+" ");
			$(".parent-container").fadeIn(600);
			$(".results").delay(600).fadeIn(600);
			$(".progress").text("End of Quiz");	
		}
		$(".js-next").hide();
		choice = "undefined";
		selection = false;
	})

	//Show instructions to play
//	$(".header").on("click",".instructions",function(){
//		$(".js-start-quiz").fadeOut(600);
//		$(".parent-container").fadeOut(600);
//		$(".js-question-container").fadeOut(600);
//		$(".results").hide();
//		$(".status").hide();
//		$(".parent-container").delay(600).fadeIn(600);
//		$(".overlay-instructions").delay(600).fadeIn(600);
//		
//		//Hide Instructions and return
//		$(".overlay-instructions").on("click",".button-close",function(){
//
//			$(".parent-container").fadeOut(600);
//			$(".overlay-instructions").hide();
//			$(".js-question-container").show();
//			$(".parent-container").fadeIn(600);
//		
//		});
//	})

	//Start a new game
	$(".header").on("click",".new-game", function(){
		questionNo = 1;
		correct = 0;
		incorrect = 0;
		choice = "undefined";
		$(".parent-container").fadeOut(600);
		$(".js-start-quiz").delay(600).fadeIn(600);
		$(".js-choice-made").text("Make a Choice");
		//$(".current-question").text(questionNo + " ");
		//$(".correct").text(correct +" ");
		//$(".incorrect").text(incorrect + " ");
		//$(".js-submit-button").show();
		//$(".next-button").text("Next");
		//$(".status").show();
		//$(".js-next").hide();
	});
	
});

// This Function contains all the Questions to be asked
function activeQuestion (questionNo){

	var askedQuestion = ["Who invented Compact Disk?","Longhorn was the code name of:","What is Beta Test","\"Do no evil\" is tagline of:","For what does PDF Stands for?","Who is the father of Modern Computer?","COBOL is:","Green DAM is:","The Big Blue is nickname of:","What is Scareware?"];

	return askedQuestion[(questionNo-1)];

}


//This Function contain all the choices to corresponding question
function choices (questionNo){

	var selectChoice;
	var choices = [];
	//1
	choices.push("Tim Cook","Thomas Edison","James T. Russed", "Carles Babbage");
	//2
	choices.push("Avast","Windows Vista","MS Office", "IBM");
	//3
	choices.push("Flowchart"," Data Flow Diagram","Test Version of Software", "Software Design");
	//4
	choices.push("Google","Wallmart","Microsoft", "IBM");
	//5
	choices.push("Partial Document Format","Portable Digital Film","Plain Digital File", "Portable Document Format");
	//6
	choices.push("Lady Ada","Charles Babbage","Thmoas Edison", "Steve Jobs");
	//7
	choices.push("Internet Protocol","Programming Language","Compiler", "Assembly Language");
	//8
	choices.push("Web Filter","Antivirus","Trojan", "Freeware");
	//9
	choices.push("Amazon","IBM","Nokia", "Microsoft");
	//10
	choices.push("Fatal Virus","Spying Tool","Prank Application", "Fake Antivirus");

	selectChoice = (questionNo-1)*4;

	$(".js-choice-1").text(choices[selectChoice]);
	$(".js-choice-2").text(choices[selectChoice+1]);
	$(".js-choice-3").text(choices[selectChoice+2]);
	$(".js-choice-4").text(choices[selectChoice+3]);
	return 0;

}


//This Function contain all right answers to corresponding question
function rightAnswer (questionNo){
	var answer = []
	//1
	answer.push("James T. Russed");
	//2
	answer.push("Windows Vista");
	//3
	answer.push("Test Version of Software");
	//4
	answer.push("Google");
	//5
	answer.push("Portable Document Format");
	//6
	answer.push("Charles Babbage");
	//7
	answer.push("Programming Language");
	//8
	answer.push("Web Filter");
	//9
	answer.push("IBM");
	//10
	answer.push("Fake Antivirus");

	return answer[(questionNo-1)];
}