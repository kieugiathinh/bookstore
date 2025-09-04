import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  const data = [
    {
      _id: "201",
      title: "The Great Gatsby",
      img: "https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg",
      desc: "Classic novel by F. Scott Fitzgerald exploring wealth and society in the 1920s.",
      originalPrice: 15.99,
      discountedPrice: 12.99,
      inStock: true,
    },
    {
      _id: "202",
      title: "1984",
      img: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
      desc: "George Orwell’s dystopian masterpiece about surveillance and totalitarianism.",
      originalPrice: 14.99,
      discountedPrice: 11.49,
      inStock: true,
    },
    {
      _id: "203",
      title: "To Kill a Mockingbird",
      img: "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg",
      desc: "Harper Lee’s classic about justice and racial inequality in the American South.",
      originalPrice: 16.99,
      discountedPrice: 13.49,
      inStock: false,
    },
    {
      _id: "204",
      title: "Pride and Prejudice",
      img: "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg",
      desc: "Jane Austen’s timeless romance set in 19th-century England.",
      originalPrice: 12.99,
      discountedPrice: 9.99,
      inStock: true,
    },
    {
      _id: "205",
      title: "The Catcher in the Rye",
      img: "https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg",
      desc: "J.D. Salinger’s iconic story of teenage angst and alienation.",
      originalPrice: 13.99,
      discountedPrice: 10.49,
      inStock: true,
    },
  ];

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full object-cover mr-2"
              src={params.row.img}
              alt=""
              height="100px"
              width="100px"
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "desc", headerName: "Description", width: 150 },
    { field: "originalPrice", headerName: "Price ($)", width: 100 },
    { field: "inStock", headerName: "In Stock", width: 100 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
                Edit
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: () => {
        return (
          <>
            <FaTrash className="text-red-500 cursor-pointer m-2" />
          </>
        );
      },
    },
  ];

  return (
    <div className="p-5 w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Products</h1>

        <button className="bg-[#1e1e1e] p-[10px] font-semibold text-white cursor-pointer">
          Create
        </button>
      </div>

      <div className="m-[30px]">
        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          checkboxSelection
          columns={columns}
        />
      </div>
    </div>
  );
};

export default Products;
