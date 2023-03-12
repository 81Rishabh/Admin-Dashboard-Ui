import React,{memo} from 'react'

function Child(props) {
 console.log(props)
 console.log('Child component is Called..');
  return (
    <h1>Child</h1>
  )
}

export default memo(Child);