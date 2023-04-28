import React from "react";

const ShimlaTable = () => {
  return (
    <>
      <h3>Shimla Information</h3>
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
          <td className="p-2">55,673 square kilometers</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Main Cities</b>
          </td>
          <td className="p-2">Shimla, Kufri</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Status</b>
          </td>
          <td className="p-2">District</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Official Tourism Website</b>
          </td>
          <td className=" text-decoration-none">
            <a href="https://himachal.nic.in/en-in/">
              https://himachal.nic.in/en-in/
            </a>
          </td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Nicknames</b>
          </td>
          <td className="p-2">Queen of Hills</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Major Railheads</b>
          </td>
          <td className="p-2">Shimla Junction</td>
        </tr>
        <tr className="border-bottom">
          <td className="border-end p-2">
            <b>Airport</b>
          </td>
          <td className="p-2">Jubbarhatti Airport (Shimla)</td>
        </tr>
      </table>
    </>
  );
};

export default ShimlaTable;
