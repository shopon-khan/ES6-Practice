// ... Spread operator
const ages = [12, 15, 20, 17];
const ages2 = [10, 19, 13];
const ages3 = [25, 28, 29, 30]
const allAges = ages.concat(ages2).concat([2]).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
// max 
const takaPoisa = [650, 450, 250,850];
const maximum = Math.max(...takaPoisa);
console.log(maximum);