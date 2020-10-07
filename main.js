class Properties{
  constructor(){
    this.category = "",
    this.description = "",
    this.minutes = 0,
    this.seconds = 0,
    this.completed = true,
    this.id = 0
  }
  countdown(){
    return 1
  }
  markComplete(){

  }
  saveToStorage(){

  }
}

studyCategory = document.querySelector('#blank-study-button');
studyCategory.addEventListener('click', highlightBorder);
meditateCategory = document.querySelector('#blank-meditate-button');
meditateCategory.addEventListener('click', highlightBorder);
exerciseCategory = document.querySelector('#blank-exercise-button');
exerciseCategory.addEventListener('click', highlightBorder);
function highlightBorder(event){
  if(this.innerText == "Study"){
      studyCategory = document.getElementById('blank-study-button');
      studyCategory.style.border = '2px solid #B3FD78';
  } else if(this.innerText == "Meditate"){
     meditateCategory = document.getElementById('blank-meditate-button');
     meditateCategory.style.border = '2px solid #C278FD';
  } else if(this.innerText == "Exercise"){
    exerciseCategory = document.getElementById('blank-exercise-button');
    exerciseCategory.style.border = '2px solid #FD8078'
  }
}
