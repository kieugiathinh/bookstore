import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeProduct } from "../redux/cartRedux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const handleClearProduct = (product) => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-[18px] font-semibold mb-6">Shopping Cart</h2>
      <div className="flex gap-8">
        {/* left  */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Your Items</h3>

          <div className="flex flex-col space-y-4">
            {cart.products?.map((product, index) => (
              <div
                className="flex items-center justify-between border-b border-gray-200 pb-4"
                key={index}
              >
                <img
                  src={product.img}
                  alt=""
                  className="w-32 h-32 object-cover rounded-md"
                />

                <div className="flex-1 ml-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb2">{product.desc}</p>

                  <div className="flex items-center my-5 p-4">
                    <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                    <span className="text-lg font-semibold">
                      {product.quantity}
                    </span>
                    <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold">{product.price}</p>
                  <FaTrashAlt
                    className="text-red-600 cursor-pointer"
                    onClick={() => handleRemoveProduct(product)}
                  />
                </div>
              </div>
            ))}

            <button
              className="bg-red-400 w-[200px] text-white p-3 mt-4 rounded-md font-semibold cursor-pointer"
              onClick={handleClearProduct}
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* right  */}
        <div className="w-80 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-lg font-medium">{cart.total}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-medium">Shipping</span>
              <span className="text-lg font-medium">50000</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-medium">{cart.total}</span>
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
