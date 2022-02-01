




const Hogwarts = [
  {
    name: "1",
    sits: 7,
    faculty: "Gryffindor",
    isFree: true,
    groops: [
        "Magic-01", 
        "Magic-02"
      ],
  },
  {
    name: "2",
    sits: 10,
    faculty: "Hufflepuff",
    isFree: true,
    groops: [
        "Magic-01", 
        "Magic-02",
        "Magic-03"
      ],
  },
  {
    name: "3",
    sits: 100,
    faculty: "Ravenclaw ",
    isFree: true,
    groops: [
      "Magic-01",
      "Magic-02",
      "Magic-03",
      "Magic-04",
    ],
  },
  {
    name: "4",
    sits: 45,
    faculty: "Slytherin",
    isFree: true,
    groops: [
      "Magic-01", 
      "Magic-02", 
      "Magic-03"
      ],
  },
];


const audList = (arr) => {
  arr.forEach((item) =>
    console.log(`Аудиторія: ${item.name}, Місць: ${item.sits}, Факультет: ${item.faculty}, Чи вільна: ${item.isFree}, Групи, які можуть займатися: ${item.groops}`)
  );
};

audList(Hogwarts);

const audFaculty = (arr) => {
  const result = arr.filter((Hogwarts) => Hogwarts.faculty === "Slytherin");
  return result;
};
console.log(audFaculty(Hogwarts));

