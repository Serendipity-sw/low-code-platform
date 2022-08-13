import React from 'react'


export default props => {

  return (
    <div id={ props.id } style={ props.style }>
      { props.data }
    </div>
  )
}