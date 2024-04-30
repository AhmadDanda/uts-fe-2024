import React,{ useState, useEffect } from "react";
import {Container} from "react-bootstrap"
import "./tabelStyle.css";

const Tabel = () => {
  const [data, setdata] = useState([]);
  useEffect (() => {
    const fetchData = async () => {
      try {
        const response = await fetch ("http://localhost:5000/api/users")
        const results = await response.json();
        setdata(results)
        } catch (error) {
          console.error("Error Menampilkan Data", error)
        }
      }
      fetchData()
},[])

return (
      <div className="table-container" id="data">
        <Container>
        <div className="table-card">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>No telepon</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map ((users) =>(
                <tr key={users.id}>
                  <td>{users.Nama}</td>
                  <td>{users.No_Telepon}</td>
                  <td>{users.Email}</td>
                </tr>
               ))}
            </tbody>
          </table>
        </div></Container></div>
    );
};

export default Tabel;