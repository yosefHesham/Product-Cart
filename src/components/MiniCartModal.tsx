import MainButton from "./MainButton";

const MiniCartModal = () => {
  return (
    <div className="absolute top-0 bg-black opacity-55 font-inter">
      <div className="bg-white p-4 top-5 right-7 rounded-3xl">
        <div className="w-6 h-6 border-checkout rounded-full bg-white flex justify-center items-center">
          <img src="assets/images/blue-x.svg" />
        </div>
        <div>
          <h2 className="font-bold text-checkout">My Cart</h2>

          <hr></hr>
          <div className="flex justify-between">
            <p>Total</p>
          </div>
          <MainButton
            color="bg-checkout"
            onClick={() => {}}
            iconName="white-cart"
            title="Checkout"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniCartModal;
