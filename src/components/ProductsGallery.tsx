import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
const ProductsGallery = ({
  images,
  onSelect,
  initialIndex = 0,
}: {
  images: string[];
  onSelect: (index: number) => void;
  initialIndex: number;
}) => {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  const slider1 = useRef<Slider | undefined>(undefined);
  const slider2 = useRef<Slider | undefined>(undefined);

  const [activeSlide, setActiveSlide] = useState(initialIndex);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settingsMain = {
    asNavFor: nav2,
    ref: slider1,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    infinite: true,
    initialSlide: initialIndex,
    fade: true,
    adaptiveHeight: true,
  };

  const settingsThumbs = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: initialIndex,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10px",
    arrows: false,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="gallery">
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setNav1(slider!)}
      >
        {images.map((img, index) => (
          <div key={index} className="mb-5 w-[40%] py-3">
            <img
              onDoubleClick={() => {
                onSelect(activeSlide);
              }}
              src={img}
              alt={`Image ${index + 1}`}
              className="w-[90%] sm:w-7/12 h-[350px] mx-auto border border-iconBg rounded-[16px] cursor-pointer"
            />
          </div>
        ))}
      </Slider>
      <Slider
        {...settingsThumbs}
        className="py-5"
        asNavFor={nav1}
        ref={(slider) => setNav2(slider!)}
      >
        {images.map((img, index) => (
          <img
            onDoubleClick={() => {
              onSelect(index);
            }}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`rounded-[16px] ${activeSlide === index ? "border-2 border-black" : ""} h-32 mx-auto cursor-pointer`}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductsGallery;
