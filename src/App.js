import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Form from './pages/Form';
import SignUp from './pages/SignUp';
import Worldmap from './pages/Worldmap';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
          <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/worldmap" element={<Worldmap />} />
      </Routes>
    </>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
