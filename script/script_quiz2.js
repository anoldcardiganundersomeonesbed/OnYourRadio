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
    
    let que_tag =  '<span>"'+questions[index].question +'"</span>' + '<div class="songname"><span> - '+ questions[index].numb+'</span></div>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>' +
     '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
     + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function optionSelected(answer){
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){

    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 25){ 
        
        let scoreTag = '<span> ¡Felicidades! Has acertado <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span> Sin duda conoces tus clásicos a la perfección, ya sea porque has crecido por ello o porque tienen un lugar especial en tu corazón. Sea como sea, eres la estrella de los karaokes ¡Felicidades!';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 18){ 
        let scoreTag = '<span> Has acertado <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span> Dominas una cantidad decentes de clásicos musicales, aunque puede ser que de vez en cuando se te olvida alguna que otra palabra de la letra, pero con un poco de nananá por aquí y por allá puedes dar el pego en cualquier fiesta. ¡Muy bien!';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 10){ 
        let scoreTag = '<span> Bueno, parece que has acertado <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span> Mira el lado positivo, podría ser peor. No dominas especialmente bien los viejos clásicos de la música pero has conseguido un par de puntos sea bien de que te suena alguna que otra canción o de pura chiripa. Sea como fuere, te has ganado el cincazo justo para aprobar.';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>¡Lastima! Solo has acertado <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>Vaya, parece ser que eres un caso perdido en cuanto a clásicos de la música respecta, tu resultado es desastroso ya sea porque no te gusta la música que tenga más de 20 años o simplemente no te gusta la música en general.';
        scoreText.innerHTML = scoreTag;
    }
}

function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ questions.length +'</p> preguntas.</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}