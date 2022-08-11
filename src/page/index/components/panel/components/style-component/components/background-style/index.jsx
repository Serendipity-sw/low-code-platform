import React, { useState } from 'react'
import { Collapse, message, Upload } from 'antd'
import style from '../index.pcss'
import ColorPickerDropDown from '../../../../../../../../components/color-picker-drop-down'
import IconFont from '../../../../../../../../components/icon-font'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { FindStyle } from '../../../../../../utils/find-style-attributes'
import { FileUpload } from '../../../../../../../../service/file'
import { useDispatch, useSelector } from 'react-redux'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'
import { cloneDeep } from 'lodash'

export default _ => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const [ uploadLoading, setUploadLoading ] = useState( false )

  const findStyle = FindStyle( pageContentData, selectControls )

  const selectControlsList = _ => cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )

  const changeSelectControlsItem = ( value, keyName ) => {
    const list = selectControlsList()
    list.forEach( item => {
      item.style[keyName] = value
    } )
    dispatch( EditPageItemList( list ) )
  }

  const beforeUpload = file => {
    if ( file.type.split( '/' )[0] !== 'image' ) {
      message.error( '上传文件格式错误,只支持图片格式!' )
      return false
    }
    setUploadLoading( true )
    FileUpload( file ).then( result => {
      changeSelectControlsItem( `url("${ result.data }")`, 'backgroundImage' )
    } ).finally( _ => setUploadLoading( false ) )
    return false
  }

  return (
    <Collapse defaultActiveKey={ [ 'bg-style' ] }>
      <Collapse.Panel header="背景" key="bg-style">
        <div className={ style.row }>
          <span className={ style.columnTitle }>背景颜色</span>
          <div className={ style.inputArea }>
            <ColorPickerDropDown colorType={ 'backgroundColor' }>
              <IconFont className={ style.selectColor } name="#icon-youqitiaoseban"/>
            </ColorPickerDropDown>
          </div>
        </div>
        <div className={ style.row }>
          <span className={ style.columnTitle }>图片</span>
          <div className={ style.inputArea }>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              accept="image/*"
              showUploadList={ false }
              beforeUpload={ beforeUpload }
            >
              { findStyle?.backgroundImage ? (
                <div style={ {
                  width: '100%',
                  height: '100%',
                  backgroundSize: '100% 100%',
                  backgroundImage: findStyle?.backgroundImage
                } }/>
              ) : (
                <div>
                  { uploadLoading ? <LoadingOutlined/> : <PlusOutlined/> }
                  <div
                    style={ {
                      marginTop: 8
                    } }
                  >
                    上传
                  </div>
                </div>
              ) }
            </Upload>
          </div>
        </div>
      </Collapse.Panel>
    </Collapse>
  )
}