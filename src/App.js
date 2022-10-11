import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Login from './pages/Login/Togin';
import New from './pages/new/New';
import AIinsight from './pages/AIInsight/AIinsight';
import NextStep from './pages/NextStep/Next';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Select from 'react-select';
import { useEffect, useState } from "react";
import Chart from "./components/chart/Chart";
import Mychart from "./components/Mychart/Mychart";
import Featured from "./components/Featured/Featured";


function App() {




  return(
    <div className="App">

    <BrowserRouter>

    <Routes>
      <Route path="/">
        <Route index element={<Home />} />

        <Route path="analytics" element={<List />} />
        <Route path="Planning" element={<Login />} />
        <Route path="Predictions" element={<New />} />
        <Route path="AIinsights" element={<AIinsight />} />
        <Route path="NextStep" element={<NextStep />} />


      </Route>


    </Routes>
  </BrowserRouter>

    <div>

  </div>




    </div>
  );





}

export default App;
