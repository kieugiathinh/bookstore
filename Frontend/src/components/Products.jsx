import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import PropTypes from "prop-types";

const Products = ({ filters, sort, query }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let res;

        if (query) {
          res = await userRequest.get(`/products?search=${query}`);
        } else {
          res = await userRequest.get("/products");
        }
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [query]);

  useEffect(() => {
    let tempProducts = [...products];

    //filters
    if (filters) {
      tempProducts = tempProducts.filter((item) =>
        Object.entries(filters).every(([key, value]) => {
          if (!value) return true;

          return item[key].includes(value);
        })
      );
    }

    //sap xep
    if (sort === "newest") {
      tempProducts.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
    } else if (sort === "asc") {
      tempProducts.sort((a, b) => a.originalPrice - b.originalPrice);
    } else if (sort === "desc") {
      tempProducts.sort((a, b) => b.originalPrice - a.originalPrice);
    }

    setFilteredProducts(tempProducts);
  }, [products, filters, sort]);

  return (
    <div className="flex flex-4 mx-[10px]">
      <div className="flex flex-col items-center justify-center h-[500px] m-[20px] cursor-pointer">
        <img
          src="/tieuthuyet1.jpg"
          alt=""
          className="h-[400px] w-[400px] bg-cover"
        />

        <h2 className="font-semibold text-[18px]">
          Mắt biếc - Nguyễn Nhật Ánh
        </h2>

        <span className="text-[18px] font-semibold flex item justify-center">
          50 000 VNĐ
        </span>

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
      </div>

      <div className="flex flex-col items-center justify-center h-[500px] m-[20px] cursor-pointer">
        <img
          src="/tieuthuyet1.jpg"
          alt=""
          className="h-[400px] w-[400px] bg-cover"
        />

        <h2 className="font-semibold text-[18px]">
          Mắt biếc - Nguyễn Nhật Ánh
        </h2>

        <span className="text-[18px] font-semibold flex item justify-center">
          50 000 VNĐ
        </span>

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
      </div>

      <div className="flex flex-col items-center justify-center h-[500px] m-[20px] cursor-pointer">
        <img
          src="/tieuthuyet1.jpg"
          alt=""
          className="h-[400px] w-[400px] bg-cover"
        />

        <h2 className="font-semibold text-[18px]">
          Mắt biếc - Nguyễn Nhật Ánh
        </h2>

        <span className="text-[18px] font-semibold flex item justify-center">
          50 000 VNĐ
        </span>

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
      </div>

      <div className="flex flex-col items-center justify-center h-[500px] m-[20px] cursor-pointer">
        <img
          src="/tieuthuyet1.jpg"
          alt=""
          className="h-[400px] w-[400px] bg-cover"
        />

        <h2 className="font-semibold text-[18px]">
          Mắt biếc - Nguyễn Nhật Ánh
        </h2>

        <span className="text-[18px] font-semibold flex item justify-center">
          50 000 VNĐ
        </span>

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
      </div>
    </div>
  );
};
Products.propTypes = {
  cat: PropTypes.string,
  filters: PropTypes.string,
  sort: PropTypes.string,
  query: PropTypes.string,
};

export default Products;
