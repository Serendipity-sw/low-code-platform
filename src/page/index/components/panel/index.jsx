import React, { startTransition, useState, lazy } from 'react'
import style from './index.pcss'
import { Drawer, Segmented } from 'antd'
import { menuTypeMap } from './store/menu-type'
import { useSelector } from 'react-redux'
import { controlsType } from '../../utils/controls-type'

const FontPanel = lazy( () => import('./components/font-panel') )

export default _ => {

  const [ selectTab, setSelectTab ] = useState( menuTypeMap.style.value )

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const delaySetSelectTab = value => {
    startTransition( _ => {
      setSelectTab( value )
    } )
  }

  const componentLoad = _ => {
    if ( selectControls.length === 1 ) {
      switch ( pageContentData.find( item => selectControls.includes( item.id ) )?.controls ) {
        case controlsType.div.name:
          return <FontPanel selectTab={ selectTab } className={ style.none }/>
        default:
          return <></>
      }
    }
    return <></>
  }

  return (
    <Drawer
      title="操作面板"
      placement="right"
      closable={ false }
      visible={ selectControls.length === 1 }
      mask={ false }
      getContainer={ false }
      className={ style.init }
    >
      <div className={ style.drawerArea }>
        <div className={ style.segmented }>
          <Segmented value={ selectTab } onChange={ value => delaySetSelectTab( value ) }
                     options={ Object.entries( menuTypeMap ).map( item => item[1] ) }/>
        </div>
        <React.Suspense>
          { componentLoad() }
        </React.Suspense>
      </div>
    </Drawer>
  )
}