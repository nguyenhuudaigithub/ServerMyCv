--- Website My CV ---
    - package : 
        + npm init
            {
                "name": "server",
                "version": "1.0.0",
                "description": "server my cv ",
                "main": "server.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "author": "NguyenHuuDai",
                "license": "ISC"
            }

        +  npm i bcryptjs cookie-parser cors dotenv express ioredis jsonwebtoken mongoose ts-node-dev @types/bcryptjs @types/cookie-parser @types/cors @types/express @types/jsonwebtoken @types/node typescript

            - bcryptjs: Được sử dụng để băm mật khẩu một cách an toàn.
            - cookie-parser: Phần mềm trung gian để phân tích cookie trong các yêu cầu gửi đến.
            - cors: Phần mềm trung gian để cho phép chia sẻ tài nguyên giữa các nguồn gốc (CORS).
            - dotenv: Được sử dụng để tải các biến môi trường từ tệp .env vào process.env.
            - express: Khung ứng dụng web cho Node.js, được sử dụng để xây dựng API và ứng dụng web.
            - ioredis: Ứng dụng khách Redis cho Node.js, được sử dụng để tương tác với Redis, kho lưu trữ cấu trúc dữ liệu trong bộ nhớ.
            - jsonwebtoken: Được sử dụng để tạo và xác minh Mã thông báo web JSON (JWT) để xác thực người dùng.
            - mongoose: Công cụ mô hình hóa đối tượng MongoDB được thiết kế để hoạt động trong môi trường không đồng bộ như Node.js, được sử dụng để tương tác với cơ sở dữ liệu MongoDB.
            - ts-node-dev: Công cụ tải lại và thực thi TypeScript để phát triển.
            - @types/bcryptjs, @types/cookie-parser, @types/cors, @types/express, @types/jsonwebtoken, @types/node, typescript: Định nghĩa kiểu TypeScript cho các gói tương ứng và chính TypeScript.

        + npm install cors : Chia sẻ tài nguyên giữa các tên miền khác nhau trong ứng dụng web.
        + npm i compression: Dược sử dụng để nén (hoặc nén lại) các phản hồi HTTP trước khi chúng được gửi đến trình duyệt.
        + npm i cloudinary : Sử dụng để lưu trữ, xử lý và cung cấp các tệp đa phương tiện như hình ảnh, video và âm thanh
        + npm i express-rate-limit : Bảo vệ máy chủ của bạn khỏi các loại tấn công DDoS
        + npm install socket.io : Xử lý theo thời gian thực.
        + npm install nodemailer : Cho phép bạn gửi email từ ứng dụng Node.js
        + npm install ejs : render các trang HTML động trong ứng dụng web 
        + npx tsc --init : cấu hình tsconfig.json


