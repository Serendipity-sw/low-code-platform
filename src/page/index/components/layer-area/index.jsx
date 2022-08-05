import React from 'react'
import style from './index.pcss'
import Collapse from '../../../../components/collapse'
import IconFont from '../../../../components/icon-font'
import { useSelector } from 'react-redux'

export default _ => {
  const layerOpened = useSelector( state => state.lowCodeData.layerOpened )

  return (
    <Collapse className={ style.init } direction="width" isOpened={ layerOpened }>
      <div className={ [ style.init, style.headerArea ].join( ' ' ) }>
        <header className={ style.header }>
          <span className={ style.title }>
            <IconFont className={ style.icon } name="#icon-zengjiatuceng"/>
            图层管理
          </span>
        </header>
      </div>
    </Collapse>
  )
}