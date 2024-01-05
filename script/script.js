const feedbackEl = document.querySelectorAll(".feedback");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let feedback = "";


feedbackEl.forEach((singleFeedback) => {
  singleFeedback.addEventListener("click", (event)=>{
    removeActive();
    feedback = event.currentTarget.querySelector("small").innerText;
    event.currentTarget.classList.add("active");
  })

})

btnEl.addEventListener("click", ()=>{
  if(feedback !== ""){
    containerEl.innerHTML = `
    <strong>Thank You!</strong><br><br>
    <strong>Feedback: ${feedback}</strong>
    <p style="margin:20px 0"> Using your feedback we will try to improve our customer services</p>
    `
  }
})


function removeActive(){
  feedbackEl.forEach((feedback)=>{
    feedback.classList.remove("active");
  })
}
