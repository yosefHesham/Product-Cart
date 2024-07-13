interface Props {
  size: string;
  isSelected: boolean;
  onClick: (v: string) => void;
}
const SizeItem = ({ size, isSelected, onClick }: Props) => {
  return (
    <div
      className={` ${isSelected ? "bg-iconBg" : "bg-buttonBg"} flex items-center gap-2 rounded-lg py-[7px] px-[10px] mt-2`}
    >
      <div
        className="grid place-items-center font-inter cursor-pointer"
        onClick={() => onClick(size)}
      >
        <input
          type="radio"
          checked={isSelected}
          id={size}
          className={`col-start-1 row-start-1 peer appearance-none  w-5 h-5  ${isSelected ? "border-white border-2" : " border border-size"} rounded-full`}
        />
        <div
          className="
        peer-checked:bg-checkout
        col-start-1 row-start-1
        w-3 h-3 rounded-full"
        />
      </div>
      <label
        htmlFor={size}
        className={`${isSelected ? "text-checkout" : "text-size"} font-medium`}
      >
        {size}
      </label>
    </div>
  );
};

export default SizeItem;
