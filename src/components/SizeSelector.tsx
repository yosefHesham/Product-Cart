import SizeItem from "./SizeItem";

interface Props {
  sizes: string[];
  selectedSize: string;
  onChange: (val: string) => void;
}
const SizeSelector = ({ sizes, selectedSize, onChange }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      {sizes.map((size) => (
        <SizeItem
          isSelected={selectedSize === size}
          size={size}
          onClick={onChange}
        ></SizeItem>
      ))}
    </div>
  );
};

export default SizeSelector;
