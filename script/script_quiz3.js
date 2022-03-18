const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");


start_btn.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
}


let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    queCounter(que_numb);  
    next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb);
        next_btn.classList.remove("show");
    }else{
        showResult();
    }
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    
    let que_tag = '<span>'+ questions[index].num + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[4] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[5] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[6] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function optionSelected(answer){
    let userAns = answer.textContent;
    
    answer.classList.add("selected")
    
    let op0 = questions[que_count].op0; 
    let op2 = questions[que_count].op2; 
    let op5 = questions[que_count].op5; 
    let op7 = questions[que_count].op7; 
    let op10 = questions[que_count].op10; 
    let op15 = questions[que_count].op15; 
    let op20 = questions[que_count].op20; 
    const allOptions = option_list.children.length; 
    
    if(userAns == op0){ 
        userScore += 0; 
    }else if (userAns == op2){
        userScore+= 2;
    }
    else if (userAns == op5){
        userScore+= 5;
    }
    else if (userAns == op7){
        userScore+= 7;
    }
    else if (userAns == op10){
        userScore+= 10;
    }
    else if (userAns == op15){
        userScore+= 15;
    }
    else if (userAns == op20){
        userScore+= 20;
    }

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){

    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreImg = result_box.querySelector(".result_img")
    const scoreText = result_box.querySelector(".score_text");
    if (userScore <6 ){ 
        let scoreTag = "I knew you'd haunt all of my what-ifs";
        scoreImg["src"] = "../img/quizz3/1.jpg";
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore < 21){ 
        let scoreTag = "Those Windermere peaks look like a perfect place to cry";
        scoreImg["src"] = "../img/quizz3/1.jpg";
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore < 41){  
        let scoreTag = "You kept me like a secret but i kept you like an oath";
        scoreImg["src"] = "../img/quizz3/2.jpg";
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore < 71){  
        let scoreTag = "Sun sinks down, no curfew";
        scoreImg["src"] = "../img/quizz3/3.jpg";
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore < 101){  
        let scoreTag = "It always leads to you in my hometown";
        scoreImg["src"] = "../img/quizz3/5.jpg";
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore < 131){  
        let scoreTag = "Deep blue, but you painted me golden";
        scoreImg["src"] = "../img/quizz3/6.jpg";
        scoreText.innerHTML = scoreTag;
    }
    else {  
        let scoreTag =  "This night is sparkling, don't you let it go";
        scoreImg["src"] = "../img/quizz3/7.jpg";
        scoreText.innerHTML = scoreTag;
    }
}

function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ questions.length +'</p> preguntas.</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}