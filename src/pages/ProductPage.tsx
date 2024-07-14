import { useState } from "react";
import CircleWithData from "../components/CircleWithData";
import { colorMap, product } from "../data";
import FeatureIcon from "../components/FeatureIcon";
import ColorSelector from "../components/ColorSelector";
import SizeSelector from "../components/SizeSelector";
import QuantityButton from "../components/QuantityButton";
import MainButton from "../components/MainButton";
import ProductSlider from "../components/ProductSlider";
import InfoTabs from "../components/InfoTabs";

const ProductPage = () => {
  const [selectedColor, selectColor] = useState(product.colors[0]);
  const [selectedSize, selectSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const selectedProduct = product;
  const productImage = `/assets/images/${selectedColor}-shirt.svg`;
  return (
    <>
      <header className="border-b w-full py-5 box-border px-20 border-divider flex justify-between items-center">
        <h2 className="font-inter text-primary font-extrabold italic text-3xl">
          Company
        </h2>
        <CircleWithData classes="h-[50px] w-[50px]  bg-cartBg relative">
          <img
            src="/assets/images/brown-cart.png"
            className="w-[17px] h-[17px]"
            alt="cart-icon"
          ></img>

          <CircleWithData classes="w-5 h-5  text-white absolute top-[-2px] bg-primary text-center font-inter text-xs flex justify-center items-center right-[-5px]">
            <p>3</p>
          </CircleWithData>
        </CircleWithData>
      </header>

      <main className="mt-5 px-20">
        <section className="flex xl:w-[80%]  mx-auto gap-12 justify-start">
          <section className="flex-1">
            <img
              src={productImage}
              alt="shirt"
              className=" w-full border border-iconBg rounded-[16px]"
            ></img>
            <div className="w-[380px] mt-8">
              <ProductSlider
                colors={product.colors}
                onChange={(val) => selectColor(val)}
                selectedColor={selectedColor}
              />
            </div>
          </section>

          <section>
            <div className="flex flex-1 justify-between border-b pb-4 border-divider ">
              <div className="font-inter">
                <p className="font-semibold text-2xl mb-2">
                  {selectedProduct.name}
                </p>
                <p className="text-productSubTitle"> {selectedProduct.brand}</p>
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
            <div className="border-b flex items-center gap-5 py-4 border-divider font-inter">
              <p className="text-primary font-bold text-2xl">
                ${product.price}
              </p>
              <p className="text-black opacity-50 line-through">
                ${product.price + 9}{" "}
              </p>
            </div>

            <div className="border-b py-4 border-divider font-inter">
              <p className="font-medium text-productSubTitle">Choose a color</p>

              <ColorSelector
                colors={product.colors}
                selectedColor={selectedColor}
                onChange={(x) => {
                  selectColor(x);
                }}
              />
            </div>

            <div className="border-b py-4 border-divider font-inter">
              <p className="font-medium text-productSubTitle">Choose a size</p>

              <SizeSelector
                sizes={product.sizes}
                onChange={(v) => {
                  selectSize(v);
                }}
                selectedSize={selectedSize}
              />
            </div>

            <div className="border-b py-4 border-divider font-interr flex gap-2 items-center">
              <QuantityButton quantity={quantity} onChange={setQuantity} />
              <MainButton
                color={colorMap[selectedColor].bg}
                title="Add to cart"
                iconName="white-cart"
                onClick={() => {}}
              />
            </div>
          </section>
        </section>
        <section className="w-full">
          <InfoTabs />
        </section>
      </main>
    </>
  );
};

export default ProductPage;
