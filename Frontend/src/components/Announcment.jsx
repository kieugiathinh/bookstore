import { Typewriter } from "react-simple-typewriter";
const Announcment = () => {
  return (
    <div className="bg-[#e9acd9] text-[18px] h-[30px] flex items-center justify-center">
      <div
        style={{
          color: "white",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        <Typewriter
          words={["Beauty", "Bliss", "Everything", "on", "Discount", "20%!"]}
          loop={1000}
          cursor
          cursorStyle=""
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
};

export default Announcment;
