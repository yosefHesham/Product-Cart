import { CartModel } from "../contexts/CartContext";
import { useCart } from "../contexts/useCart";
import { colorMap } from "../data";

interface Props {
  cart: CartModel;
}

const CartItem = ({ cart }: Props) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleRemoveFromCart = (color: string, size: string) => {
    removeFromCart(color, size);
  };

  const handleUpdateQuanity = (op: string) => {
    switch (op) {
      case "+":
        if (cart.quantity < 15) {
          updateQuantity(cart.color, cart.size, cart.quantity + 1);
        }
        break;
      case "-":
        if (cart.quantity > 1) {
          updateQuantity(cart.color, cart.size, cart.quantity - 1);
        }
        break;
    }
  };
  return (
    <div className="border w-full   flex border-cartItemBorder gap-5 rounded-[16px] p-2 relative">
      <img
        src={`assets/images/${cart.color}-shirt.svg`}
        alt={cart.title}
        className="h-20 border-2 border-cartItemBorder rounded-lg w-[100px]"
      />

      <div className="font-inter flex-1">
        <p className="font-semibold text-[16px] text-checkout text-nowrap">
          {cart.title}
        </p>
        <div className="flex items-center gap-2">
          <p className="font-medium text-[13px] text-featureSubtitle">
            {cart.size}
          </p>
          <div
            className={`bg-clip-content border ${colorMap[cart.color].border} ${colorMap[cart.color].bg} p-1 rounded-full h-4 w-4`}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-4  ">
          <p className="flex-1 text-featureSubtitle font-semibold text-sm">
            ${(cart.price * cart.quantity).toFixed(2)}
          </p>
          <div className="flex gap-2 items-center">
            <p className="text-cartQuantiy font-semibold text-sm">
              {cart.quantity}
            </p>
            <div className="flex flex-col gap-2">
              <button onClick={() => handleUpdateQuanity("+")}>
                <img src="assets/images/inc.svg" className="h-[6px] w-2" />
              </button>
              <button onClick={() => handleUpdateQuanity("-")}>
                <img src="assets/images/dec.svg" className="h-[6px] w-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleRemoveFromCart(cart.color, cart.size)}
        className="absolute top-[-15px]  cursor-pointer right-[-10px] bg-customRed h-6 w-6 rounded-full flex items-center justify-center"
      >
        <img src="assets/images/white-x.svg" alt="close-icon" />
      </div>
    </div>
  );
};

export default CartItem;
