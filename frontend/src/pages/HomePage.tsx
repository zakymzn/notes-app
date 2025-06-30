import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import home_vector from "../assets/home_vector.svg";
import security_vector from "../assets/security_vector.svg";
import dark_logo_transparent from "../assets/dark_logo_transparent.svg"
import github_icon from "../assets/github-mark-white.svg";
import linkedin_icon from "../assets/InBug-White.png";
import facebook_icon from "../assets/Facebook_Logo_Secondary.png";
import instagram_icon from "../assets/Instagram_Glyph_White.svg";

AOS.init()

function HomePage() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      if (window.pageYOffset > 100) { // Show button after scrolling 300px down
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  return (
    <div>
      <NavBar />
      {/* Hero Section */}
      <section id="home" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-6xl font-bold m-16">Selamat Datang di Notes App</h1>
            <p className="text-3xl font-medium m-16">
              Aplikasi pencatatan pribadi yang sederhana, aman, dan cepat. Cocok untuk ide, jurnal, atau to-do list harian.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
            <img src={home_vector} alt="home_vector" className="m-16 place-self-center" />
          </div>
        </div>
        <div className="flex justify-center space-x-4 p-16">
          <div data-aos="zoom-in" data-aos-duration="500" className="text-xl border-4 border-black rounded-full font-semibold px-4 py-2 transition-all duration-200 hover:text-white hover:bg-black hover:cursor-pointer">
            <Link to={"/login"}>
              Login
            </Link>
          </div>
          <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500" className="text-xl border-4 border-black rounded-full font-semibold px-4 py-2 transition-all duration-200 hover:text-white hover:bg-black hover:cursor-pointer">
            <Link to={"/register"}>
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section id="features" className="bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,138.7C672,160,768,160,864,165.3C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <h2 className="text-4xl text-center font-semibold m-16">Fitur Unggulan</h2>
        <ul className="list-none gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-16">
          <li data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000" className="bg-gray-200 shadow-lg flex border-4 border-black rounded-2xl p-4 space-x-4 space-y-4 items-center">
            <div>
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-80h40v-100h100v-40H740v-100h-40v100H600v40h100v100Z" /></svg>
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Tambah Catatan</p>
              <p>Simpan ide, tugas, atau catatan penting kapan saja.</p>
            </div>
          </li>
          <li data-aos="flip-left" data-aos-delay="200" data-aos-duration="1000" className="bg-gray-200 shadow-lg flex border-4 border-black rounded-2xl p-4 space-x-4 space-y-4 items-center">
            <div>
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#000000"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" /></svg>
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Edit Catatan</p>
              <p>Ubah isi catatan dengan mudah langsung dari dashboard.</p>
            </div>
          </li>
          <li data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000" className="bg-gray-200 shadow-lg flex border-4 border-black rounded-2xl p-4 space-x-4 space-y-4 items-center">
            <div>
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Hapus Catatan</p>
              <p>Buang catatan yang sudah tidak dibutuhkan lagi.</p>
            </div>
          </li>
          <li data-aos="flip-left" data-aos-delay="400" data-aos-duration="1000" className="bg-gray-200 shadow-lg flex border-4 border-black rounded-2xl p-4 space-x-4 space-y-4 items-center">
            <div>
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#000000"><path d="M200-800v241-1 400-640 200-200Zm0 720q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v100q-19-8-39-12.5t-41-6.5v-41H480v-200H200v640h241q16 24 36 44.5T521-80H200Zm460-120q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM864-40 756-148q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T812-204L920-96l-56 56Z" /></svg>
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Pencarian</p>
              <p>Cari catatan berdasarkan judul atau isi catatan dengan cepat.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Keamanan Section */}
      <section id="security" className="bg-gray-400 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e5e7eb" fillOpacity="1" d="M0,288L48,293.3C96,299,192,309,288,282.7C384,256,480,192,576,186.7C672,181,768,235,864,213.3C960,192,1056,96,1152,85.3C1248,75,1344,149,1392,186.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="flex flex-wrap-reverse lg:grid lg:grid-cols-2 items-center">
          <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="p-16 mx-auto">
            <img src={security_vector} alt="security_vector" />
          </div>
          <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
            <h2 className="text-4xl text-center lg:text-left font-semibold m-16">Keamanan Terjamin</h2>
            <p className="text-2xl font-medium mx-16">
              Notes App menggunakan <strong>JWT (JSON Web Token)</strong> untuk menjaga sesi login tetap aman, dan
              <strong> hashing password dengan bcrypt</strong> untuk memastikan data pribadi kamu terlindungi.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="call-to-action" className="bg-gray-600 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#99a1af" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,176C384,160,480,160,576,176C672,192,768,224,864,218.7C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <h2 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="text-5xl font-bold text-center m-16">Ayo mulai mencatat hari ini!</h2>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duratoin="1000" className="text-2xl text-center mx-16">Buat akun sekarang dan rasakan kemudahan mencatat tanpa batas.</p>
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="text-center py-16">
          <Link to={"/register"} className="text-xl border-4 border-white rounded-full font-semibold px-4 py-2 transition-all duration-200 hover:text-black hover:bg-white hover:cursor-pointer">
            Daftar Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4a5565" fillOpacity="1" d="M0,64L48,58.7C96,53,192,43,288,74.7C384,107,480,181,576,181.3C672,181,768,107,864,90.7C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="w-fit mx-auto my-16 px-16 space-x-0 space-y-16 grid grid-cols-1 md:space-x-32 md:grid-cols-3">
          <div>
            <img src={dark_logo_transparent} alt="dark_logo_transparent" className="w-3xs my-4" />
            <p>Dikembangkan oleh:</p>
            <p className="text-lg font-medium">Ma'mur Zaky Nurrokhman</p>
            <ul className="my-8 flex justify-between">
              <li className="w-8">
                <a href="https://github.com/zakymzn" target="_blank">
                  <img src={github_icon} alt="github" />
                </a>
              </li>
              <li className="w-8">
                <a href="https://www.linkedin.com/in/zakymzn" target="_blank">
                  <img src={linkedin_icon} alt="linkedin" />
                </a>
              </li>
              <li className="w-8">
                <a href="https://www.facebook.com/mamur.nurrokhman" target="_blank">
                  <img src={facebook_icon} alt="facebook" />
                </a>
              </li>
              <li className="w-8">
                <a href="https://www.instagram.com/zaky.mzn" target="_blank">
                  <img src={instagram_icon} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-8">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-sky-500 transition-all duration-200">Beranda</a>
              </li>
              <li>
                <a href="#features" className="hover:text-sky-500 transition-all duration-200">Fitur</a>
              </li>
              <li>
                <a href="#security" className="hover:text-sky-500 transition-all duration-200">Keamanan</a>
              </li>
              <li>
                <a href="https://documenter.getpostman.com/view/20332382/2sB2xFfnZo" target="_blank" className="hover:text-sky-500 transition-all duration-200">Dokumentasi API</a>
              </li>
              <li>
                <Link to={"/login"} className="hover:text-sky-500 transition-all duration-200">Login</Link>
              </li>
              <li>
                <Link to={"/register"} className="hover:text-sky-500 transition-all duration-200">Register</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-8">Build Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://react.dev/" target="_blank" className="hover:text-sky-500 transition-all duration-200">React</a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/" target="_blank" className="hover:text-sky-500 transition-all duration-200">TypeScript</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" className="hover:text-sky-500 transition-all duration-200">TailwindCSS</a>
              </li>
              <li>
                <a href="https://expressjs.com/" target="_blank" className="hover:text-sky-500 transition-all duration-200">Express.js</a>
              </li>
              <li>
                <a href="https://nodejs.org/" target="_blank" className="hover:text-sky-500 transition-all duration-200">Node.js</a>
              </li>
              <li>
                <a href="https://axios-http.com/" target="_blank" className="hover:text-sky-500 transition-all duration-200">Axios</a>
              </li>
              <li>
                <a href="https://mariadb.org/" target="_blank" className="hover:text-sky-500 transition-all duration-200">MariaDB</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="py-8 text-center">
          © {new Date().getFullYear()} Notes App by Ma'mur Zaky Nurrokhman
        </p>
      </footer>

      <button onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }} className={`${showButton ? '' : 'hidden'} fixed bottom-4 right-4 p-4 rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-black hover:fill-white hover:cursor-pointer hover:animate-pulse`}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" /></svg>
      </button>
    </div>
  )
}

export default HomePage;
