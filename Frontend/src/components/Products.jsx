export const Products = () => {
  return (
    <div className="flex flex-wrap mx-[30px]">
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
      </div>
    </div>
  );
};
