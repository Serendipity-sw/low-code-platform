import React from 'react'
import Selecto from "react-selecto";

export default props=>{
  return (
    <Selecto
      container={props.container}
      selectableTargets={[".target", document.querySelector(".target2")]}
      selectByClick={true}
      selectFromInside={true}
      continueSelect={false}
      toggleContinueSelect={"shift"}
      keyContainer={props.container}
      hitRate={100}
      onSelectEnd={e => {
        debugger

      }}
    />
  )
}