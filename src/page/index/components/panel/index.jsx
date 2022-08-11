import React, { useState } from 'react'
import style from './index.pcss'
import { Drawer, Segmented } from 'antd'
import { menuTypeMap } from './store/menu-type'
import StyleComponent from './components/style-component'
import { useSelector } from 'react-redux'
import DataSource from './components/data-source'

export default _ => {

  const [ selectTab, setSelectTab ] = useState( menuTypeMap.style.value )

  const { selectControls } = useSelector( state => state.lowCodeData )

  return (
    <Drawer
      title="操作面板"
      placement="right"
      closable={ false }
      visible={ selectControls.length > 0 }
      mask={ false }
      getContainer={ false }
      className={ style.init }
    >
      <div className={ style.drawerArea }>
        <div className={ style.segmented }>
          <Segmented value={ selectTab } onChange={ value => setSelectTab( value ) }
                     options={ Object.entries( menuTypeMap ).map( item => item[1] ) }/>
        </div>
        <StyleComponent className={ menuTypeMap.style.value === selectTab || style.none }/>
        <DataSource className={ menuTypeMap.data.value === selectTab || style.none }/>
      </div>
    </Drawer>
  )
}