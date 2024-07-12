import { ReactElement } from "react";

interface Props {
  classes: string;
  children: ReactElement[] | ReactElement;
}

const CircleWithData = ({ classes, children }: Props) => {
  return (
    <div className={`${classes} rounded-full flex items-center justify-center`}>
      {children}
    </div>
  );
};

export default CircleWithData;
