/* Function that get an hexadecimal color value. Return the color code */

function randomColor (){
    let numbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += numbers[Math.floor(Math.random() * 16)];
    }
    return color;
}


/* Function to generate a div and a span to get the students icons. 
The parameter is the number of people we want. I've put a parameter to make the code dynamic oh oh oh 
Function between parentesis : self calling function, we declare the function and we call it at the same time (TEST) */

(function studentList (number){
    let peopleList = document.getElementById("people");

    for(let i = 0; i <= number; i++){
        // Create a new div with a random background color with the function randomColor();
        let people = document.createElement("div"); 
        people.classList.add("people");
        people.setAttribute("id", "people"+ i);
        people.style.backgroundColor = randomColor();
        people.style.cursor = "pointer";
        peopleList.append(people);
        // Create a new span with an icon
        let spanIcon = document.createElement("span");
        spanIcon.classList.add("material-icons");
        spanIcon.innerHTML = "face";
        people.append(spanIcon);

        //Cancel the contextmenu (right click) in all the div 
        people.addEventListener('contextmenu', e => {
            e.preventDefault();
        });
    }
})(30);



/* Function to create a form to select the specialty */

function getForm(){
    // Creation of the form with a select
    let choiceForm = document.createElement("form");
    let selectForm = document.createElement("select");
    let submit = document.createElement("input");
    choiceForm.setAttribute("id", "submit");
    choiceForm.append(selectForm);
    submit.value = "Ok";
    submit.style.cursor = "pointer";
    
    submit.setAttribute("type", "submit");
    // Creation of the select's options
    let specialty = ["Sélectionner", "Developpement", "Design", "Marketing"];

    for(let i =0; i < specialty.length; i++){
        let option = document.createElement("option");
        option.innerHTML = specialty[i];
        option.value = specialty[i];
        selectForm.append(option);
    }

    choiceForm.append(submit);
    choiceForm.style.display = 'block';

    return choiceForm;
}


/* Function to create a new form to the right click in a div */ 
function formAtClick(){

    let listPeople = document.getElementsByClassName("people");
    const newForm = getForm();

    for( let i = 0; i < listPeople.length; i++){
        listPeople[i].addEventListener("mousedown", function(e){ // Mousedown : when a pointing device button is pressed while the pointer is inside the element.
            if (e.button === 2){ // 2 = the right click
                // Having the mouse coordinates  
                var y = e.clientY;
                var x = e.clientX;
                // using the coordinates to call the form at the same place of the click mouse
                newForm.style.top = y+ "px";
                newForm.style.left = x + "px";
                newForm.style.display = 'inline-block';
                this.append(newForm);
                
                
            }
        });
    }

    //Use of preventDefault to cancel the submit event, because we don't want to reload the page
    newForm.addEventListener('submit', function(e){
        e.preventDefault();
        // this.style.display = 'none';
        changeDiv();
    });
    
}


function changeDiv(){

    let value = document.querySelector('select').value;
    let divId = document.querySelector('form').parentNode;
    const form = document.querySelector('form');

    switch (value){
        case 'Developpement' :
            document.querySelector('#dev').append(divId);
            form.style.display = 'none';
            form.reset();
            break;

        case 'Design' : 
            document.querySelector('#design').append(divId);
            form.style.display = 'none';
            form.reset();
            break;

        case 'Marketing' : 
            document.querySelector('#mkt').append(divId);
            form.style.display = 'none';
            form.reset();
            break;

        case 'Sélectionnez' :
        default:
            alert("Merci de sélectionner une spécialité");
    }

    
}




// studentList(30);
formAtClick();




/*
* Manque à faire :
*   - Récupérer value du select
*   - Déplacer la div dans la bonne spé
*   - Trouver comment "refresh" le formulaire
*/


