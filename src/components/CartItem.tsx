import { CartModel } from "../contexts/CartContext";
import { colorMap } from "../data";

interface Props {
  cart: CartModel;
}

const CartItem = ({ cart }: Props) => {
  <div className="border relative flex border-cartItemBorder rounded-[16px] p-1">
    <img src={`assets/image/${cart.color}-shirt.svg`} alt={cart.title}></img>

    <div className="font-inter">
      <p className="font-semibold text-[16px] text-checkout">{cart.title}</p>
      <div className="flex gap-2">
        <p>{cart.size}</p>
        <div
          className={`bg-clip-content ${colorMap[cart.color].bg} rounded-full h-4 w-4`}
        ></div>
      </div>
      <div className="flex justify-between">
        <p>{cart.price}</p>

        <div>
          <p>{cart.quantity}</p>
          <input type="number" value={cart.quantity} />
        </div>
      </div>
    </div>
    <div className="absolute top-1 right-3 bg-customRed h-6 w-6 rounded-full flex items-center justify-center">
      <img src="assets/images/white-x.svg" />
    </div>
  </div>;
};

export default CartItem;
