let inner = document.getElementById('inner');
let outer = document.getElementById('outer');

document.addEventListener('click', function(e) {
    console.log(e.target);
    if (document === e.target) {
        console.log('Document is the event target');
    }
    if (document === e.currentTarget) {
        console.log('Document is currentTarget');
    }
    alert('Document clicked (false)');
});

outer.addEventListener('click', function(e) {
    console.log('Event target is ', e.target);
    if (outer === e.target) {
        console.log('outer is the event target');
    }
    if (outer === e.currentTarget) {
        console.log('outer is currentTarget');
    }
    alert('Outer clicked');
}, true);

inner.addEventListener('click', function(e) {
    if (inner === e.target) {
        console.log('inner is the event target');
    }
    if (inner === e.currentTarget) {
        console.log('inner is currentTarget');
    }
    alert('Inner clicked');
}, false);

// we can attach 9 event handlers (one for each table cell) ...
// let tableCells = document.getElementsByTagName('td');
// for (let i = 0; i < tableCells.length; i += 1) {
//     let cell = tableCells[i];
//     cell.addEventListener('click', function(e) {
//         console.log(`You clicked on cell ${e.target.id}.`);
//         this.style.backgroundColor = 'yellow';
//     });
// }

// or we can use event delegation and attach a single event handler to the table element
let table = document.getElementById('nums');
table.addEventListener('click', function(e) {
    e.target.style.backgroundColor = 'yellow';
    console.log(`You clicked on cell ${e.target.id}.`);
});
