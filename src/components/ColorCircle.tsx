import { colorMap } from "../data";

interface Props {
  color: string;
  isSelected: boolean;
  onClick: (color: string) => void;
}

const ColorCircle = ({ color, isSelected = false, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(color)}
      className={`w-10 h-10 rounded-full flex justify-center items-center ${colorMap[color].bg} ${isSelected ? `bg-clip-content border-2 w-14 h-14 p-[2px] ${colorMap[color].border}` : ""} cursor-pointer`}
    >
      {isSelected && <img src="/assets/images/selected.png"></img>}
    </div>
  );
};

export default ColorCircle;
