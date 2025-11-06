import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScholarShipTable from "./components/ScholarShipTable";
import MatchMeForm from "./components/MatchMeForm";
import Charts from "./components/Charts";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* HEADER */}
        <header className="bg-blue-600 text-white p-4 shadow-md flex flex-wrap justify-between items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
            CSR Scholarship Dashboard
          </h1>

          <nav className="flex gap-4 justify-center sm:justify-end w-full sm:w-auto">
            <Link to="/" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/match-me" className="hover:underline">
              Match Me
            </Link>
          </nav>
        </header>

        {/* MAIN */}
        <main className="p-4 sm:p-6 max-w-7xl mx-auto w-full">
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-6">
                  <ScholarShipTable />
                  <Charts />
                </div>
              }
            />
            <Route path="/match-me" element={<MatchMeForm />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 py-4 border-t mt-auto">
          © {new Date().getFullYear()} CSR Dashboard — Built by Faizan Shaikh
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
