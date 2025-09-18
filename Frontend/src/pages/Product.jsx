import { FaMinus, FaPlus } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { userRequest } from "../requestMethods";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  let price;
  const handleQuantity = (action) => {
    if (action === "dec") {
      setQuantity(quantity === 1 ? 1 : quantity - 1);
    }

    if (action === "inc") {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  const handlePrice = (
    originalPrice,
    discountedPrice,
    wholePrice,
    minimumQuantity,
    quantity
  ) => {
    if (quantity > minimumQuantity && discountedPrice) {
      discountedPrice = wholePrice;
      price = discountedPrice;
      return price;
    } else if (quantity > minimumQuantity && originalPrice) {
      originalPrice = wholePrice;
      price = originalPrice;
      return price;
    } else if (discountedPrice) {
      price = discountedPrice;
      return price;
    } else {
      price = originalPrice;
      return price;
    }
  };

  return (
    <div className="flex justify-stretch p-[30px] h-auto">
      {/* Left */}
      <div className="flex-1 h-[500px] w-[600px]">
        <img
          src={product.img}
          alt=""
          className="h-[100%] w-[100%] object-cover"
        />
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col ml-10">
        <h2 className="text-[25px] font-semibold mb-[20px]">{product.title}</h2>
        <span>{product.desc}</span>
        <h2 className="font-semibold mt-2 text-[20px]">
          {handlePrice(
            product.originalPrice,
            product.discountedPrice,
            product.wholesalePrice,
            product?.wholesaleMinimumQuantity,
            quantity
          )}
        </h2>
        <span>
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
        </span>

        <div className="h-52 w-96 border-2 border-gray-300 rounded-lg shadow-md my-4 p-6 ">
          <h2 className="flex items-center justify-center font-semibold text-lg text-gray-700 mb-4">
            WHAT'S THE IN BOX
          </h2>
          <hr className="mb-4" />
          <span className="block text-gray-600 text-base text-[18px]">
            {product.title}
          </span>
        </div>

        <div className="inline-flex items-center bg-[#ef93db] text-white font-semibold text-sm p-3 rounded-full shadow-md">
          Giá sỉ: {product.wholesalePrice} khi mua từ{" "}
          {product.wholesaleMinimumQuantity} sản phẩm trở lên.
        </div>

        <div className="flex items-center my-5 p-4">
          <FaMinus
            className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl"
            onClick={() => handleQuantity("dec")}
          />
          <span className="text-lg font-semibold">{quantity}</span>
          <FaPlus
            className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl"
            onClick={() => handleQuantity("inc")}
          />
        </div>

        <button className="bg-[#1e1e1e] p-[10px] w-[200px] text-white cursor-pointer">
          Add to cart
        </button>

        <hr className="my-6" />

        <div className="flex flex-col">
          <h2 className="font-semibold text-[18px]">Reviews</h2>
          <div className="flex items-center ">
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
            <span className="font-semibold mx-[20px]">GiaThinh</span>
          </div>

          <div className="flex items-center ">
            <Rating
              initialValue={4.5}
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
            <span className="font-semibold mx-[20px]">LiuLiu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
