interface Props {
  color: string;
  iconName?: string;
  onClick: () => void;
  title: string;
  disabled?: boolean;
  disabledColor?: string;
}

const MainButton = ({
  title,
  iconName,
  color,
  onClick,
  disabled = false,
  disabledColor = "bg-gray-500",
}: Props) => {
  const icon = iconName ? `/assets/images/${iconName}.png` : undefined;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${color} ${disabled ? `${disabledColor}` : ""} rounded-[29px] flex justify-center gap-5 items-center w-80 h-14 text-white font-inter`}
    >
      {icon && <img src={icon} alt={iconName} />}
      <p>{title}</p>
    </button>
  );
};

export default MainButton;
