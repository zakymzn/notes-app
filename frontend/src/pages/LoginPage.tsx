import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { baseurl } from "../values/baseurl";
import NavBar from "../components/NavBar";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseurl}/auth/login`, {
        email,
        password,
      });

      const token = res.data.token;
      localStorage.setItem("token", token); // simpan token
      alert("Login berhasil!");
      navigate("/notes"); // redirect ke halaman notes
    } catch (err: any) {
      setError(
        err.response?.data?.message || err.message || "Terjadi kesalahan",
      );
    }
  };

  return (
    <div>
      <NavBar />
      <div className="place-self-center w-full sm:w-1/2 xl:w-1/3 mx-4 mt-40 p-6 border border-gray-300 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-xl px-3 py-2"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-xl px-3 py-2"
            />
          </div>

          <button type="submit" className="flex flex-row space-x-2 mt-4 px-4 py-2 border border-gray-300 rounded-full font-semibold hover:text-white hover:fill-white hover:bg-black hover:cursor-pointer transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" /></svg>
            <p>Login</p>
          </button>
        </form>

        <p className="mt-4">
          Belum punya akun? <Link to="/register" className="text-sky-500 hover:text-sky-300 transition-all duration-200">Registrasi di sini</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

