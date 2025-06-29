import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { baseurl } from "../values/baseurl";
import NavBar from "../components/NavBar";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${baseurl}/auth/register`, {
        name,
        email,
        password,
      });
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message || err.message || "Registrasi gagal",
      );
    }
  };

  return (
    <div>
      <NavBar />
      <div className="place-self-center w-full sm:w-1/2 xl:w-1/3 mx-4 mt-40 p-6 border border-gray-300 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="Nama">Nama:</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Masukkan nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-xl px-3 py-2"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              required
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-xl px-3 py-2"
            />
          </div>

          <div className="mt-4">
            <label>Password:</label>
            <input
              type="password"
              required
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-xl px-3 py-2"
            />
          </div>

          <button type="submit" className="flex flex-row space-x-2 mt-4 px-4 py-2 rounded-full border border-gray-300 font-semibold hover:text-white hover:fill-white hover:bg-black hover:cursor-pointer transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
            <p>Register</p>
          </button>
        </form>

        <p className="mt-4">
          Sudah punya akun? <Link to="/login" className="text-sky-500 hover:text-sky-300 transition-all duration-200">Login di sini</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
