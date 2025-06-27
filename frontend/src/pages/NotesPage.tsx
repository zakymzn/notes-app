import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editNote, setEditNote] = useState<number | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
      } catch (err: any) {
        console.error(err);
        setError("Gagal mengambil data catatan. Silakan login ulang.");
      }
    };
    fetchNotes();
  }, []);

  const resetForm = () => {
    setTitle('')
    setContent('')
    setEditNote(null)
  }

  const handleSubmitNote = async (e: React.FormEvent) => {
    // e.preventDefault();
    if (editNote !== null) {
      try {
        const res = await api.put(`/notes/${editNote}`, { title, content })
        if (!res.data.title || !res.data.content) {
          throw new Error("Data yang diterima tidak valid");
        }
        setNotes((prev) => prev.map((note) => (note.id === editNote ? { ...note, title, content } : note)))
        resetForm()
      } catch (err: any) {
        console.error(err);
        setError('Gagal mengedit catatan.')
      }
    } else {
      try {
        const res = await api.post('/notes', { title, content })
        setNotes((prev) => [res.data, ...prev])
        resetForm()
      } catch (err: any) {
        console.error(err);
        setError('Gagal menambahkan catatan.')
      }
    }
  }

  const handleDeleteNote = async (id: number) => {
    try {
      await api.delete(`/notes/${id}`)
      setNotes((prev) => prev.filter((note) => note.id !== id))
    } catch (err: any) {
      console.error(err);
      setError('Gagal menghapus catatan.')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {
        editMode && (
          <div id="add-note" className="fixed sm:w-2/3 md:w-2/3 lg:w-1/2 top-0 bottom-0 right-0 left-0 place-self-center p-6 border border-gray-300 bg-white rounded-xl shadow-lg z-[999]">
            <form onSubmit={handleSubmitNote}>
              <div className="flex flex-row justify-between">
                <h4 className="text-3xl font-bold mb-4">Buat Catatan Baru</h4>
              </div>
              <input type="text" name="title" placeholder="Judul" required value={title} onChange={(e) => setTitle(e.target.value)} className="mt-2 block w-full border border-gray-300 rounded-full px-3 py-2" />
              <textarea name="content" rows={10} placeholder="Tulis catatan..." required value={content} onChange={(e) => setContent(e.target.value)} className="mt-4 block w-full border border-gray-300 rounded-xl px-3 py-2" />
              <div className="flex space-x-2 mt-4">
                <button type="submit" className="flex flex-row space-x-2 border border-gray-300 px-4 py-2 rounded-full font-semibold transition-all duration-200 hover:text-white hover:fill-white hover:bg-black hover:cursor-pointer">
                  {editNote ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" /></svg>
                      <p>Simpan Perubahan</p>
                    </>
                    :
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                      <p>Tambah</p>
                    </>
                  }
                </button>
                <button onClick={() => {
                  setEditMode(false)
                  resetForm()
                }} className="flex flex-row space-x-2 border border-gray-300 px-4 py-2 rounded-full font-semibold transition-all duration-200 hover:text-white hover:fill-white hover:bg-red-500 hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                  <p>Batal</p>
                </button>
              </div>
            </form>
          </div>
        )
      }
      <div className={editMode ? "blur-sm" : ""}>
        <nav className="border-b border-gray-300 p-4 flex justify-between items-center sticky top-0 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>

          <input type="text" name="search" placeholder="Cari catatan..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="block w-full border border-gray-300 rounded-full mx-4 px-3 py-2" />

          <button onClick={() => setEditMode(true)} className="border border-gray-300 rounded-full px-2 py-2 transition-all duration-200 hover:bg-black hover:fill-white hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
          </button>

          <button onClick={handleLogout} className="flex md:space-x-2 border border-gray-300 font-semibold mx-4 px-2 md:px-4 py-2 rounded-full transition-all duration-200 hover:text-white hover:fill-white hover:bg-red-500 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
            <p className="hidden md:inline">Logout</p>
          </button>
        </nav>
        <div className="flex md:flex-row flex-col space-x-8 items-start justify-center mx-auto p-6">
          <div id="notes-list" className="w-full p-6 border border-gray-300 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Daftar Catatan</h2>
            {error && <p>{error}</p>}
            {notes.length === 0 ? (
              <p>Belum ada catatan.</p>
            ) : (
              <ul className="list-none grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes
                  .filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.content.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((note) => (
                    <li key={note.id} className="border border-gray-300 flex flex-col justify-between rounded-xl p-6 shadow-lg">
                      <div>
                        <h4 className="text-xl font-semibold pb-2 border-b border-gray-300">{note.title}</h4>
                        <small>{new Date(note.createdAt).toLocaleString()}</small>
                        <p className="my-4 line-clamp-4">{note.content}</p>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <button onClick={() => {
                          setTitle(note.title)
                          setContent(note.content)
                          setEditNote(note.id)
                          setEditMode(true)
                        }} className="flex space-x-2 px-4 py-2 rounded-full border border-gray-300 transition-all duration-200 hover:bg-black hover:text-white hover:fill-white hover:cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                          <p className="font-semibold">Edit</p>
                        </button>

                        <button onClick={() => handleDeleteNote(note.id)} className="flex space-x-2 border border-gray-300 transition-all duration-200 hover:bg-red-500 hover:text-white hover:fill-white px-4 py-2 rounded-full hover:cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                          <p className="font-semibold">Hapus</p>
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>

        <a href="#notes-list" className="fixed bottom-4 right-4 p-4 rounded-full border border-gray-300 bg-white shadow-lg transition-all duration-200 hover:bg-black hover:fill-white hover:cursor-pointer hover:animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" /></svg>
        </a>
      </div>
    </>
  );
}

export default NotesPage;
