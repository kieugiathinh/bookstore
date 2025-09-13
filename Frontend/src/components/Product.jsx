import { Rating } from "react-simple-star-rating";

const Product = ({ img, title, price }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] m-[30px] cursor-pointer">
      <img src={img} alt="" className="h-[400px] w-[300px] bg-cover" />
      <h2 className="font-semibold text-[18px] w-[300px]">{title}</h2>
      <span className="text-[18px] font-semibold flex items-center justify-center">
        {/* $100 */}
        {price}
      </span>
      <span className="flex items-center">
        <Rating
          initialValue={2.403}
          size={25}
          fillColor="yellow"
          emptyColor="#d1d5db"
          allowFraction={true}
          readonly={true}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        />
        (2)
      </span>
    </div>
  );
};

export default Product;
