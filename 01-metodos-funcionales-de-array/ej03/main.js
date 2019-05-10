'use strict';

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 },
  ];

const welcomeUsers = users.map(user => user.name + ', bienvenida');

const welcomeNames = users.map(user => {
    if (user.isPremium){
    return 'Bienvenida, ' + user.name + ', gracias por confiar en nosotros';
    }
    else {
    return 'Bienvenida, ' + user.name;
    }
})

const premiumUsers = users.filter (user => user.isPremium); 

const evenPins = users.filter(user => user.pin%2 === 0);

console.log(welcomeNames);
console.log(welcomeUsers);
console.log(premiumUsers);
console.log(evenPins);

