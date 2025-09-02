import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

export const Cart = () => {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-[18px] font-semibold mb-6">Shopping Cart</h2>
      <div className="flex gap-8">
        {/* left  */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Your Items</h3>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/tieuthuyet1.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-md"
              />

              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Think And Grow Rich - Napoleon Hill
                </h3>
                <p className="text-gray-600 mb2">Kieu Gia Thinh</p>

                <div className="flex items-center my-5 p-4">
                  <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold">1</span>
                  <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">150 000 VND</p>
                <FaTrashAlt className="text-red-600 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/tieuthuyet1.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-md"
              />

              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Think And Grow Rich - Napoleon Hill
                </h3>
                <p className="text-gray-600 mb2">Kieu Gia Thinh</p>

                <div className="flex items-center my-5 p-4">
                  <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold">1</span>
                  <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">150 000 VND</p>
                <FaTrashAlt className="text-red-600 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/tieuthuyet1.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-md"
              />

              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Think And Grow Rich - Napoleon Hill
                </h3>
                <p className="text-gray-600 mb2">Kieu Gia Thinh</p>

                <div className="flex items-center my-5 p-4">
                  <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold">1</span>
                  <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">150 000 VND</p>
                <FaTrashAlt className="text-red-600 cursor-pointer" />
              </div>
            </div>

            <button className="bg-red-400 w-[200px] text-white p-3 mt-4 rounded-md font-semibold cursor-pointer">
              Clear Cart
            </button>
          </div>
        </div>

        {/* right  */}
        <div className="w-80 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium">LiuLiu</span>
              <span className="text-lg font-medium">100 000 VND</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-medium">GiaThinh</span>
              <span className="text-lg font-medium">200 000 VND</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-medium">HiHi</span>
              <span className="text-lg font-medium">300 000 VND</span>
            </div>

            <button className="bg-[#ef93db] text-white p-3 w-full rounded-lg font-semibold cursor-pointer">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
