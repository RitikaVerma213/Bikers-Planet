import React from 'react'

const ManaliTable = () => {
  return (
    <>
      <h3>Manali Information</h3>
      <table className="table table-hover border">
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Capital</b>
          </td>
          <td className="p-2">Shimla</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Official Language</b>
          </td>
          <td className="p-2">Hindi and Pahari</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Area</b>
          </td>
          <td className="p-2">5503 square kilometers</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Main Cities</b>
          </td>
          <td className="p-2">Kullu, Solang Valley, Bhuntar, Kangra, Kasol, Rohtang</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Status</b>
          </td>
          <td className="p-2">City</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Official Tourism Website</b>
          </td>
          <td className=" text-decoration-none">
            <a href="https://himachaltourism.gov.in/destination/manali/">
            https://himachaltourism.gov.in/destination/manali/
            </a>
          </td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Major Railheads</b>
          </td>
          <td className="p-2">Joginder Nagar railway station</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Airport</b>
          </td>
          <td className="p-2">Kullu-Manali Airport</td>
        </tr>
      </table>
    </>
  )
}

export default ManaliTable;