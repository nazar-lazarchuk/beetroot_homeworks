const audience = [
  { name: "audience3", places: 12, faculty: "math", free: true },
  { name: "audience1", places: 20, faculty: "english", free: false },
  { name: "audience14", places: 14, faculty: "chemistry", free: true },
  { name: "audience21", places: 12, faculty: "english", free: true },
  { name: "audience5", places: 10, faculty: "biology", free: false },
];

const group = { name: "first_course", amount: 11, faculty: "english" };

//Список всіх аудиторій
function showAllAudinces(array) {
  let result = [];
  for (classroom of array) {
    if (classroom.free === true) {
      result.push(
        `The ${classroom.name} from the faculty ${classroom.faculty} and has ${classroom.places} places is free`
      );
    } else {
      result.push(
        `The ${classroom.name} from the faculty ${classroom.faculty} and has ${classroom.places} places is not free`
      );
    }
  }
  return result;
}
console.log(showAllAudinces(audience));

//Список аудиторій для зазначеного факультету
function showAudinceForFaculty(faculty, array) {
  let arrayGroups = [];
  for (classroom of array) {
    if (classroom.faculty === faculty) {
      arrayGroups.push(classroom);
    }
  }
  if (arrayGroups.length === 0) {
    arrayGroups.push(`We do not have such faculty as ${faculty}`);
  }
  return arrayGroups;
}
console.log(showAudinceForFaculty("english", audience));

//Аудиторії які підходять для переданої групи
function findTheTrueAudience(group, audience) {
  const faculty = group.faculty;
  const audiences = showAudinceForFaculty(faculty, audience);
  for (audience of audiences) {
    if (audience.places >= group.amount && audience.free === true) {
      return audience;
    }
  }
  return "We do not have such audience";
}
console.log(findTheTrueAudience(group, audience));

//Видалення із масива з мутацією
const nameDeleteAudience = "audience3";
function deleteTheAudience(array, audience) {
  const indexOfAudience = array.findIndex(
    (indexOfAudience) => indexOfAudience.name === audience
  );
  if (indexOfAudience === -1) {
    return "We don't have such audience";
  }
  array.splice(indexOfAudience, 1);
  return array;
}
console.log(deleteTheAudience(audience, nameDeleteAudience));
