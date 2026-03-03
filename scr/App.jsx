import Boardsheeet from "./TicTacToe/Boardsheeet";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./Header";



function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Boardsheeet />}>Tic-Tac-Toe</Route>
        
      </Routes>




    </>
  )
}

export default App;