import { LineChart } from "@mui/x-charts/LineChart";
import { FaUpload } from "react-icons/fa";

const Product = () => {
  return (
    <div className="p-5 w-[70vw]">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-3xl font-semibold">Product</h3>
        <button className="bg-slate-500 text-white py-2 px-4 rounded">
          Create
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Chart */}
        <div className="flex-1">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={250}
            width={500}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>

        {/* Product Card */}
        <div className="flex-1 bg-white p-5 shadow-lg rounded-lg">
          <div className="flex items-center mb-5">
            <img
              src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg"
              alt=""
              className="h-20 w-20 rounded-full mr-5"
            />
            <span className="text-2xl font-semibold">
              Think About Things Differently
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-semibold">ID:</span>
              <span>13012004</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Sales:</span>
              <span>131</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">In stock:</span>
              <span>Yes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">
        <form action="" className="flex flex-col md:flex-row gap-5">
          {/* left  */}
          <div className="flex-1 space-y-5">
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Discription
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Original Price
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Discounted Price
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                In Stock
              </label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
          </div>

          {/* right  */}
          <div className="flex-1 flex flex-col items-center space-y-5">
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg"
                alt=""
                className="h-40 w-40 rounded-full mr-5"
              />

              <label htmlFor="" className="cursor-pointer mt-5">
                <FaUpload className="text-2xl text-gray-700" />
              </label>

              <button className="bg-slate-500 text-white py-2 px-4 rounded mt-5 cursor-pointer">
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
