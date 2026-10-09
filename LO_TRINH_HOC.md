# Lộ trình học Node.js – Backend

> Đánh dấu `[x]` vào ô khi xong. Cập nhật mục **Nhật ký học** ở cuối file mỗi buổi học.
> Dự án thực hành xuyên suốt: **sổ lưu bút** (`server.js` + `index.html`).

## Tiến độ hiện tại

- [x] Tạo repo, commit và push lên GitHub
- [x] Cài Node.js, chạy thử máy chủ `http` thuần (`node server.js`)
- [x] Hiểu luồng: trình duyệt → máy chủ → lưu dữ liệu → trả kết quả
- [ ] **Tiếp theo:** Giai đoạn 0

---

## Hai mạch chạy song song mọi giai đoạn

Hai mạch này **không học một lần rồi thôi**. Mỗi giai đoạn đều có việc riêng cho chúng (xem mục 🗂 và 🔒 trong từng giai đoạn).

### 🗂 Mạch A – Quản lý dự án: để sau này đọc lại và sửa được

**Vấn đề hay gặp:** tài liệu và code phình dần, nhiều bản sao (`ban_cuoi.docx`, `ban_cuoi_that_su.docx`…), sau vài tháng mở lại không biết cái nào đúng, sửa chỗ này hỏng chỗ kia.

**Nguyên tắc cốt lõi:**
1. **Một nguồn sự thật duy nhất.** Không giữ nhiều bản sao. Git đã lưu mọi phiên bản cũ, muốn xem hay quay lại lúc nào cũng được → cứ mạnh dạn **xóa** thứ không dùng.
2. **Commit nhỏ, tên rõ.** Mỗi commit làm một việc, tên nói *làm gì*: `Thêm chức năng xóa lời nhắn`, không phải `sua`, `update`.
3. **Tài liệu sửa cùng lúc với code.** Đổi code thì sửa README trong cùng commit. Tài liệu lệch với code còn tệ hơn không có tài liệu.
4. **Ghi *vì sao*, không chỉ *cái gì*.** Code đã cho thấy *cái gì*. Thứ bạn sẽ quên là *vì sao* chọn cách này.
5. **Ngắn và có cấu trúc.** Tài liệu dài không ai đọc lại. Thà 1 trang được cập nhật còn hơn 20 trang bị bỏ quên.

**Bộ tài liệu tối thiểu cho mỗi dự án:**

| File | Nội dung | Độ dài |
|---|---|---|
| `README.md` | Dự án làm gì, cách cài, cách chạy | 1 trang |
| `CHANGELOG.md` | Mỗi phiên bản thay đổi gì | Vài dòng mỗi lần |
| `docs/quyet-dinh.md` | Các quyết định quan trọng và **lý do** | Mỗi quyết định 3–5 dòng |
| `.env.example` | Danh sách biến cấu hình cần có (không chứa giá trị thật) | Ngắn |

**Kỹ năng Git cần học dần:**
- `git status`, `git diff`, `git log` – xem đã thay đổi gì
- `git restore`, `git revert` – hoàn tác an toàn
- **Nhánh (branch)** – thử tính năng mới mà không ảnh hưởng bản đang chạy
- **Pull Request** – tự review lại thay đổi trước khi gộp vào `main`
- **Tag** – đánh dấu phiên bản (`v1.0`, `v1.1`)

**Công cụ giữ code gọn:**
- **Prettier** – tự định dạng code cho thống nhất
- **ESLint** – phát hiện lỗi và code thừa
- **Test tự động** – sửa code mà biết ngay có hỏng gì không
- **GitHub Issues / Projects** – ghi lại việc cần làm, lỗi, ý tưởng thay vì để trong đầu

### 🔒 Mạch B – Bảo mật: dù nội bộ hay public

**Tư duy nền tảng:**
- **Không tin dữ liệu từ người dùng.** Mọi thứ gửi lên máy chủ đều phải kiểm tra.
- **Quyền tối thiểu.** Mỗi người, mỗi chương trình chỉ có đúng quyền cần thiết.
- **Nhiều lớp bảo vệ.** Một lớp bị vượt qua vẫn còn lớp khác.
- **"Nội bộ" không có nghĩa là an toàn.** Nhiều sự cố đến từ bên trong: nhân viên cũ, máy bị nhiễm mã độc, mật khẩu dùng chung.

**Nội bộ và public khác nhau thế nào:**

| | Nội bộ | Public |
|---|---|---|
| Ai truy cập | Nhân viên, mạng công ty | Bất kỳ ai trên Internet |
| Rủi ro chính | Lộ dữ liệu ra ngoài, phân quyền sai, tài khoản nhân viên đã nghỉ | Tấn công tự động, dò mật khẩu, spam, khai thác lỗ hổng |
| Bắt buộc thêm | Phân quyền theo vai trò, ghi log ai làm gì, thu hồi tài khoản khi nghỉ | HTTPS, giới hạn số lần thử (rate limit), chống spam, cập nhật bảo mật thường xuyên |
| Giống nhau | Mật khẩu mã hóa, giấu khóa bí mật, sao lưu, kiểm tra dữ liệu đầu vào | ← như bên trái |

---

## Giai đoạn 0 – Nền tảng (2–4 tuần)

- [ ] JavaScript: biến, kiểu dữ liệu, `if`, vòng lặp, hàm
- [ ] Mảng: `map`, `filter`, `find`
- [ ] **Bất đồng bộ: `async`/`await`, Promise** (quan trọng nhất)
- [ ] HTML/CSS đủ để làm form
- [ ] Terminal: `cd`, `dir`/`ls`, chạy lệnh
- [ ] 🗂 Git cơ bản: `status`, `diff`, `log`, viết tên commit rõ ràng
- [ ] 🗂 Viết `README.md` cho sổ lưu bút
- [ ] 🔒 Hiểu vì sao `index.html` dùng `textContent` mà không dùng `innerHTML` (chống XSS)
- [ ] 🛠 **Bài tập:** tự giải thích từng dòng `server.js` và `index.html`

## Giai đoạn 1 – Express (1–2 tuần)

- [ ] `npm init`, `npm install`, file `package.json`
- [ ] Route: `GET`, `POST`, `PUT`, `DELETE`
- [ ] REST API, mã trạng thái HTTP (200, 201, 400, 404, 500)
- [ ] Middleware
- [ ] 🗂 Chia code thành nhiều file (`routes/`, `services/`) thay vì một file dài
- [ ] 🗂 Dùng **nhánh** cho mỗi tính năng mới, gộp qua Pull Request
- [ ] 🔒 **Kiểm tra dữ liệu đầu vào** (validation): độ dài, kiểu dữ liệu, trường bắt buộc
- [ ] 🔒 Không trả chi tiết lỗi nội bộ cho người dùng (chỉ ghi vào log)
- [ ] 🛠 **Bài tập:** viết lại `server.js` bằng Express, thêm chức năng xóa lời nhắn

## Giai đoạn 2 – Cơ sở dữ liệu (2–3 tuần)

- [ ] SQL cơ bản với **SQLite**: tạo bảng, `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- [ ] `WHERE`, `ORDER BY`, `LIMIT`, `JOIN`
- [ ] 🗂 **Migration**: lưu lịch sử thay đổi cấu trúc bảng bằng file, không sửa tay
- [ ] 🗂 Ghi vào `docs/quyet-dinh.md`: vì sao chọn SQLite
- [ ] 🔒 **Chống SQL injection**: luôn dùng câu lệnh có tham số
- [ ] 🔒 **Sao lưu dữ liệu** định kỳ và **thử khôi phục** ít nhất một lần
- [ ] 🛠 **Bài tập:** chuyển `messages.json` sang SQLite, thêm ô tìm kiếm theo tên

## Giai đoạn 3 – Bảo mật chuyên sâu (3–4 tuần) ⭐

Giai đoạn riêng để học kỹ, sau khi đã có ứng dụng thật để áp dụng.

**Xác thực và phân quyền**
- [ ] Mã hóa mật khẩu bằng `bcrypt` (không bao giờ lưu mật khẩu dạng chữ thường)
- [ ] Phiên đăng nhập: session/cookie hoặc JWT; cookie `httpOnly`, `secure`
- [ ] Phân quyền theo vai trò (người dùng / admin)
- [ ] Giới hạn số lần đăng nhập sai (chống dò mật khẩu)
- [ ] Xác thực 2 lớp (2FA) – tìm hiểu cách hoạt động

**Bảo vệ khóa bí mật**
- [ ] Mật khẩu database, API key để trong file `.env`, **không bao giờ commit lên Git**
- [ ] Hiểu rằng: lỡ commit khóa bí mật thì xóa trong commit sau **vẫn còn trong lịch sử Git** → phải **đổi khóa mới ngay**
- [ ] Bật **Secret scanning** trên GitHub

**Các lỗ hổng phổ biến (OWASP Top 10)**
- [ ] XSS – chèn mã độc vào trang
- [ ] SQL injection
- [ ] CSRF – lừa trình duyệt gửi yêu cầu thay người dùng
- [ ] Phân quyền sai – người A xem/sửa được dữ liệu của người B
- [ ] Dùng thư viện có lỗ hổng → chạy `npm audit` thường xuyên, bật **Dependabot** trên GitHub

**Bảo vệ máy chủ**
- [ ] HTTPS
- [ ] Thư viện `helmet` (thêm các header bảo mật)
- [ ] Rate limit – giới hạn số yêu cầu mỗi phút
- [ ] CORS – chỉ cho phép trang của mình gọi API

**Dữ liệu cá nhân và vận hành**
- [ ] Chỉ thu thập dữ liệu thực sự cần
- [ ] Tìm hiểu quy định bảo vệ dữ liệu cá nhân tại Việt Nam (Nghị định 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân)
- [ ] Ghi log: ai đăng nhập, ai sửa/xóa gì, lúc nào (không ghi mật khẩu vào log)
- [ ] Có kế hoạch khi bị lộ dữ liệu: đổi khóa, khóa tài khoản, thông báo

- [ ] 🛠 **Bài tập:** thêm đăng ký/đăng nhập cho sổ lưu bút; chỉ chủ lời nhắn hoặc admin mới xóa được; chạy `npm audit` và sửa hết cảnh báo

## Giai đoạn 4 – Deploy (1 tuần)

- [ ] Biến môi trường trên máy chủ thật
- [ ] Render / Railway / Fly.io, tự deploy khi push
- [ ] Chuyển SQLite → PostgreSQL
- [ ] 🗂 Đánh **tag** phiên bản (`v1.0`), viết `CHANGELOG.md`
- [ ] 🔒 Kiểm tra lại trước khi public: không lộ `.env`, đã có HTTPS, rate limit, sao lưu tự động
- [ ] 🛠 **Bài tập:** đưa sổ lưu bút lên mạng, gửi link cho bạn bè dùng thử

## Giai đoạn 5 – Mở rộng (học khi cần)

- [ ] React / Vue – giao diện phức tạp
- [ ] TypeScript – bắt lỗi sớm
- [ ] 🗂 Test tự động (Jest, Vitest) + chạy tự động trên GitHub Actions mỗi lần push
- [ ] WebSocket – chat, thông báo thời gian thực
- [ ] Gọi API bên ngoài: email, Telegram, AI
- [ ] Docker

---

## Tài liệu miễn phí

- **MDN Web Docs** (developer.mozilla.org) – HTML, CSS, JavaScript
- **javascript.info** – giáo trình JavaScript
- **freeCodeCamp** – bài tập có chấm điểm
- **nodejs.org**, **expressjs.com** – tài liệu chính thức
- **OWASP Top 10** (owasp.org) – các lỗ hổng web phổ biến nhất
- **OWASP Cheat Sheet Series** – hướng dẫn ngắn cho từng chủ đề bảo mật

## Mẹo học

1. Học đến đâu nâng cấp sổ lưu bút đến đó.
2. Tự gõ code, đừng copy.
3. Commit sau mỗi bài tập.
4. Đọc kỹ thông báo lỗi: nó thường chỉ rõ file và dòng.
5. Mỗi cuối tuần dành 15 phút **dọn dẹp**: xóa code/file thừa, cập nhật README.

---

## Nhật ký học

| Ngày | Đã học | Còn thắc mắc |
|---|---|---|
| 2026-10-07 | Git commit/push, cài Node.js, chạy máy chủ sổ lưu bút | |
| 2026-10-09 | Lên lộ trình học, bổ sung quản lý dự án và bảo mật | |
