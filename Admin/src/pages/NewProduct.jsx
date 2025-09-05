import { FaPlus } from "react-icons/fa";

const NewProduct = () => {
  return (
    <div className="p-5 ">
      <div className="flex items-center justify-center mb-5">
        <h1 className="text-2xl font-semibold">New Product</h1>
      </div>

      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">
        <form className="flex flex-col md:flex-row rounded-lg">
          {/* left */}
          <div className="flex-1 space-y-5">
            <div>
              <label className="font-serif">Product Image:</label>
              <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounded-md mt-2">
                <div className="flex items-center justify-center mt-[40px]">
                  <label htmlFor="" className="cursor-pointer">
                    <FaPlus className="text-[20px]" />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Product Name:
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Product Description:
              </label>
              <textarea
                type="text"
                placeholder="Product Description"
                cols={20}
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Product Original Price:
              </label>
              <input
                type="number"
                placeholder="100 000 VND"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Product Discounted Price:
              </label>
              <input
                type="number"
                placeholder="50 000 VND"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* right */}
          <div className="flex-1 space-y-5 ml-5">
            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Wholesale Price:
              </label>
              <input
                type="number"
                placeholder="50"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Wholesale Minium Quantity:
              </label>
              <input
                type="number"
                placeholder="10"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Brand:
              </label>
              <input
                type="text"
                placeholder="GiaThinh"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Concern:
              </label>
              <select
                name=""
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Select Concern
                </option>
                <option>LiuLiu</option>
                <option>hihi</option>
                <option>giathinh</option>
                <option>GoodMorning</option>
                <option>Bread</option>
              </select>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Type:
              </label>
              <select
                name=""
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Select Type
                </option>
                <option>Sach Giao Khoa</option>
                <option>Tieu thuyet</option>
                <option>Phat Trien Ban Than</option>
                <option>Tu Duy & Logic</option>
                <option>Lam Giau</option>
              </select>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-serif">
                Category:
              </label>
              <select
                name=""
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Select Category
                </option>
                <option>Sach Giao Khoa</option>
                <option>Tieu thuyet</option>
                <option>Phat Trien Ban Than</option>
                <option>Tu Duy & Logic</option>
                <option>Lam Giau</option>
              </select>
            </div>

            <button className="bg-slate-500 text-white py-2 px-4 rounded cursor-pointer">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
