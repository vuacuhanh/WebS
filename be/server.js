const express = require('express');
const cors = require('cors');  // Import thư viện cors
const connection = require('./connectDB'); // Import kết nối MySQL

const app = express();
const port = 3001; // Port cho backend

// Cấu hình CORS để cho phép frontend (React) trên cổng 3000 kết nối
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type'], 
}));
// API: Đăng nhập
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;  // Lấy username và password từ request

  const query = 'SELECT * FROM USER WHERE UserName = ?';
  connection.query(query, [username], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    // Kiểm tra mật khẩu
    bcrypt.compare(password, user.Password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Mật khẩu đúng, trả về thông tin người dùng
      res.json({
        message: 'Login successful',
        user: {
          id: user.UserID,
          username: user.UserName,
          email: user.Email,
          role: user.Role
        }
      });
    });
  });
});

// Middleware
app.use(express.json());
// API: Lấy danh sách người dùng
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM USER';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
// API: Lấy danh sách danh mục
app.get('/api/categories', (req, res) => {
  const query = 'SELECT * FROM CATEGORY';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// API: Lấy danh sách dữ liệu sản phẩm
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM PRODUCT'; // Cập nhật đúng tên bảng
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
// API: Lấy danh sách đơn hàng
app.get('/api/orders', (req, res) => {
  const query = 'SELECT * FROM `ORDER`';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
// API: Lấy chi tiết đơn hàng
app.get('/api/orderdetails', (req, res) => {
  const query = 'SELECT * FROM ORDERDETAIL';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
// API: Lấy giỏ hàng
app.get('/api/carts', (req, res) => {
  const query = 'SELECT * FROM CART';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
// API: Lấy chi tiết giỏ hàng
app.get('/api/cartdetails', (req, res) => {
  const query = 'SELECT * FROM CARTDETAIL';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
// API: Lấy thông tin thanh toán
app.get('/api/payments', (req, res) => {
  const query = 'SELECT * FROM PAYMENT';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
// API: Lấy thông tin đánh giá
app.get('/api/reviews', (req, res) => {
  const query = 'SELECT * FROM REVIEW';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
// API: Lấy thông tin giao hàng
app.get('/api/deliveries', (req, res) => {
  const query = 'SELECT * FROM DELIVERY';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});


// Start server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
