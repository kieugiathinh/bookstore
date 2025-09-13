import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { userRequest } from "../requestMethods.js";
import { Link } from "react-router-dom";
import Product from "../components/Product.jsx";

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
      {filteredProducts.map((product, index) => (
        <Link to={`/product/${product._id}`} key={index}>
          {/* <div className="flex flex-col items-center justify-center h-[500px] w-[250px] m-[20px] cursor-pointer">
            <img
              src={product.img}
              alt=""
              className="h-[400px] w-[400px] object-cover"
            />
            <h2 className="font-semibold text-[18px]">{product.title}</h2>
            {product && product?.ratings && product?.ratings.length > 0
              ? showAverage(product)
              : ""}
          </div> */}

          <Product img={product.img} title={product.title} />
        </Link>
      ))}
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
