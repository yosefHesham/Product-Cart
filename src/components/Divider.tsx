const Divider = ({ color, height }: { color: string; height: string }) => {
  return <hr className={`${color} ${height} border-0 bg-grad`}></hr>;
};

export default Divider;