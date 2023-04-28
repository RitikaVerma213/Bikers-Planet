import React from 'react'

const BangaloreTable = () => {
  return (
    <>
      <h3>Bangalore Information</h3>
      <table className="table table-hover border">
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Capital</b>
          </td>
          <td className="p-2">Bengaluru</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Official Language</b>
          </td>
          <td className="p-2">Kannada</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Area</b>
          </td>
          <td className="p-2">741 square kilometers</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Main Cities</b>
          </td>
          <td className="p-2">Marathahalli, BTM Layout, HSR Layout, Domlur</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Status</b>
          </td>
          <td className="p-2">Capital</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Official Tourism Website</b>
          </td>
          <td className=" text-decoration-none">
            <a href="https://karnatakatourism.org/">
            https://karnatakatourism.org/
            </a>
          </td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Nicknames</b>
          </td>
          <td className="p-2">Silicon Valley of India</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Major Railheads</b>
          </td>
          <td className="p-2">Bengaluru City Railway Station and Yeswantpur Junction</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Airport</b>
          </td>
          <td className="p-2">Kempegowda International Airport </td>
        </tr>
      </table>
    </>
  )
}

export default BangaloreTable;