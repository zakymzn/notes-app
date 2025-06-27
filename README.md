# Notes App

Sebuah aplikasi catatan sederhana berbasis web yang menggunakan:
- ⚙️ Backend: Express.js + MariaDB
- 🌐 Frontend: React + Vite + TypeScript
- 🔐 Fitur: Login, Register, CRUD Catatan, Pencarian Catatan, dan Autentikasi JWT

---

## 🚀 Fitur Utama

- Autentikasi pengguna (register & login)
- Tambah, lihat, edit, hapus catatan
- Pencarian catatan
- Disimpan ke database MariaDB
- Token JWT untuk autentikasi
- Frontend modern dengan React + Vite

---

## 💾 Setup Database

### 1. Install MariaDB dan buat user

```bash
sudo mariadb
```

```
CREATE DATABASE notes_db;
CREATE USER 'notes_user'@'localhost' IDENTIFIED BY 'notesapp';
GRANT ALL ON notes_db.* TO 'notes_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

```bash
mariadb -u notes_user -p notes_db < database/notes_dump.sql
```

## 🛠️ Setup Backend

### 1. Masuk ke folder backend

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Buat file `.env`

Salin dari `.env.example` dan sesuaikan jika perlu


### 4. Jalankan server

```bash
npm run dev
```

Server akan berjalan di http://localhost:3000

## 🌐 Setup Frontend

### 1. Masuk ke folder frontend

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan app

```bash
npm run dev
```

Akses melalui http://localhost:5173

## 🔐 Login Demo

Gunakan akun dummy berikut:
- Email: `zaky@mail.com`
- Password: `zakypass`

