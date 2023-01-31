import React from 'react'
import "./css.css";

const Footer = () => {
  return (
    <div className="footer">
        <table>
            <tr>
                <td style={{borderLeft:"none"}}>0004 <br/>Bar
                </td>
                <td>1<br/>Beat</td>
                <td>-120+<br/>Tempo</td>
                <td>4/4<br/>Cmaj</td>
            </tr>
        </table>

        <button className='endjam'>End Jam</button>
        <span className='set'><i class="fa-solid fa-microphone"></i></span>
        <span className='set'><i class="fa-sharp fa-solid fa-video"></i></span>
        <span className='set'><i class="fa-sharp fa-solid fa-volume-high"></i></span>
    </div>
  )
}

export default Footer;