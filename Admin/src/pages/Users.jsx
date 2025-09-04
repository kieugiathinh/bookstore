import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";

const Users = () => {
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "role",
      headerName: "Role",
      width: 130,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => {
        return (
          <>
            <FaTrash className="text-red-500 cursor-pointer m-2" />
          </>
        );
      },
    },
  ];

  const data = [
    {
      _id: "u101",
      name: "Gia Thinh",
      email: "giathinh@gmail.com",
      phone: "0339601263",
      role: "Admin",
    },
    {
      _id: "u102",
      name: "Van Hung",
      email: "vanhung@gmail.com",
      phone: "0901234567",
      role: "User",
    },
    {
      _id: "u103",
      name: "Hong Ngoc",
      email: "hongngoc@gmail.com",
      phone: "0912345678",
      role: "User",
    },
    {
      _id: "u104",
      name: "Quoc Cuong",
      email: "quoccuong@gmail.com",
      phone: "0923456789",
      role: "User",
    },
    {
      _id: "u105",
      name: "Minh Thu",
      email: "minhthu@gmail.com",
      phone: "0934567890",
      role: "User",
    },
  ];

  return (
    <div className="p-5 w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Users</h1>

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

export default Users;
