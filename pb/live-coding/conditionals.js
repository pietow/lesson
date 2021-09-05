let user;
// simple conditional
// if (user === 'Jerry') {
//     console.log('Hi, Jerry!');
// }

// if /else conditional
if (user === 'Jerry') {
    console.log('Hi, Jerry!');
} else {
    console.log('Hi, user!');
}

// nested if / else
if (user === 'Jerry') {
    console.log('Hi, Jerry!');
} else {
    if (user === 'George') {
        console.log('Hi, George!');
    } else {
        console.log('Hi, user!');
    }
}

// if ... else if in case you want to cover several possibilities
if (user === 'Jerry') {
    console.log('Hi, Jerry!');
} else if (user === 'George') {
    console.log('Hi, George!');
} else if (user === 'Kramer') {
    console.log('Hi, Kramer!');
} else if (user === 'Elaine') {
    console.log('Hi, Elaine!');
} else {
    console.log('Hello, Newman!');
}

// alternatively, you can use the switch statement
switch (user) {
    case 'Jerry':
        console.log('Hi, Jerry!');
        break;
    case 'George':
        console.log('Hi, George!');
        break;
    case 'Elaine':
        console.log('Hi, Elaine!');
        break;
    case 'Kramer':
        console.log('Hi, Kramer!');
        break;
    default:
        console.log('Hello, Newman!');
}

// ... or just this
if (user) {
    console.log(`Hi, ${user}!`);
} else {
    console.log('Who are you?');
}

