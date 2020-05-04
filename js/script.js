/* Function that get an hexadecimal color value. Return the color code */ 
function randomColor (){
    let numbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += numbers[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* Function for generate a div and a span to get the students icons. 
The parameter is the number of people we want. I've put a parameter to make the code interactive oh oh oh  */

function studentList (number){
    let peopleList = document.getElementById("people");

    for(let i = 0; i <= number; i++){

        let people = document.createElement("div"); 
        people.classList.add("people");
        people.setAttribute("id", "people"+ i);
        people.style.backgroundColor = randomColor();
        people.style.cursor = "pointer";
        peopleList.append(people);

        let spanIcon = document.createElement("span");
        spanIcon.classList.add("material-icons");
        spanIcon.innerHTML = "face";
        people.append(spanIcon);

        //To desactivate the contextmenu (right click) in all the div 
        people.addEventListener('contextmenu', e => {
            e.preventDefault();
    });
}
}

/* Function to create a form to select the specialty */

function getForm(){

    let choiceForm = document.createElement("form");
    let selectForm = document.createElement("select");
    let submit = document.createElement("input");
    choiceForm.append(selectForm);
    submit.value = "Ok";
    submit.style.cursor = "pointer";
    submit.setAttribute("type", "submit");

    let specialty = ["Sélectionner", "Developpement", "Design", "Marketing"];

    for(let i =0; i < specialty.length; i++){
        let option = document.createElement("option");
        option.innerHTML = specialty[i];
        option.value = specialty[i];
        selectForm.append(option);
    }

    choiceForm.append(submit);

    return choiceForm;
}

//right click
people.addEventListener('mousedown',function(e){
    if(e.button === 2){
        this.append(getForm());

    }
});



studentList(30);

// Faire une fonction pour le click droit, qui va 1: générer le form et 2 : récupérer l'ID;


let listPeople = document.getElementsByClassName("people");

for( var i = 0; i < listPeople.length; i++){
    listPeople[i].addEventListener("click", function(event){
    console.log(this.id);
});
}




// classPeople.addEventListener("click", function(){
//     console.log(this.id);
// });


