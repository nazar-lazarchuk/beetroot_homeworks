//Task 1 Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.


let depos = prompt('Hello, How money do you want to put on our Bank?' , 'Type sume here, $');

alert('Are you sure do you want to put the bank our' + ' ' + depos + ' ' + 'dollars?')

const PERSENTYEAR = 0.05; //річний відсоток

const PERSENTMONTH = PERSENTYEAR / 12; // відсоток за місяць

alert('Your persent per month' + ' ' + PERSENTMONTH.toFixed(4)); //показуємо відсоток за місяць

let depos_OneMonth = depos * +PERSENTMONTH + +depos; //Рахуємо за один місяць

alert('You earned per month' + ' ' + depos_OneMonth.toFixed(2) + 'dollars'); //виводимо суму після 1го місяця

depos_TwoMonth = +depos_OneMonth * +PERSENTMONTH + +depos_OneMonth;

alert('You earned per two month' + ' ' + depos_TwoMonth.toFixed(2) + 'dollars'); //виводимо суму складного відсотка за 2 місяці



//Task 2 Що повернуть вираження:

let A1 = 2 && 0 && 3

console.log(A1) //0

let A2 = 2 || 0 || 3

console.log(A2) //2

let A3 = 2 && 0 || 3

console.log(A3) //3


