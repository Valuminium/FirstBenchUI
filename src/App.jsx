import React from "react";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";

function App() {
  return (
    <div className="bg-zinc-200 min-h-screen">
      <Navbar />

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4 py-4 h-full">
        <div className="grid grid-cols-[auto_1fr] h-full gap-8">
          <Sidebar /> 
          <Dashboard /> 
        </div>
      </main>
    </div>
  );
}

export default App;
