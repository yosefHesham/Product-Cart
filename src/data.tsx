// (assuming that we have variety of products), i will create object that has name, brand and color and price
// this might lead for redundancy (repeating name, brand & price for each shirt) but its intended :)
// if its just about one product, i would just identify each shirt with a color, with constant name and decription and price.
export const colors = ["blue", "black", "orange", "red", "white", "purple"];

export const products = [
  {
    name: "Polo Shirt",
    brand: "Teixeira Design Studio",
    color: "black",
    price: 71.56,
  },
  {
    name: "Polo Shirt",
    brand: "Teixeira Design Studio",
    color: "blue",
    price: 71.56,
  },
  {
    name: "Polo Shirt",
    brand: "Teixeira Design Studio",
    color: "orange",
    price: 71.56,
  },
  {
    name: "Polo Shirt",
    brand: "Teixeira Design Studio",
    color: "red",
    price: 71.56,
  },
  {
    name: "Polo Shirt",
    brand: "Teixeira Design Studio",
    color: "white",
    price: 71.56,
  },
  {
    name: "Polo Shirt",
    brand: "Teixeira Design Studio",
    color: "purple",
    price: 71.56,
  },
];

export const colorMap = {
  blue: "bg-shirts-blue",
  orange: "bg-shirts-orange",
  red: "bg-shirts-red",
  purple: "bg-shirts-purple",
  black: "bg-black",
  white: "bg-white",
};
