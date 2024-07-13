import { ReactNode } from "react";

interface Props {
  iconName: string;
  bgColor?: string;
  classes: string;
  children?: ReactNode | undefined;
}

const FeatureIcon = ({ iconName, children, bgColor, classes }: Props) => {
  const icon = `/assets/images/${iconName}`;
  return (
    <div
      className={`${bgColor ?? "bg-iconBg"} rounded-[10px] flex justify-center items-center h-8 gap-2 ${classes}`}
    >
      <img src={icon} alt={iconName} />
      {children ?? children}
    </div>
  );
};

export default FeatureIcon;
