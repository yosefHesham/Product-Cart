import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  colors: string[];
  onChange: (val: string) => void;
  selectedColor: string;
}
const ProductSlider = ({ colors, selectedColor, onChange }: Props) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    accessibility: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      nextArrow={<img src="/assets/images/next-arrow.png" />}
      prevArrow={<img src="/assets/images/prev-arrow.png" />}
    >
      {colors.map((color, index) => (
        <div
          className={`border-0 outline-none mx-4 ${selectedColor === color ? "bg-gradient-to-br  from-shirts-selectedFrom to-shirts-selectedTo" : ""} rounded-[16px] flex justify-center items-center p-1`}
        >
          <img
            key={index}
            src={`/assets/images/${color}-shirt.svg`}
            alt={`Product ${index}`}
            onClick={() => {
              onChange(color);
            }}
            className="rounded-[16px] w-full  mx-auto cursor-pointer "
          />
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
