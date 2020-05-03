/* Function that get an hexadecimal color value. Return the color code */ 
function randomColor (){
    let numbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += numbers[Math.floor(Math.random() * 15)];
    }
    return color;
}

/* Function for generate a div and a span to get the students icons. 
The parameter is the number of people we want  */

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

}
}

studentList(30);

let listPeople = document.getElementsByClassName("people");

for( var i = 0; i < listPeople.length; i++){
    listPeople[i].addEventListener("click", function(event){
        console.log(this);
    });
}


// classPeople.addEventListener("click", function(){
//     console.log(this.id);
// });


