const benefits = [
  "Durable leather is easily cleanable so you can keep your look fresh.",
  "Water-repellent finish and internal membrane help keep your feet dry.",
  "Toe piece with star pattern adds durability.",
  "Synthetic insulation helps keep you warm.",
  "Originally designed for performance hoops, the Air unit delivers lightweight cushioning.",
  "Plush tongue wraps over the ankle to help keep out the moisture and cold.",
  "Rubber outsole with aggressive traction pattern adds durable grip.",
  "Durable leather is easily cleanable so you can keep your look fresh.",
];
const Description = () => {
  return (
    <section className="font-inter  md:px-8 mt-4 w-full sm:w-[80%] md:w-[65%]">
      <h2 className="text-tabContentPrimary text-xl sm:text-2xl font-bold mb-5">
        Product Description
      </h2>

      <p className="text-tabContentSecondary text-[16px]">
        When it's colder than the far side of the moon and spitting rain too,
        you've still got to look good. From water-repellent leather to a rugged
        outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame
        burning when the weather hits. Metal lace hardware and extended tongue
        bring mountain boot toughness, while the star-studded toe design gives
        your look the edge
      </p>
      <h3 className="text-xl smt:ext-2xl font-bold text-tabContentPrimary my-5">
        Benefits
      </h3>

      {benefits.map((benefit, i) => (
        <div key={i} className="flex gap-3 items-center mb-2">
          <img src="/assets/images/check-icon.png" />
          <p className="text-tabContentSecondary text-[16px]">{benefit}</p>
        </div>
      ))}
    </section>
  );
};

export default Description;
