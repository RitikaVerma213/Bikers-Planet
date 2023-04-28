import React from 'react'

const MumbaiTable = () => {
  return (
    <>
      <h3>Mumbai Information</h3>
      <table className="table table-hover border">
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Capital</b>
          </td>
          <td className="p-2">Mumbai</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Official Language</b>
          </td>
          <td className="p-2">Marathi</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Area</b>
          </td>
          <td className="p-2">603.4 square kilometers</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Main Cities</b>
          </td>
          <td className="p-2">Thana, Ulhasnagar, Kalyan, Bhiwandi, Pune, Nashik</td>
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
            <a href="https://www.maharashtratourism.gov.in/-/mumbai-city">
            https://www.maharashtratourism.gov.in/-/mumbai-city
            </a>
          </td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Nicknames</b>
          </td>
          <td className="p-2">Financial capital of India, City of Dreams</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Major Railheads</b>
          </td>
          <td className="p-2">Chhatrapati Shivaji Terminus, Mumbai Central Railway Station</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Airport</b>
          </td>
          <td className="p-2">Chhatrapati Shivaji Maharaj International Airport Mumbai</td>
        </tr>
      </table>
    </>
  )
}

export default MumbaiTable;