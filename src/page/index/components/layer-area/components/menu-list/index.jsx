import React, { useState } from 'react'
import style from './index.pcss'
import { Input, Modal, Tree } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { controlsType } from '../../../../utils/controls-type'
import IconFont from '../../../../../../components/icon-font'
import { EditPageItemTitleById, SelectControls } from '../../../../store/lowCodeDataReducers'
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu'

export default props => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const [ menuProps, toggleMenu ] = useMenuState()
  const [ anchorPoint, setAnchorPoint ] = useState( { x: 0, y: 0 } )
  const [ selectNode, setSelectNode ] = useState( { key: '', title: '' } )
  const [ editDialogVisible, setEditDialogVisible ] = useState( false )

  const pageContentDataProcess = data => {
    const objArray = Object.entries( controlsType )
    return data.map( modal => {
      let icon, title
      for ( const [ key, item ] of objArray ) {
        if ( item.name === modal.controls ) {
          icon = item.icon
          title = item.title
          break
        }
      }
      return { title: modal.alias ?? title, key: modal.id, icon: <IconFont name={ icon }/> }
    } )
  }

  const handleSelect = selectedKeys => {
    dispatch( SelectControls( selectedKeys ) )
  }

  const handleRightClick = ( { event: { clientX, clientY }, node: { key, title } } ) => {
    setAnchorPoint( { x: clientX, y: clientY } )
    setSelectNode( { key, title } )
    toggleMenu( true )
  }

  const toggleDialog = _ => setEditDialogVisible( !editDialogVisible )

  const handleSaveLayerTitle = _ => {
    dispatch( EditPageItemTitleById( selectNode ) )
    toggleDialog()
  }

  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <Tree
        onRightClick={ handleRightClick }
        showIcon
        selectedKeys={ selectControls }
        className="draggable-tree"
        blockNode
        treeData={ pageContentDataProcess( pageContentData ) }
        onSelect={ handleSelect }
      />
      <ControlledMenu { ...menuProps } anchorPoint={ anchorPoint }
                      onClose={ () => toggleMenu( false ) }>
        <MenuItem onClick={ toggleDialog }>修改名称</MenuItem>
      </ControlledMenu>
      <Modal className={ style.editDialog } title="图层名称" visible={ editDialogVisible } onOk={ handleSaveLayerTitle }
             onCancel={ toggleDialog }>
        <Input placeholder="图层名称" value={ selectNode.title }
               onChange={ ( { target: { value } } ) => setSelectNode( { ...selectNode, title: value } ) }/>
      </Modal>
    </div>
  )
}