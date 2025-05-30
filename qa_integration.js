function quiz_Session() {
    this.quizSessionId = 108;
	this.quizName; //imp
    this.TotalQuestionsInQuiz = 10; //imp
    this.quizType = "MATHGPA"; //imp
    this.questionSetJsonString;
    this.questionSetArray = [];
    this.isLastQuestion = false;
    this.currentQuestionIndex;
    this.currentQuestionObj;
    this.currentQuestionOptionCount;
    this.NoOfCorrectAnswers = 0;
    this.startTime;
    this.endTime;
    this.duration;
    this.userResponseText;
    this.rightOrWrong;
    this.timePerQuestion;
}

function QuestionObject() {
    this.questionId;
    this.questionText;
    this.option1;
    this.option2;
    this.option3;
    this.option4;
    this.answer;
    this.kbcLevel;
    this.selectedOption;
    this.timeToAttempt;
    this.createdOn;
    this.reviewStatus;
    this.quesionStartTime;
    this.questionEndTime
}

//----------------------------------------
var myQuizObj = new quiz_Session();
setFreshQuizObj();
function setFreshQuizObj(){
	//myQuizObj.quizSessionId = 107;
	//myQuizObj.TotalQuestionsInQuiz = 10;
    //myQuizObj.quizType = "QUIZ";
    //myQuizObj.questionSetJsonString;
    myQuizObj.questionSetArray = [];
    myQuizObj.isLastQuestion = false;
    myQuizObj.currentQuestionIndex; //imp
    myQuizObj.currentQuestionObj;
    myQuizObj.currentQuestionOptionCount;
    //5.1 populate question object for each question in question_set.
		 	/*myQuizObj.questionSetArray = new Array();
            for(var i=0; i < 10; i++)
            {
                var tempQestionObj = new QuestionObject();
                tempQestionObj.questionText = "mathgpa";
                tempQestionObj.option1 = "1";
                tempQestionObj.option2 = "2";
                tempQestionObj.option3 = "3";
                tempQestionObj.option4 = "4";
                tempQestionObj.option5 = "5";
                tempQestionObj.answer = "";
                tempQestionObj.questionId = ""
                tempQestionObj.selectedOption = "3";
                tempQestionObj.timeToAttempt; 
                //PUT IT GLOBALLY IN QUIZ OBJECT QUESTIONSETARRAY
                myQuizObj.questionSetArray.push(tempQestionObj);
            }*/
    myQuizObj.NoOfCorrectAnswers = 0; //imp
    myQuizObj.startTime = new Date();; //imp
    myQuizObj.endTime; //imp
    myQuizObj.duration; //imp?
    myQuizObj.userResponseText;
    myQuizObj.rightOrWrong = 'B|B|B|B|B|B|B|B|B|B'; //imp
    myQuizObj.timePerQuestion;
}

function updateQuizProgressString(lastUpdatedString, noOfQuestions, qNo, valueToBeReplacedWith) //WORKING
{
       console.log("inputs - " + lastUpdatedString +","+ noOfQuestions +","+ qNo +","+ valueToBeReplacedWith);
	   var preTxt = "";
       var postTxt = "";
       var finalString = "";
       for(var i=1; i <noOfQuestions+1; i++)
       {
               if(i == 1)
               {
                       postTxt = lastUpdatedString;
               }
               else
               {
                       preTxt = preTxt + postTxt.substring(0, postTxt.indexOf("|")+1);
                       postTxt = postTxt.substring(postTxt.indexOf("|")+1);
               }
              // alert ("update - [Pre - "+preTxt+"] [Post - "+postTxt+"]");
               if(i==qNo && i != noOfQuestions)
               {
                       postTxt = postTxt.substring(postTxt.indexOf("|"));
                       finalString = preTxt+valueToBeReplacedWith+postTxt;
               //        alert ("update1 - [final String - "+finalString+"]");
                       return finalString;
               }
               else if(i==qNo && i == noOfQuestions)
               {
                       finalString = preTxt+valueToBeReplacedWith;
               //        alert ("update2 - [final String - "+finalString+"]");
                       return finalString;
               }
       }
       console.log("finalstring - "+finalString);
       return finalString;
}
