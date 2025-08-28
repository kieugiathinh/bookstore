// import ejs from "ejs";
// import dotenv from "dotenv";
// import sendMail from "../helpers/sendMail.js";
// import User from "../models/user.model.js";
// dotenv.config();

// const sendWelcomeEmail = async () => {
//   const users = await User.find({ status: 0 });
//   if (users.length > 0) {
//     for (let user of users) {
//       ejs.renderFile(
//         "templates/welcome.ejs",
//         { name: user.name },
//         async (err, data) => {
//           let messageoption = {
//             from: process.env.EMAIL,
//             to: user.email,
//             subject: "Welcome to Beauty Bliss",
//             html: data,
//           };

//           try {
//             sendMail(messageoption);
//             await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
//           } catch (error) {
//             console.log(err);
//           }
//         }
//       );
//     }
//   }
// };

// export default sendWelcomeEmail;

// import ejs from "ejs";
// import dotenv from "dotenv";
// import path from "path"; // <-- Thêm import path
// import { fileURLToPath } from "url"; // <-- Thêm import url
// import sendMail from "../helpers/sendMail.js";
// import User from "../models/user.model.js";

// dotenv.config();

// // Đoạn code này để lấy đường dẫn tuyệt đối trong ES Modules (tương đương __dirname)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const sendWelcomeEmail = async () => {
//   try {
//     const users = await User.find({ status: 0 });

//     if (users.length === 0) {
//       console.log("Không có user mới nào để gửi email.");
//       return;
//     }

//     console.log(`Tìm thấy ${users.length} user, bắt đầu gửi email...`);

//     for (const user of users) {
//       // ✅ SỬA 1: Tạo đường dẫn tuyệt đối đến file template
//       // Giả sử file code này nằm trong thư mục 'controllers', và 'templates' nằm ngoài đó
//       const templatePath = path.join(
//         __dirname,
//         "..",
//         "templates",
//         "welcome.ejs"
//       );

//       ejs.renderFile(
//         templatePath,
//         { name: user.name, supportLink: "mailto:support@yourcompany.com" },
//         async (err, data) => {
//           // ✅ SỬA 2: Kiểm tra lỗi render EJS ngay lập tức
//           if (err) {
//             console.error(`Lỗi khi render EJS cho user ${user.email}:`, err);
//             return; // Dừng lại nếu không render được
//           }

//           // Nếu render thành công, `data` sẽ chứa HTML
//           const messageoption = {
//             from: process.env.EMAIL,
//             to: user.email,
//             subject: `Chào mừng bạn ${user.name}!`, // Có thể làm tiêu đề sinh động hơn
//             html: data,
//           };

//           try {
//             // ✅ SỬA 3: Dùng await cho sendMail và đặt logic trong khối try
//             await sendMail(messageoption);
//             await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
//             console.log(`Đã gửi mail thành công cho: ${user.email}`);
//           } catch (error) {
//             // ✅ SỬA 4: Log đúng biến lỗi
//             console.error(
//               `Lỗi khi gửi mail hoặc cập nhật DB cho ${user.email}:`,
//               error
//             );
//           }
//         }
//       );
//     }
//   } catch (dbError) {
//     console.error("Lỗi khi tìm kiếm user từ database:", dbError);
//   }
// };

// export default sendWelcomeEmail;

import ejs from "ejs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import sendMail from "../helpers/sendMail.js";
import User from "../models/user.model.js";

dotenv.config();

// Tạo __dirname cho ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sendWelcomeEmail = async () => {
  try {
    const users = await User.find({ status: 0 });

    if (users.length === 0) {
      // console.log("Không có user mới để gửi email.");
      return;
    }

    for (const user of users) {
      // Lấy đường dẫn tuyệt đối tới template
      const templatePath = path.join(
        __dirname,
        "..",
        "templates",
        "welcome.ejs"
      );

      try {
        // Render EJS thành HTML
        const data = await ejs.renderFile(templatePath, {
          name: user.name,
          supportLink: "bookstore@gmail.com",
        });

        const messageoption = {
          from: process.env.EMAIL,
          to: user.email,
          subject: `Welcome to Beauty Bliss, ${user.name}`,
          html: data,
        };

        // Gửi mail
        await sendMail(messageoption);

        // Update status trong DB
        await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });

        // console.log(`✅ Đã gửi mail cho: ${user.email}`);
      } catch (err) {
        // console.error(`❌ Lỗi khi xử lý user ${user.email}:`, err);
        console.log(err);
      }
    }
  } catch (dbError) {
    // console.error("❌ Lỗi khi lấy user từ DB:", dbError);
    console.log(dbError);
  }
};

export default sendWelcomeEmail;
