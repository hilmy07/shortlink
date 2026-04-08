# 🔗 Shortlink App

A simple and fast URL shortener built with **Golang (Gin)** for backend and **ReactJS** for frontend.

---

## 🚀 Features

* 🔐 JWT Authentication (Login & Register)
* ✂️ Create short links بسهولة
* 🔗 Redirect short URL → original URL
* 📋 CRUD Links (Create, Read, Delete)
* ⚡ High performance backend using Go
* 🌐 RESTful API
* 💾 PostgreSQL database

---

## 🛠️ Tech Stack

### Backend

* Golang
* Gin Gonic
* PostgreSQL
* JWT Authentication

### Frontend

* ReactJS
* Fetch API
* TailwindCSS (optional)

---

## 📂 Project Structure

```
shortlink/
│
├── backend/
│   ├── cmd/
│   ├── internal/
│   │   ├── handlers/
│   │   ├── service/
│   │   ├── repository/
│   │   └── models/
│   ├── migrations/
│   └── main.go
│
├── frontend/
│   ├── src/
│   └── public/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/hilmy07/shortlink.git
cd shortlink
```

---

## 🧩 Backend Setup

### 2. Masuk ke folder backend

```bash
cd backend
```

### 3. Install dependency

```bash
go mod tidy
```

---

### 4. Setup Environment (.env)

Buat file `.env` di folder backend:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=shortlink

JWT_SECRET=supersecretkey
PORT=8000
```

---

### 5. Jalankan Migration

```bash
migrate -path ./migrations -database "postgres://postgres:yourpassword@localhost:5432/shortlink?sslmode=disable" up
```

---

### 6. Run Backend

```bash
go run main.go
```

Backend akan jalan di:

```
http://localhost:8000
```

---

## 🎨 Frontend Setup

### 1. Masuk ke folder frontend

```bash
cd frontend
```

### 2. Install dependency

```bash
npm install
```

### 3. Run frontend

```bash
npm run dev
```

Frontend akan jalan di:

```
http://localhost:5173
```

---

## 🔗 API Documentation

### 🔐 Auth

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| POST   | /register | Register user |
| POST   | /login    | Login user    |

---

### 🔗 Links

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/links     | Get all links     |
| POST   | /api/links     | Create short link |
| DELETE | /api/links/:id | Delete link       |

---

### 🔁 Redirect

| Method | Endpoint |
| ------ | -------- |
| GET    | /:slug   |

Contoh:

```
http://localhost:8000/abc123
```

➡️ Akan redirect ke URL asli

---

## 🔄 Example Request

### Create Short Link

```json
POST /api/links
Authorization: Bearer TOKEN

{
  "original_url": "https://google.com"
}
```

---

## 🧪 Testing

Gunakan:

* Postman
* Thunder Client (VS Code)

Contoh test redirect:

```bash
GET http://localhost:8000/abc123
```

---

## ⚠️ Notes

* Pastikan PostgreSQL sudah running
* Migration harus dijalankan dulu
* Endpoint `/api/*` butuh token JWT
* Redirect endpoint (`/:slug`) public

---

## 👨‍💻 Author

**Muhammad Hilmy Haidar Aly**

---

## 📄 License

MIT License

---

## ⭐ Support

Kalau project ini membantu:

* ⭐ Star repo ini
* 🍴 Fork untuk pengembangan
* 🛠️ Open PR kalau mau kontribusi

---
