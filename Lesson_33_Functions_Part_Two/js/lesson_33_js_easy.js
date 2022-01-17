// Point 1. Time

function showTime(a, b = '00', c = '00') {
    return `${a}:${b}:${c}`;
}

console.log(showTime(12));

// Point 2. Time in seconds

function calcTime(a, b = 0, c = 0) {
    return a * 3600 + b * 60 + c;
}

console.log(calcTime(12, 16, 15));

// Point 3. From seconds to hours

function fromSecTime(a) {
    let x = 0, y = 0;
    if (a > 3600) {
        x = Math.trunc(a / 3600);
        a = a - x * 3600;
    }
    if (a > 60) {
        y = Math.trunc(a / 60);
        a = a - y * 60;
    }
    if (x === 0) x = '00';
    if (y === 0) y = '00';
    if (a === 0) a = '00';
    if (x >= 1 && x < 10) x = '0' + x;
    if (y >= 1 && y < 10) y = '0' + y;
    if (a >= 1 && a < 10) a = '0' + a;
    return `${x}:${y}:${a}`;
}

console.log(fromSecTime(17701));