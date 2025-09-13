import { useLocation } from "react-router-dom";
import Products from "../components/Products";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const query = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const { sort, setSort } = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between m-4">
        {/* left  */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4">Filter Products</span>
          <select
            name="concern"
            id=""
            className="p-2 mb-4 sm:mb-0 sm:mr-4 bg-white"
            onChange={handleFilters}
          >
            <option>Tieu thuyet</option>
            <option>Thieu nhi</option>
            <option>Phat trien ban than</option>
            <option>Sach giao khoa</option>
            <option>Khac</option>
          </select>

          <select
            name="brand"
            id=""
            className="p-2 mb-4 sm:mb-0 sm:mr-4 bg-white"
            onChange={handleFilters}
          >
            <option>Gia Thinh</option>
            <option>Napoleon Hill</option>
            <option>HiHi</option>
            <option>LiuLiu</option>
            <option>NoName</option>
          </select>
        </div>

        {/* right */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4">Sort Products</span>
          <select
            name="price"
            id=""
            className="p-2 mb-4 sm:mb-0 sm:mr-4 bg-white"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newwst">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>

      <Products query={query} filters={filters} sort={sort} />
    </div>
  );
};

export default ProductList;
