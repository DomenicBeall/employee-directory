import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

import Table from "./components/Table";

const App = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Get employee information
    axios.get("https://randomuser.me/api/?results=500&nat=au")
    .then(response => {
      setEmployees(response.data.results);
    });
  }, []);

  return (
    // Here lies our app
    <div className="container">
      <h1>Employee Directory</h1>
      <Table employees={employees}/>
    </div>
  );
}

export default App;
