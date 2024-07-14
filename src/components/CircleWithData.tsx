import { ReactElement } from "react";

interface Props {
  classes: string;
  onClick?: () => void;
  children: ReactElement[] | ReactElement;
}

const CircleWithData = ({ classes, children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`${classes} rounded-full flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default CircleWithData;
