import MainButton from "./MainButton";
import { useCart } from "../contexts/useCart";
import CartItem from "./CartItem";

const MiniCartModal = ({ closeModal }: { closeModal: () => void }) => {
  const { cart, checkout, itemsCounter } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="absolute  flex justify-center items-center sm:block w-full inset-0 top-0 left-0 bg-black bg-opacity-75 font-inter">
      <div className="bg-white absolute w-72 sm:w-96 p-4 sm:p-6 top-8 mx-auto sm:right-10 z-30 rounded-3xl shadow-lg">
        <div
          onClick={() => closeModal()}
          className=" cursor-pointer w-6 h-6 border border-checkout rounded-full bg-white flex justify-center items-center"
        >
          <img src="assets/images/blue-x.svg" alt="close-modal" />
        </div>
        <div>
          <h2 className="font-semibold text-checkout text-[28px] mb-4 text-center">
            My Cart
          </h2>

          <div className="space-y-2">
            {!cart.length ? (
              <p className="text-center fontt-semibold text-customRed">
                Your cart is empty, find great products and add them now !
              </p>
            ) : (
              cart.map((item) => <CartItem key={item.color} cart={item} />)
            )}
          </div>

          <hr className="my-10" />

          <div className="flex justify-between ">
            <p className="font-bold text-sm text-featureSubtitle">Total</p>
            <p className="font-medium text-sm text-featureSubtitle ">
              ${total.toFixed(2)}
            </p>
          </div>

          <MainButton
            color="bg-checkout mx-auto mt-10 w-56 sm:w-full"
            disabled={!itemsCounter}
            onClick={() => {
              checkout();
            }}
            iconName="white-cart"
            title="Checkout"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniCartModal;
