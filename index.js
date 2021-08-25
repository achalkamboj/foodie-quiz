var readlineSync = require("readline-sync");

console.log("Hello There!");
var score = 0;
var userName = readlineSync.question("What is your name buddy? ");
console.log("Salam " + userName + " Bhai"); 
var yesorno = readlineSync.question("Are you a foodie? ");
if(yesorno == "yes")
{
  console.log("--------------------");
  function play(question,answer)
  {
    if(score < 2)
    console.log("Level 1");
    else if(score > 1 && score < 4)
    console.log("Level 2");
    else
    console.log("Final level");

    var userAnswer = readlineSync.question(question);

    if(userAnswer === answer)
    {
      console.log("Correct Answer, that is amazing!");
      score++;
    }
    else
    {
      console.log("Wrong Answer, better luck next time!");
    }

    console.log("Your score : ", score);
    if(score == 2)
    console.log("Congratulations!, you advanced to level 2");
    if(score == 4)
    console.log("Congratulations!, you advanced to level 3");
    console.log("---------------------")
    if(score == 5)
    console.log("You definitely are a foodie!!");
  }

  var questions = [{
    question: "What is healthier, pizza aur lauki? ",
    answer: "pizza"
  },{
    question: "What is tastier, burger or karela? ",
    answer: "burger"
  },{
    question: "What should you eat daily, green veggies or momos? ",
    answer: "momos"
  },{
    question: "What causes diseases, fast food or ghar ka khana? ",
    answer: "ghar ka khana"
  },{
    question: "What is the real name of veg biryani? ",
    answer: "pulao"
  }];
  for(i=0;i<questions.length;i++)
  {
    var currentquestion = questions[i];
   
    play(currentquestion.question,currentquestion.answer);
  }
}
else
{
  console.log("Get lost then why are you even living?");
}