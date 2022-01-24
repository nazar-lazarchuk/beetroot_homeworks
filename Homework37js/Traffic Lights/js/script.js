const circles = document.querySelectorAll(".circle");
const btn = document.getElementById('chengeColor')
let activeLight = 0;

btn.addEventListener("click", changeLinght);




function changeLinght(){
  circles[activeLight].className = 'circle';
  activeLight++;

  if(activeLight > 2){
    activeLight = 0;
  }
  
  const currentLight = circles[activeLight];
  currentLight.classList.add(currentLight.getAttribute("color"))

}