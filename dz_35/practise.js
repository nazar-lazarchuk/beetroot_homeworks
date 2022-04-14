function Human(firstName, lastName, birthDate = new Date()) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
}

function Company(name, director, createdDate = new Date()) {
    this.name = name;
    this.director = director;
    this.createdDate = createdDate
    this.getInfo = function(name, director, createdDate) {
        return `${this.name} corp. on the market since ${this.createdDate}; CEO ${this.director.firstName}`
    }
}

const director = new Human("Petro", "Poroshenko", new Date('19.12.1965'))
const roshen = new Company("Roshen", director, new Date('19.12.1965'))



/* функція має повернути текст:
 "Roshen copr. on the market since 1996; CEO Petro Poroshenko" */
console.log( roshen.getInfo("Roshen", director, new Date('19.12.1965'))); 