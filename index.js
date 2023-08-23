let homeScore = document.getElementById("home-score-el")
let guestScore = document.getElementById("guest-score-el")

let homePoint = 0
let guestPoint = 0

let winner = document.getElementById("winner")

/*HOME*/
function homeOnePoint(){
    homePoint += 1;
    homeScore.textContent = homePoint;
    lead()
    winningTeam()
}
function homeTwoPoint(){
    homePoint += 2;
    homeScore.textContent = homePoint;
    lead()
    winningTeam()
}

function homeThreePoint(){
    homePoint += 3;
    homeScore.textContent = homePoint;
    lead()
    winningTeam()
}

/*GUEST*/
function guestOnePoint(){
    guestPoint += 1;
    guestScore.textContent = guestPoint;
    lead()
    winningTeam()
}
function guestTwoPoint(){
    guestPoint += 2;
    guestScore.textContent = guestPoint;  
    lead()
    winningTeam()
}
function guestThreePoint(){
    guestPoint += 3;
    guestScore.textContent = guestPoint;
    lead()
    winningTeam()
}

/**LEADER **/
let leadHome = document.getElementById("home-container")
let leadGuest = document.getElementById("guest-container")

let leadColor = "ff9f1c"
let bgColor = "black"

let homeColor = document.getElementById("home-el")
let guestColor = document.getElementById("guest-el")

function lead(){
    if(homePoint > guestPoint){
        homeColor.style.color = leadColor;
        guestColor.style.color = bgColor;
    } else if (guestPoint > homePoint){
        guestColor.style.color = leadColor;
        homeColor.style.color = bgColor;
    }else if(homePoint === guestPoint){
        guestColor.style.color = bgColor;
        homeColor.style.color = bgColor; 
    }   
}

function newGame(){
    homePoint = 0;
    homeScore.textContent = homePoint;
    
    guestPoint = 0;
    guestScore.textContent = guestPoint;

    guestColor.style.color = bgColor;
    homeColor.style.color = bgColor;
    
    winner.textContent = " ";
}


/**WINNER**/

function winningTeam(){
    if(homePoint >= 15){
        winner.textContent = "HOME WINS!"
    }else if (guestPoint >= 15){
        winner.textContent = "GUEST WINS!"
}
}





