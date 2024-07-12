import CircleWithData from "../components/CircleWithData";

const ProductPage = () => {
  return (
    <>
      <header className="border-b w-full py-5 box-border px-20 border-divider flex justify-between items-center">
        <h2 className="font-inter text-primary font-extrabold italic text-3xl">
          Company
        </h2>

        <CircleWithData classes="h-[50px] w-[50px]  bg-cartBg relative">
          <img
            src="../../public/assets/images/brown-cart.png"
            className="w-[17px] h-[17px]"
            alt="cart-icon"
          ></img>

          <CircleWithData classes="w-5 h-5 rounded-full text-white absolute top-[-2px] bg-primary text-center font-inter text-xs flex justify-center items-center right-[-5px]">
            <p>3</p>
          </CircleWithData>
        </CircleWithData>
      </header>
    </>
  );
};

export default ProductPage;
