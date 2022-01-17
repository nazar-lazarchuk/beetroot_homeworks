const academyAud = [
  { name: 'MathAud', seats: 10, faculty:'Gryffindor', free: 'Yes',  listGroup: ['groupOne', 'groupTwo', 'groupThree']}, 
  { name: 'SingAud', seats: 11, faculty:'Slytherin', free: 'No',  listGroup: ['groupOne', 'groupThree']}, 
  { name: 'AlfAud', seats: 12, faculty:'Kogtevran', free: 'Yes',  listGroup: ['groupTwo', 'groupThree']}, 
  { name: 'MaghAud', seats: 13, faculty:'Puffendui', free: 'No',  listGroup: ['groupThree']}, 
];


const out = document.getElementById('out');
document.querySelector('button').onclick = () =>{
   const showAcademy = [];
   academyAud.forEach((auditory) => {
      const {name, seats, faculty, free, listGroup} = auditory;
      showAcademy.push(`
      Name : ${name} 
      Seats : ${seats} 
      Faculty:${faculty} 
      Free: ${free} 
      ListGroup:${listGroup }  
      `)
   })
   out.innerText = (showAcademy.join(""));
}



const outSelect = document.getElementById('outSelect');

document.getElementById('btnShowSelect').onclick = () =>{
  const select = document.getElementById('select').value;
  const faculty = academyAud.find(faculty => faculty.faculty === select)
  const showFaculty = [];
  const abjArr = Object.entries(faculty);
  abjArr.forEach(([key,value]) => {
    showFaculty.push(`
     ${key} : ${value} 
    `)
  });
 
  outSelect.innerText = (showFaculty.join(""));
  console.log(showFaculty);
}