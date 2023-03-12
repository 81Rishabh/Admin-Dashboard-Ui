import React from 'react'

function Progress({progress}) {
  const progresStyles = {
    width : '150px',
    height : '6px',
    borderRadius : '50px',
    background : '#f9f9f9'
  }

  const progressFillStyle = {
     width : progress,
     height: '6px',
     borderRadius : '50px',
     background : '#4C4C4C'
  }
  return (
    <div style={progresStyles}>
       <div style={progressFillStyle}></div>
    </div>
  )
}

export default Progress