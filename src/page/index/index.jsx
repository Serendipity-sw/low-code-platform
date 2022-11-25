import React from 'react'
import style from './index.pcss'
import Header from './components/header'
import Toolbar from './components/toolbar'
import Canvas from './components/canvas'
import Panel from './components/panel'
import LayerArea from './components/layer-area'

export default _ => {

  return (
    <div className={style.init}>
      <Header/>
      <Toolbar/>
      <div className={style.editArea}>
        <LayerArea/>
        <Canvas/>
        <Panel/>
      </div>
    </div>
  )
}
