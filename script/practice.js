const feedbackEl = document.querySelectorAll(".feedback");
const btnEl = document.getElementById("btn");

let selectedFb = "";
const containerEl = document.getElementById("container");

feedbackEl.forEach((fb) => {
  fb.addEventListener("click", (event)=>{
    removeActive();
    selectedFb = event.currentTarget.querySelector('small').innerText; 
    console.log(selectedFb);
    event.currentTarget.classList.add("active");
  })
})

btnEl.addEventListener("click", ()=>{
  if(selectedFb !== ""){
    containerEl.innerHTML = `
    <strong>Thank You!</strong><br><br>
    <strong>Feedback: ${selectedFb}</strong>
    <p style="margin:28px">We'll use your feedback to improve our customer support.</p>
    `
  }
})

function removeActive(){
  feedbackEl.forEach((feedback)=>{
    feedback.classList.remove("active");
  })
}



