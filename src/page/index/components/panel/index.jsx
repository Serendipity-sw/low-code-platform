import React, { useState } from 'react'
import style from './index.pcss'
import { Drawer, Segmented } from 'antd'
import { menuTypeMap } from './store/menu-type'
import StyleComponent from './components/style-component'

export default _ => {

  const [ selectTab, setSelectTab ] = useState( menuTypeMap.style.value )

  return (
    <Drawer
      title="操作面板"
      placement="right"
      closable={ false }
      visible={ true }
      mask={ false }
      getContainer={ false }
      className={ style.init }
    >
      <div className={ style.drawerArea }>
        <div className={style.segmented}>
          <Segmented value={ selectTab } onChange={ value => setSelectTab( value ) }
                     options={ Object.entries( menuTypeMap ).map( item => item[1] ) }/>
        </div>
        <StyleComponent className={ menuTypeMap.style.value === selectTab || style.none }/>
      </div>
    </Drawer>
  )
}