import React from 'react'

const GoaTable = () => {
  return (
    <>
      <h3>Goa Information</h3>
      <table className="table table-hover border">
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Capital</b>
          </td>
          <td className="p-2">Panaji</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Official Language</b>
          </td>
          <td className="p-2">Konkani</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Area</b>
          </td>
          <td className="p-2">3702 square kilometers</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Main Cities</b>
          </td>
          <td className="p-2">Vasco da Gama, Margao, Panaji, Mapusa and Ponda.</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Status</b>
          </td>
          <td className="p-2">State</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Official Tourism Website</b>
          </td>
          <td className=" text-decoration-none">
            <a href="https://goatourism.gov.in/">
            https://goatourism.gov.in/
            </a>
          </td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Major Railheads</b>
          </td>
          <td className="p-2">Margao and Vasco-da-Gama</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Airport</b>
          </td>
          <td className="p-2">Dabolim Airport</td>
        </tr>
      </table>
    </>
  )
}

export default GoaTable;