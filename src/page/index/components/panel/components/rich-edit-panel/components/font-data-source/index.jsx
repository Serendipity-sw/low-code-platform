import React, { lazy, startTransition, useRef, useState } from 'react'
import style from './index.pcss'
import { Button, Modal } from 'antd'
import { cloneDeep, throttle } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'

const RichEdit = lazy( () => import('src/components/rich-edit') )

export default props => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const selectControlsList = _ => cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )

  const [ modalVisible, setModalVisible ] = useState( false )

  const richEditRef = useRef()

  const toggleModalVisible = _ => {
    if ( !modalVisible ) {
      richEditRef.current?.setData( cloneDeep( pageContentData.find( item => selectControls.includes( item.id ) ) )?.data )
    }
    setModalVisible( !modalVisible )
  }

  const handleSureBtn = _ => {
    toggleModalVisible()
    richEditRef.current?.save?.().then( outputData => {
      changeSelectControlsItem( outputData )
      richEditRef.current?.clear()
    } )
  }

  const changeSelectControlsItem = value => {
    startTransition( _ => {
      const list = selectControlsList()
      list.forEach( item => {
        item.data = value
      } )
      dispatch( EditPageItemList( list ) )
    } )
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
      <Modal className={style.richDialog} title="文本编辑" open={ modalVisible } onOk={ throttle( handleSureBtn, 200 ) }
             onCancel={ throttle( toggleModalVisible, 200 ) }>
        <React.Suspense>
          <RichEdit ref={ richEditRef }
                    data={ pageContentData.find( item => selectControls.includes( item.id ) )?.data }/>
        </React.Suspense>
      </Modal>
    </div>
  )
}
