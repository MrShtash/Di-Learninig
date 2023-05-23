// 1
// const inventory = [
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];

// function getCarHonda(carInventory) {
//     let carHonda = carInventory.find((item) => {
//         return item.car_make == 'Honda';
//     })
//         // console.log(carHonda);
//     return `This is a ${carHonda.car_make} ${carHonda.car_model} from ${carHonda.car_year}`;
// }
// console.log(getCarHonda(inventory));

// 2
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function sortCarInventoryByYear(carInventory) {
    let carSort = carInventory.sort((a, b) => {
        if (a.car_year > b.car_year) return 1;
        if (a.car_year < b.car_year) return -1;
        return 0;
    })
    return carSort
}
console.log(sortCarInventoryByYear(inventory));