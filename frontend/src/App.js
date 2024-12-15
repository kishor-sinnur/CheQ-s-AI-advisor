import React from "react";
import './App.css';
import Chat from './components/Chat';           // Import Chat component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import Recommendations from './components/Recommendations'; // Import Recommendations component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> CHEQ-AI Credit Advisor</h1>
        <p>Welcome to your CHEQ-AI credit advisor.</p>
      </header>
      
      {/* Main Content Section */}
      <main className="App-content">
        {/* Dashboard Component */}
        <section className="Dashboard-section">
          <Dashboard />
        </section>

        {/* Chat Component */}
        <section className="Chat-section">
          <Chat />
        </section>

        {/* Recommendations Component */}
        <section className="Recommendations-section">
          <Recommendations />
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 CHEQ-AI Credit Advisor</p>
      </footer>
    </div>
  );
}
export default App;