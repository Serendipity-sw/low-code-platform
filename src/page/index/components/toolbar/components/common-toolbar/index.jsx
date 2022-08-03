import React from 'react'
import style from './index.pcss'
import Copy from './components/copy'
import Hide from './components/hide'
import Combination from './components/combination'
import Top from './components/top'
import ToIt from './components/to-it'
import GlideLine from './components/glide-line'
import BoldFont from './components/bold-font'
import DelLine from './components/del-line'
import ShadowFont from './components/shadow-font'
import FontColor from './components/font-color'
import BackgroundColor from './components/background-color'
import AlignItems from './components/align-items'
import Lock from './components/lock'

export default props => {
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <Copy/>
      <Hide/>
      <Combination/>
      <Top/>
      <ToIt/>
      <GlideLine/>
      <BoldFont/>
      <DelLine/>
      <ShadowFont/>
      <FontColor/>
      <BackgroundColor/>
      <AlignItems/>
      <Lock/>
    </div>
  )
}