import React, { lazy, useRef, useState } from 'react'
import style from './index.pcss'
import { Button, Modal } from 'antd'
import { throttle } from 'lodash'

const RichEdit = lazy( () => import('src/components/rich-edit') )

export default props => {

  const [ modalVisible, setModalVisible ] = useState( false )

  const richEditRef = useRef()

  const toggleModalVisible = _ => {
    if ( modalVisible ) {
      richEditRef.current?.save?.().then( outputData => {
        console.log( outputData )
      } )
    }
    setModalVisible( !modalVisible )
  }

  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <div className={ style.row }>
        <span className={ style.rowTitle }>文本内容</span>
        <Button className={ style.contentEdit } type="dashed" size="large"
                onClick={ throttle( toggleModalVisible, 200 ) }>
          内容编辑
        </Button>
      </div>
      <Modal title="文本编辑" visible={ modalVisible } onOk={ throttle( toggleModalVisible, 200 ) }
             onCancel={ throttle( toggleModalVisible, 200 ) }>
        <React.Suspense>
          <RichEdit ref={ richEditRef }/>
        </React.Suspense>
      </Modal>
    </div>
  )
}