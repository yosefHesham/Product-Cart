interface Props {
  color: string;
  iconName?: string;
  onClick: () => void;
  title: string;
}

const MainButton = ({ title, iconName, color, onClick }: Props) => {
  const icon = iconName
    ? `../../public/assets/images/${iconName}.png`
    : undefined;
  return (
    <button
      onClick={onClick}
      className={`${color} rounded-[29px] flex justify-center gap-5 items-center w-80 h-14 text-white font-inter`}
    >
      {icon && <img src={icon} alt={iconName} />}
      <p>{title}</p>
    </button>
  );
};

export default MainButton;
