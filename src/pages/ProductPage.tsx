import { useState } from "react";
import CircleWithData from "../components/CircleWithData";
import { products } from "../data";
import FeatureIcon from "../components/FeatureIcon";

const ProductPage = () => {
  const [selectedProudct] = useState(products[0]);
  const productImage = `../../public/assets/images/${selectedProudct.color}-shirt.svg`;
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

          <CircleWithData classes="w-5 h-5  text-white absolute top-[-2px] bg-primary text-center font-inter text-xs flex justify-center items-center right-[-5px]">
            <p>3</p>
          </CircleWithData>
        </CircleWithData>
      </header>

      <main className="mt-5 px-20">
        <section className="flex w-full justify-start">
          <div className="flex-1">
            <img
              src={productImage}
              alt="shirt"
              className="w-10/12 h-[500px] border border-iconBg rounded-[16px]"
            ></img>
          </div>

          <div className="flex  flex-1 justify-between ">
            <div>
              <p> {selectedProudct.name}</p>
              <p>{selectedProudct.brand}</p>
            </div>
            <div className="flex gap-3">
              <FeatureIcon
                classes="py-2 px-3"
                iconName="heart.svg"
                bgColor="bg-iconBgSecondary"
              >
                <p className="text-customLightRed font-semibold font-inter">
                  109
                </p>
              </FeatureIcon>
              <FeatureIcon iconName="bookmark.svg" classes="p-2" />
              <FeatureIcon iconName="share.svg" classes="p-2" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductPage;
