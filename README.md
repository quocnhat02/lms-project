# Hệ Thống Quản Lý Học Tập (LMS Project)

## Giới thiệu

Đây là dự án Hệ Thống Quản Lý Học Tập (Learning Management System - LMS) được xây dựng với mục tiêu cung cấp nền tảng học trực tuyến hiện đại, hỗ trợ quản lý khóa học, bài học, tiến trình học tập, và các chức năng dành cho giáo viên cũng như học viên.

## Tính năng chính

- Đăng ký, đăng nhập, xác thực người dùng
- Quản lý khóa học, chương học, bài học
- Theo dõi tiến trình học tập của học viên
- Quản lý và phân tích dữ liệu cho giáo viên
- Thanh toán và quản lý đơn hàng khóa học
- Tải lên tài liệu, video, file đính kèm
- Giao diện hiện đại, tối ưu cho cả desktop và mobile

## Công nghệ sử dụng

- **Next.js** (React, App Router)
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL** (hoặc các hệ quản trị CSDL tương thích)
- **TailwindCSS**
- **Clerk** (xác thực người dùng)
- **Stripe** (thanh toán)
- **Zustand** (quản lý trạng thái)
- **Uploadthing** (tải lên file)
- **Radix UI, Shadcn UI** (thư viện UI)

## Cấu trúc thư mục

- `actions/` - Các hàm xử lý logic phía server (lấy dữ liệu, phân tích, v.v.)
- `app/` - Thư mục chính của ứng dụng Next.js (bao gồm các route, API, layout, v.v.)
- `components/` - Các component giao diện dùng lại
- `hooks/` - Các custom React hook
- `lib/` - Thư viện tiện ích, cấu hình kết nối CSDL, stripe, upload, v.v.
- `prisma/` - Định nghĩa schema cho Prisma ORM
- `public/` - Tài nguyên tĩnh (ảnh, logo, ...)
- `scripts/` - Script hỗ trợ (ví dụ: seed dữ liệu)

## Hướng dẫn cài đặt & chạy dự án

1. **Clone dự án:**
   ```bash
   git clone <repo-url>
   cd lms-project
   ```
2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```
3. **Cấu hình biến môi trường:**
   - Tạo file `.env` dựa trên mẫu `.env.example` (nếu có)
   - Thiết lập các biến môi trường cần thiết cho database, Clerk, Stripe, ...
4. **Khởi tạo database:**
   ```bash
   npx prisma migrate dev
   ```
5. **Chạy dự án:**
   ```bash
   npm run dev
   ```
6. Truy cập ứng dụng tại [http://localhost:3000](http://localhost:3000)

## Đóng góp

Mọi đóng góp, báo lỗi hoặc đề xuất cải tiến đều được hoan nghênh! Vui lòng tạo issue hoặc pull request.

---
