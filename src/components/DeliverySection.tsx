import { ReactElement } from "react";

const items = [
  {
    iconName: "delivery",
    title: "Free Delivery",
    children: (
      <p className="underline text-size font-sm">
        Enter your Postal code for Delivery Availability
      </p>
    ),
  },
  {
    iconName: "red-cart",
    title: "Return Delivery",
    children: (
      <p className="text-size font-sm">
        Free 30 days Delivery Return.
        <span className="underline"> Details</span>
      </p>
    ),
  },
];
const DeliverySection = () => {
  return (
    <section className="rounded-[14px] font-inter border border-divider px-[17px] w-full">
      {items.map((item, i) => (
        <Item
          iconName={item.iconName}
          title={item.title}
          withDivider={i !== items.length - 1}
        >
          {item.children}
        </Item>
      ))}
    </section>
  );
};

export default DeliverySection;

const Item = ({
  iconName,
  title,
  children,
  withDivider,
}: {
  iconName: string;
  title: string;
  children: ReactElement;
  withDivider: boolean;
}) => {
  return (
    <div className={`${withDivider ? "border-b border-divider" : ""} py-2`}>
      <div className="flex gap-3 mb-2 items-center">
        <img
          src={`/assets/images/${iconName}.png`}
          alt={iconName}
          className="w-6 h-6"
        />
        <div>
          <p className="text-primary font-bold text-[17px] m-0">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
};
