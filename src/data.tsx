// (assuming that we have variety of products), i will create object that has name, brand and color and price
// this might lead for redundancy (repeating name, brand & price for each shirt) but its intended :)
// if its just about one product, i would just identify each shirt with a color, with constant name and decription and price.
export const colors = ["blue", "black", "orange", "red", "white", "purple"];

export const product = {
  name: "Polo Shirt",
  brand: "Teixeira Design Studio",
  colors: ["blue", "black", "orange", "red", "white", "purple"],
  sizes: ["Small", "Medium", "Large", "Extra Large", "XXL"],
  price: 71.56,
};

// export const products = [
//   {
//     name: "Polo Shirt",
//     brand: "Teixeira Design Studio",
//     color: "black",
//     price: 71.56,
//   },
//   {
//     name: "Polo Shirt",
//     brand: "Teixeira Design Studio",
//     color: "blue",
//     price: 71.56,
//   },
//   {
//     name: "Polo Shirt",
//     brand: "Teixeira Design Studio",
//     color: "orange",
//     price: 71.56,
//   },
//   {
//     name: "Polo Shirt",
//     brand: "Teixeira Design Studio",
//     color: "red",
//     price: 71.56,
//   },
//   {
//     name: "Polo Shirt",
//     brand: "Teixeira Design Studio",
//     color: "white",
//     price: 71.56,
//   },
//   {
//     name: "Polo Shirt",
//     brand: "Teixeira Design Studio",
//     color: "purple",
//     price: 71.56,
//   },
// ];

interface SizeMap {
  [key: string]: number;
}

export const sizeToPrice: SizeMap = {
  Small: 0,
  Medium: 10,
  Large: 15,
  "Extra Large": 20,
  XXL: 25,
};
interface ColorMap {
  [key: string]: { [key: string]: string };
}

export const colorMap: ColorMap = {
  blue: { bg: "bg-shirts-blue", border: "border-shirts-blue" },
  orange: { bg: "bg-shirts-orange", border: "border-shirts-orange" },
  red: { bg: "bg-shirts-red", border: "border-shirts-red" },
  purple: { bg: "bg-shirts-purple", border: "border-shirts-purple" },
  black: { bg: "bg-black", border: "border-black" },
  white: {
    bg: "bg-gradient-to-b from-white to-bgGradient",
    border: "border-gradient-to-b from-white to-bgGradient",
  },
};
