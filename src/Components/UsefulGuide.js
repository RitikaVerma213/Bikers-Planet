import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom'; 

const UsefulGuide = () => {
  return (  
    <div className='border px-2 text-center'>
        <h3 className='pt-3 pb-2'>Useful Quick Guide</h3>
        <table className='table border-top'>
            <tr>
                <td className='border-dotted py-2'>
                    <Link to="/" className='text-decoration-none'>Bikers Planet</Link>
                </td>
            </tr>
            <tr>
                <td className='border-dotted py-2'>
                    <Link to="/Events" className='text-decoration-none'>Events</Link>
                </td>
            </tr>
            <tr>
                <td className='border-dotted py-2'>
                    <Link to="/FAQs" className='text-decoration-none'>FAQs</Link>
                </td>
            </tr>
            <tr>
                <td className='pt-2 pb-1'>
                    <u>Places to Ride</u>
                </td>
            </tr>
            <tr>
                <td className='border-dotted py-2'>
                    <Link to="/Chandigarh" className='text-decoration-none'>Chandigarh</Link>
                </td>
            </tr>
            <tr>
                <td className='border-dotted py-2'>
                    <Link to="/Shimla" className='text-decoration-none'>Shimla</Link>
                </td>
            </tr>
            <tr>
                <td className='border-dotted py-2'>
                    <Link to="/Manali" className='text-decoration-none'>Manali</Link>
                </td>
            </tr>
            <tr>
                <td className='border-dotted py-2'>
                    <Link to="/Mumbai" className='text-decoration-none'>Mumbai</Link>
                </td>
            </tr>
            <tr>
                <td className='border-dotted py-2'>
                    <Link to="/Goa" className='text-decoration-none'>Goa</Link>
                </td>
            </tr>
            <tr>
                <td className='pt-2'>
                    <Link to="/Bangalore" className='text-decoration-none'>Bangalore</Link>
                </td>
            </tr>          
        </table>
    </div>
  )
}

export default UsefulGuide;