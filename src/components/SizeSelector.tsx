import SizeItem from "./SizeItem";

interface Props {
  sizes: string[];
  selectedSize: string;
  onChange: (val: string) => void;
}
const SizeSelector = ({ sizes, selectedSize, onChange }: Props) => {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      {sizes.map((size, index) => (
        <SizeItem
          key={index}
          isSelected={selectedSize === size}
          size={size}
          onClick={onChange}
        ></SizeItem>
      ))}
    </div>
  );
};

export default SizeSelector;
