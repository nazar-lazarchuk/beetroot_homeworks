// Big table

// massive with information

const carsList = [
    {
        model: "Bugatti Bolide Prototype",
        year: "2020",
        maxSpeedKm: 500,
        priceDollars: 13000000,
    },
    {
        model: "Bugatti Chiron Super Sport 300+ Prototype",
        year: "2019",
        maxSpeedKm: 490,
        priceDollars: 3800000,
    },
    {
        model: "Koenigsegg Jesko Absolut",
        year: "2021",
        maxSpeedKm: 472,
        priceDollars: 3690000,
    },
    {
        model: "SSC Tuatara",
        year: "2020",
        maxSpeedKm: 455,
        priceDollars: 2500000,
    },
    {
        model: "Hennessey Venom F5",
        year: "2018",
        maxSpeedKm: 450,
        priceDollars: 1600000,
    },
    {
        model: "Koenigsegg Agera One of 1 (121)",
        year: "2015",
        maxSpeedKm: 447,
        priceDollars: 5000000,
    },
    {
        model: "Koenigsegg Agera RS (1MW Upgrade)",
        year: "2017",
        maxSpeedKm: 447,
        priceDollars: 2200000,
    },
    {
        model: "Bugatti Chiron Super Sport",
        year: "2021",
        maxSpeedKm: 440,
        priceDollars: 4000000,
    },
    {
        model: "Koenigsegg One:1",
        year: "2014",
        maxSpeedKm: 437,
        priceDollars: 4650000,
    },
    {
        model: "Koenigsegg Jesko Prototype (251)",
        year: "2020",
        maxSpeedKm: 436,
        priceDollars: 2840000,
    },    
];

const carsListTitle = ["Car name", "Production year", "Max speed", "Car price",
];

// container

const mainContainer2 = document.createElement('div');
mainContainer2.id = 'main-container';
document.body.prepend(mainContainer2);
mainContainer2.style.padding = "20px";

// table

const carsTable = document.createElement('table');
carsTable.id = 'main-table';
carsTable.style.border = '1px solid black';
carsTable.style.borderCollapse = 'collapse';
mainContainer2.prepend(carsTable);

const creationOfCarList = function(list, table, title) {
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (let i = 0; i < list.length; i++) {
	    let tr = document.createElement('tr');
        tr.style.marginBottom = '10px';
        tableBody.prepend(tr);

        let carModel = document.createElement('td');
        carModel.style.padding = '10px';
        carModel.innerHTML = list[i].model;
        tr.appendChild(carModel);

        let carYear = document.createElement('td');
        carYear.style.padding = '10px';
        carYear.innerHTML = list[i].year;
        carYear.style.textAlign = 'center';
        tr.appendChild(carYear);

        let carMaxSpeed = document.createElement('td');
        carMaxSpeed.style.padding = '10px';
        carMaxSpeed.innerHTML = list[i].maxSpeedKm + ' km/h';
        tr.appendChild(carMaxSpeed);

        let carPrice = document.createElement('td');
        carPrice.style.padding = '10px';
        carPrice.innerHTML = list[i].priceDollars + ' $';
        tr.appendChild(carPrice);
    };

    let trTitle = document.createElement('tr');
        trTitle.style.marginBottom = '10px';
        table.prepend(trTitle);

    for (let i = 0; i < title.length; i++) {
        let th = document.createElement('th');
        th.innerHTML = title[i];
        th.style.padding = '10px';
        th.style.fontWeight = 'bold';
        th.style.border = '1px solid black';
        trTitle.appendChild(th);
    };
}

creationOfCarList(carsList, carsTable, carsListTitle);

document.addEventListener('DOMContentLoaded', () => {

    const tableSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for (const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for (const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

document.querySelectorAll('th').forEach(tableTH => tableTH.addEventListener('click', () => tableSort(event)));
});