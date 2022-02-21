const tableBody = document.querySelector('#tableBody');
const tableRows = tableBody.querySelectorAll('tr');
const columns = document.querySelectorAll('th');
const arrayColumns = [...columns];


for (let column of arrayColumns) {
    column.addEventListener('click', function () {
        let index = arrayColumns.indexOf(this);
        let sorted = [...tableRows].sort(function (a, b) {
            if(a.children[index].innerHTML >= b.children[index].innerHTML){
                return 1;
            }else{
                return -1;
            }
        })
        for (let tr of sorted) {
            tableBody.appendChild(tr);
        }
    });
}

