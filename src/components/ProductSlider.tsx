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
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
        <div key={index} className="mx-10">
          <img
            src={`/assets/images/${color}-shirt.svg`}
            alt={`Product ${index}`}
            onClick={() => {
              onChange(color);
            }}
            className={`rounded-[16px]  cursor-pointer ${selectedColor === color ? "" : ""}`}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
