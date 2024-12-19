const mysql = require('mysql2');

// Cấu hình kết nối MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Địa chỉ MySQL server (localhost nếu chạy trên máy bạn)
  user: 'root', // Tài khoản MySQL
  password: '123456789', // Mật khẩu MySQL
  database: 'QL_BanHang', // Tên database cần kết nối
});

// Kết nối MySQL
connection.connect((err) => {
  if (err) {
    console.error('Kết nối MySQL thất bại:', err.message);
    return;
  }
  console.log('Kết nối MySQL thành công!');
});

module.exports = connection;
