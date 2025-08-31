const Category = () => {
  return (
    <div className="flex items-center m-3">
      <div className="relative bg-[url('/tieuthuyet.jpg')] bg-no-repeat bg-cover bg-center h-[500px] w-[400px] flex items-center justify-center m-[20px]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>

        <div className="relative flex items-center justify-center">
          <h2 className="font-semibold text-[30px] text-white">Tiểu thuyết</h2>
        </div>
      </div>

      <div className="relative bg-[url('/sachthieunhi.jpg')] bg-no-repeat bg-cover bg-center h-[500px] w-[400px] flex items-center justify-center m-[20px]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>

        <div className="relative flex items-center justify-center">
          <h2 className="font-semibold text-[30px] text-white">
            Sách thiếu nhi
          </h2>
        </div>
      </div>

      <div className="relative bg-[url('/phihucau.jpg')] bg-no-repeat bg-cover bg-center h-[500px] w-[400px] flex items-center justify-center m-[20px]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>

        <div className="relative flex items-center justify-center">
          <h2 className="font-semibold text-[30px] text-white">
            Sách phi hư cấu
          </h2>
        </div>
      </div>

      <div className="relative bg-[url('/phattrienbanthan.jpg')] bg-no-repeat bg-cover bg-center h-[500px] w-[400px] flex items-center justify-center m-[20px]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>

        <div className="relative flex items-center justify-center">
          <h2 className="font-semibold text-[30px] text-white">
            Phát triển bản thân
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
