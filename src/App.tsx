import { Outlet } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import axios from "axios";
import { useState } from "react";

function App() {
  axios
    .post("http://127.0.0.1:450/users/isExist", {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDQkby5ibkN6dlJ5S2dnN3N3MzRCSnkzdVZvQk8veEdrL2Y1c2o3cTYudGoyeGxIVEZwTERiNnEiLCJ1c2VyX2lkIjoiZGNhNmI2NmItMmRmYS00YmYxLTk4ODYtY2RhMThhYTA0NzY4Iiwicm9sZSI6InVzZXIiLCJpYXQiOj",
    })
    .then((res) => {
      console.log(res);
    });
  // const [allow, setAllow] = useState(false);
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDQkby5ibkN6dlJ5S2dnN3N3MzRCSnkzdVZvQk8veEdrL2Y1c2o3cTYudGoyeGxIVEZwTERiNnEiLCJ1c2VyX2lkIjoiZGNhNmI2NmItMmRmYS00YmYxLTk4ODYtY2RhMThhYTA0NzY4Iiwicm9sZSI6InVzZXIiLCJpYXQiOj";
  // axios
  //   .post("http://127.0.0.1:450/users/isExist", {
  //     token: token,
  //   })
  //   .then((res) => {
  //     const user = res.data.user;
  //     console.log(user);
  //     if (user.role === "admin") {
  //       setAllow(true);
  //     } else {
  //       setAllow(false);
  //     }
  //   })
  //   .catch((error) => console.log(error));
  // if (allow) {
  //   return (
  //     <>
  //       <Navbar />
  //       <Outlet />
  //       <Footer />
  //     </>
  //   );
  // } else {
  //   return <></>;
  // }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
    </>
  );
}

export default App;
