// at first glance i thought of creating list of products, but after giving attention, its only one product
// that product has list of colors and sizes
// my imagination is that this can be product details page.
// in a complete website the flow will be (ProductsPage that renders list of products) => click on a product to go to product details
export const colors = ["blue", "black", "orange", "red", "white", "purple"];

export const product = {
  name: "Polo Shirt",
  brand: "Teixeira Design Studio",
  colors: ["blue", "black", "orange", "red", "white", "purple"],
  sizes: ["Small", "Medium", "Large", "Extra Large", "XXL"],
  price: 71.56,
};

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
