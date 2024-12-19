const express = require('express');
const cors = require('cors');
const connection = require('./connectDB'); // Kết nối cơ sở dữ liệu MySQL
const bcrypt = require('bcrypt'); // Thêm thư viện bcrypt để mã hóa mật khẩu

const app = express();
const port = 3001;

// Cấu hình CORS để cho phép frontend kết nối
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type'], 
}));

// Middleware
app.use(express.json());

// API: Xử lý đăng nhập
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM USER WHERE username = ?';

  connection.query(query, [username], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      // Kiểm tra mật khẩu
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        
        if (result) { // Nếu mật khẩu đúng
          res.json({ success: true });
        } else {
          res.json({ success: false, message: 'Invalid password' });
        }
      });
    } else {
      res.json({ success: false, message: 'User not found' });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
