// Importing global styles
import './App.css';

// Importing the main routing layout of the app
import Routings from './Routeslayout/Routings';

function App() {
  return (
    <main className="App">
      {/* Main routing component that includes Navbar, Routes, and Footer */}
      <Routings />
    </main>
  );
}

export default App; // Exporting the App component as the default export
