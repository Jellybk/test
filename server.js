// Máy chủ Node.js đơn giản: phục vụ trang web + API sổ lưu bút
// Chạy bằng: node server.js  rồi mở http://localhost:3000

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DATA_FILE = path.join(__dirname, "messages.json");

// Đọc danh sách lời nhắn từ file (nếu chưa có file thì trả về mảng rỗng)
function readMessages() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

function saveMessages(messages) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
}

function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  // In ra mỗi yêu cầu để bạn thấy Node.js đang nhận gì
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);

  // 1. Trang chủ: gửi file index.html cho trình duyệt
  if (req.method === "GET" && req.url === "/") {
    const html = fs.readFileSync(path.join(__dirname, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  // 2. API lấy danh sách lời nhắn
  if (req.method === "GET" && req.url === "/api/messages") {
    return sendJson(res, 200, readMessages());
  }

  // 3. API thêm lời nhắn mới
  if (req.method === "POST" && req.url === "/api/messages") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      let input;
      try {
        input = JSON.parse(body);
      } catch {
        return sendJson(res, 400, { error: "Dữ liệu không hợp lệ" });
      }

      const name = String(input.name || "").trim().slice(0, 50);
      const text = String(input.text || "").trim().slice(0, 500);
      if (!name || !text) {
        return sendJson(res, 400, { error: "Vui lòng nhập tên và lời nhắn" });
      }

      const messages = readMessages();
      const message = { name, text, time: new Date().toISOString() };
      messages.unshift(message);
      saveMessages(messages);
      console.log(`  -> Đã lưu lời nhắn của "${name}"`);
      return sendJson(res, 201, message);
    });
    return;
  }

  // 4. Không tìm thấy đường dẫn
  sendJson(res, 404, { error: "Không tìm thấy" });
});

server.listen(PORT, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
  console.log("Nhấn Ctrl+C để dừng.");
});
