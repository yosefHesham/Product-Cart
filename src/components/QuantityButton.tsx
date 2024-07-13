interface Props {
  quantity: number;
  maxQuantity?: number;
  onChange: (val: number) => void;
}

const QuantityButton = ({
  quantity = 1,
  onChange,
  maxQuantity = 15,
}: Props) => {
  const onUpdateQuantity = (operator: string) => {
    switch (operator) {
      case "+":
        if (quantity < maxQuantity) {
          quantity++;
          onChange(quantity);
        }
        break;

      case "-":
        if (quantity > 0) {
          quantity--;
          onChange(quantity);
        }
    }
  };
  return (
    <div className="bg-buttonBg rounded-[29px] flex justify-evenly items-center w-36 h-14 text-primary font-inter">
      <button onClick={() => onUpdateQuantity("-")}>-</button>
      <p className="font-bold text-xl">{quantity}</p>
      <button onClick={() => onUpdateQuantity("+")}>+</button>
    </div>
  );
};

export default QuantityButton;
