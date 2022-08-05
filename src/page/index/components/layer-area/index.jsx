import React, { useState } from 'react'
import style from './index.pcss'
import Collapse from '../../../../components/collapse'
import IconFont from '../../../../components/icon-font'
import { throttle } from 'lodash'

export default _ => {
  const [ isOpened, setIsOpened ] = useState( true )

  const clickOpened = _ => {
    setIsOpened( !isOpened )
  }

  const collapseWorkCallback = _ => {
    debugger
  }

  return (
    <Collapse className={ style.init } direction="width" isOpened={ isOpened } onRest={ collapseWorkCallback }>
      <div className={ style.init }>
        <header className={ style.header }>
          <span className={ style.title }>
            <IconFont className={ style.icon } name="#icon-zengjiatuceng" onClick={ throttle( clickOpened, 200 ) }/>
            图层管理
          </span>
          <IconFont className={ style.hideIcon } name="#icon-zhedie1" onClick={ throttle( clickOpened, 200 ) }/>
        </header>
      </div>
    </Collapse>
  )
}