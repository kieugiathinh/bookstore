import { FaCheckCircle } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Thank You for Your Orders!</h1>
          <p className="text-gray-600 mt-2">
            Here are the details of your recent orderes.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order #1</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>

              <div className="flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
                    <img
                      src="/tieuthuyet1.jpg"
                      alt=""
                      className="w-24 h-24 rounded-md object-cover"
                    />
                    <div className="flex-1 ml-4">
                      <h4 className="text-lg font-semibold">
                        Think And Grow Rich - 13 Nguyên tắc nghĩ giàu làm giàu
                      </h4>
                      <p className="text-gray-600">1</p>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold">150 000 VND</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="my-3">Rate this product</h3>

                    <div className="flex items-center">
                      <Rating
                        initialValue={2.403}
                        size={25}
                        fillColor="#aaa"
                        emptyColor="#d1d5db"
                        allowFraction={true}
                        readonly={true}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      />
                    </div>

                    <textarea
                      name=""
                      id=""
                      placeholder="leave a message"
                      className="p-[10px] w-[300px] mt-3 bg-white"
                    ></textarea>

                    <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white cursor-pointer">
                      Submit
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
                    <img
                      src="/tieuthuyet1.jpg"
                      alt=""
                      className="w-24 h-24 rounded-md object-cover"
                    />
                    <div className="flex-1 ml-4">
                      <h4 className="text-lg font-semibold">
                        Think And Grow Rich - 13 Nguyên tắc nghĩ giàu làm giàu
                      </h4>
                      <p className="text-gray-600">1</p>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold">150 000 VND</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="my-3">Rate this product</h3>

                    <div className="flex items-center">
                      <Rating
                        initialValue={2.403}
                        size={25}
                        fillColor="#aaa"
                        emptyColor="#d1d5db"
                        allowFraction={true}
                        readonly={true}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      />
                    </div>

                    <textarea
                      name=""
                      id=""
                      placeholder="leave a message"
                      className="p-[10px] w-[300px] mt-3 bg-white"
                    ></textarea>

                    <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white cursor-pointer">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Shiping Information</h3>
          <p className="text-gray-600">kieuthinh13012004@gmail.com</p>
          <p className="text-gray-600">0339601263</p>
          <p className="text-gray-600">giathinh</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg my-2">
          <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
          <p className="text-gray-600">VISA</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg my-2">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Subtotal:</span>
            <span className="text-lg font-semibold">150 000 VND</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Shiping:</span>
            <span className="text-lg font-semibold">30 000 VND</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-lg font-semibold">180 000 VND</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#ef93db] text-white p-3 rounded-lg font-semibold cursor-pointer">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
