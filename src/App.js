import { useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import MainLayout from "./layout/MainLayout";

function App() {

  useEffect (() => {
    document.title='Dashboard';
  },[]);

  return (
    <div className="App">
    <MainLayout>
      <Dashboard></Dashboard>
    </MainLayout>
    </div>
  );
}
export default App;