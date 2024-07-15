interface Props {
  size: string;
  isSelected: boolean;
  onClick: (v: string) => void;
}
const SizeItem = ({ size, isSelected, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(size)}
      className={` ${isSelected ? "bg-iconBg" : "bg-buttonBg"} flex items-center gap-2 rounded-lg py-[7px]  px-[10px] mt-2 cursor-pointer`}
    >
      <label
        htmlFor={size}
        className="grid place-items-center font-inter cursor-pointer"
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
      </label>
      <span
        className={`${isSelected ? "text-checkout" : "text-size"} font-medium text-xs  sm:text-sm`}
      >
        {size}
      </span>
    </div>
  );
};

export default SizeItem;
