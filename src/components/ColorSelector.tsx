import ColorCircle from "./ColorCircle";

interface Props {
  onChange: (color: string) => void;
  selectedColor: string;
  colors: string[];
}

const ColorSelector = ({ onChange, colors, selectedColor }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      {colors.map((color) => (
        <ColorCircle
          color={color}
          isSelected={color === selectedColor}
          onClick={onChange}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
