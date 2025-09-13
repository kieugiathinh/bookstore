import { FaMinus, FaPlus } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

const Product = () => {
  return (
    <div className="flex justify-stretch p-[30px] h-auto">
      {/* Left */}
      <div className="flex-1 h-[500px] w-[600px]">
        <img
          src="/tieuthuyet1.jpg"
          alt=""
          className="h-[100%] w-[100%] object-cover"
        />
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col ml-10">
        <h2 className="text-[25px] font-semibold mb-[20px]">Mắt biếc</h2>
        <span>
          Nói tóm lại, thông điệp chính của cuốn sách là: Mọi thành công đều bắt
          đầu từ một ý nghĩ. Nếu bạn muốn giàu có và thành công, bạn phải bắt
          đầu bằng cách "nghĩ giàu" trước, sau đó áp dụng những nguyên tắc trên
          để biến suy nghĩ đó thành hiện thực.
        </span>
        <h2 className="font-semibold mt-2 text-[20px]">150 000 VNĐ</h2>
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
            Tác giả: Napoleon Hill
          </span>
        </div>

        <div className="inline-flex items-center bg-[#ef93db] text-white font-semibold text-sm p-3 rounded-full shadow-md">
          KieuGiaThinh
        </div>

        <div className="flex items-center my-5 p-4">
          <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
          <span className="text-lg font-semibold">1</span>
          <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
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
