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
      className={`w-12 h-12 rounded-full flex justify-center items-center ${colorMap[color].bg} ${isSelected ? `bg-clip-content border-2 w-[58px] h-[58px] p-[2px] ${colorMap[color].border}` : ""} cursor-pointer`}
    >
      {isSelected && <img src="/assets/images/selected.png"></img>}
    </div>
  );
};

export default ColorCircle;
