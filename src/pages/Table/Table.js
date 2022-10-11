import React from 'react'
import "./Table.css";
const Table = () => {
  const Marketdata = [

  { name: "Key Market X", age: 23 },
  { name: "PMI USA", age:34}
]

  return (
    <div className="App">

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>

        </tr>
      </thead>
      <tbody>
        {
          Marketdata.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.name}</td>
                <td>{value.age}</td>

              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
  )
}

export default Table
