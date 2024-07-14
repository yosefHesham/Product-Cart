import { useState } from "react";
import CircleWithData from "../components/CircleWithData";
import { colorMap, product, sizeToPrice } from "../data";
import FeatureIcon from "../components/FeatureIcon";
import ColorSelector from "../components/ColorSelector";
import SizeSelector from "../components/SizeSelector";
import QuantityButton from "../components/QuantityButton";
import MainButton from "../components/MainButton";
import ProductSlider from "../components/ProductSlider";
import InfoTabs from "../components/InfoTabs";
import DeliverySection from "../components/DeliverySection";
import ProductsGallery from "../components/ProductsGallery";
import { useCart } from "../contexts/useCart";
import MiniCartModal from "../components/MiniCartModal";

const ProductPage = () => {
  const [productState, setProductState] = useState({
    selectedProduct: product,
    selectedColor: product.colors[0],
    selectedSize: product.sizes[0],
    brand: product.brand,
    quantity: 1,
  });

  const [showGallery, setShowGallery] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);

  const { addToCart, itemsCounter } = useCart();
  const productImage = `/assets/images/${productState.selectedColor}-shirt.svg`;

  const handleColorChange = (color: string) => {
    setProductState({ ...productState, selectedColor: color });
  };

  const handleSizeChange = (size: string) => {
    setProductState({ ...productState, selectedSize: size });
  };

  const handleQuantityChange = (newQuantity: number) => {
    setProductState({ ...productState, quantity: newQuantity });
  };

  const handleAddToCart = () => {
    if (itemsCounter >= 15) return;
    const newItem = {
      color: productState.selectedColor,
      brand: productState.brand,
      size: productState.selectedSize,
      title: productState.selectedProduct.brand,
      price: product.price + sizeToPrice[productState.selectedSize],
      quantity: productState.quantity,
    };
    addToCart(newItem);
    handleQuantityChange(1);
  };

  return (
    <>
      <header className="border-b w-full py-5 box-border px-5 sm:px-7 md:px-20 lg:px-20 border-divider flex justify-between items-center">
        <h2 className="font-inter text-primary font-extrabold italic text-[32px]">
          Company
        </h2>
        <CircleWithData
          onClick={() => setShowMiniCart(true)}
          classes="h-[50px] w-[50px]  bg-cartBg relative cursor-pointer"
        >
          <img
            src="/assets/images/brown-cart.png"
            className="w-[17px] h-[17px]"
            alt="cart-icon"
          />
          <CircleWithData classes="w-5 h-5  text-white absolute top-[-2px] bg-primary text-center font-inter text-xs flex justify-center items-center right-[-5px]">
            <p>{itemsCounter}</p>
          </CircleWithData>
        </CircleWithData>
      </header>

      <main className="pt-5 px-2 sm:px-10 md:px-5 relative">
        <section className="flex flex-col  lg:flex-row xl:w-[80%] 2xl:w-[60%] md:w-[90%] sm:w-full mx-auto gap-x-20 justify-start">
          <section className="flex-1">
            <img
              src={productImage}
              alt="shirt"
              onClick={() => {
                setShowGallery(true);
              }}
              className="w-72 sm:w-3/4 md:w-[45%] lg:w-[85%] border mx-auto border-iconBg rounded-[16px] cursor-pointer"
            />
            <div className="mt-8">
              <ProductSlider
                colors={product.colors}
                onChange={handleColorChange}
                selectedColor={productState.selectedColor}
              />
            </div>
          </section>

          <section>
            <div className="flex flex-1 justify-between border-b pb-4 border-divider">
              <div className="font-inter">
                <p className="font-semibold  text-lg sm:text-[28px] mb-2">
                  {productState.selectedProduct.name}
                </p>
                <p className="text-productSubTitle text-[16px]">
                  {productState.selectedProduct.brand}
                </p>
              </div>
              <div>
                <div className="flex gap-3">
                  <FeatureIcon
                    classes="py-2 px-3"
                    iconName="heart.svg"
                    bgColor="bg-iconBgSecondary"
                  >
                    <p className="text-customLightRed text-[16px] font-semibold font-inter">
                      109
                    </p>
                  </FeatureIcon>
                  <FeatureIcon iconName="bookmark.svg" classes="p-2 w-10" />
                  <FeatureIcon iconName="share.svg" classes="p-2 w-10" />
                </div>
                <div className="flex  gap-4  justify-end mt-4 place-self-end sm:hidden items-center">
                  <p className="text-primary font-bold  text-sm sm:text-[34px]">
                    ${product.price + sizeToPrice[productState.selectedSize]}
                  </p>
                  <p className="text-black opacity-50 text-sm  sm:text-xl line-through">
                    $
                    {product.price + sizeToPrice[productState.selectedSize] + 9}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b  hidden sm:flex items-center gap-5 py-4 border-divider font-inter">
              <p className="text-primary font-bold text-lg sm:text-[34px]">
                ${product.price + sizeToPrice[productState.selectedSize]}
              </p>
              <p className="text-black opacity-50 text-xl line-through">
                ${product.price + sizeToPrice[productState.selectedSize] + 9}{" "}
              </p>
            </div>

            <div className="border-b py-4 border-divider font-inter">
              <p className="font-medium text-productSubTitle text-sm sm:text-[16px] mb-1">
                Choose a color
              </p>
              <ColorSelector
                colors={product.colors}
                selectedColor={productState.selectedColor}
                onChange={handleColorChange}
              />
            </div>

            <div className="border-b py-4 border-divider font-inter">
              <p className="font-medium text-productSubTitle text-sm sm:text-[16px] mb-1">
                Choose a size
              </p>
              <SizeSelector
                sizes={product.sizes}
                onChange={handleSizeChange}
                selectedSize={productState.selectedSize}
              />
            </div>

            <div className="  font-inter border-b py-4  justify-between lg:justify-center border-divider flex gap-2 items-center">
              <QuantityButton
                quantity={productState.quantity}
                onChange={handleQuantityChange}
              />
              <MainButton
                color={colorMap[productState.selectedColor].bg}
                title="Add to cart"
                iconName="white-cart"
                onClick={handleAddToCart}
              />
            </div>
            <div className="py-4 lg:flex w-full  mx-auto font-inter hidden gap-2 items-center">
              <DeliverySection />
            </div>
          </section>
        </section>

        <div className="py-4 lg:hidden w-full sm:w-[90%]  mx-auto font-inter flex gap-2 items-center">
          <DeliverySection />
        </div>

        <section className="w-full">
          <InfoTabs />
        </section>

        {showMiniCart && (
          <MiniCartModal closeModal={() => setShowMiniCart(false)} />
        )}

        {showGallery && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-65 top-0 left-0 z-10">
            <div className="w-[80%] absolute mx-auto bg-white">
              <button
                className="relative top-5 mt-5 left-[95%] p-2"
                onClick={() => setShowGallery(false)}
              >
                <img
                  src="/assets/images/blue-x.png"
                  className="w-5 h-5 cursor-pointer"
                  alt="close"
                />
              </button>
              <ProductsGallery
                initialIndex={productState.selectedProduct.colors.indexOf(
                  productState.selectedColor
                )}
                onSelect={(index) => {
                  setProductState({
                    ...productState,
                    selectedColor: productState.selectedProduct.colors[index],
                  });
                  setShowGallery(false);
                }}
                images={productState.selectedProduct.colors.map(
                  (col) => `/assets/images/${col}-shirt.svg`
                )}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ProductPage;
