interface Props {
  size: string;
  isSelected: boolean;
  onClick: (v: string) => void;
}
const SizeItem = ({ size, isSelected, onClick }: Props) => {
  return (
    <div
      className={` ${isSelected ? "bg-iconBg" : "bg-buttonBg"} flex items-center gap-2 rounded-lg py-[7px] px-[10px] mt-2 cursor-pointer`}
    >
      <div
        className="grid place-items-center font-inter"
        onClick={() => onClick(size)}
      >
        <input
          type="radio"
          checked={isSelected}
          id={size}
          className={`col-start-1 row-start-1 peer appearance-none  h-4 w-4  ${!isSelected ? "border border-size" : ""}  rounded-full`}
        />
        <div
          className="
          
        peer-checked:bg-checkout
        peer-checked:border-2
        peer-checked: border-white
        col-start-1 row-start-1
        h-4 w-4 rounded-full"
        />
      </div>
      <label
        htmlFor={size}
        className={`${isSelected ? "text-checkout" : "text-size"} font-medium ttext-sm cursor-pointer`}
      >
        {size}
      </label>
    </div>
  );
};

export default SizeItem;
