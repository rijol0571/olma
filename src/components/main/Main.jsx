import React from 'react'
import './Main.scss'
const Main = ({title, subtitle, buttons, bg}) => {
  return (
    <div style={{background:bg}} className='Hero'>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <ul>
            {buttons.map((i, inx)=>(
                <li key={inx}>{i}</li>
            ))}
        </ul>
    </div>
  )
}

export default Main