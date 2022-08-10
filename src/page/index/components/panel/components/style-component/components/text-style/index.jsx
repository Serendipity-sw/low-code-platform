import React, { useState } from 'react'
import style from '../index.pcss'
import { Collapse, InputNumber, message, Select, Upload } from 'antd'
import { fontFamilyList, fontStyleMapList, textAlignMapList } from '../../../../../../utils/font-style-util'
import ColorPickerDropDown from '../../../../../../../../components/color-picker-drop-down'
import { useDispatch, useSelector } from 'react-redux'
import { FindStyle } from '../../../../../../utils/find-style-attributes'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'
import IconFont from '../../../../../../../../components/icon-font'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { FileUpload } from '../../../../../../../../service/file'

export default props => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const [ uploadLoading, setUploadLoading ] = useState( false )

  const selectControlsList = _ => cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )

  const changeSelectControlsItem = ( value, keyName ) => {
    const list = selectControlsList()
    list.forEach( item => {
      item.style[keyName] = value
    } )
    dispatch( EditPageItemList( list ) )
  }

  const findStyle = FindStyle( pageContentData, selectControls )

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
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <Collapse defaultActiveKey={ [ 'font-style' ] }>
        <Collapse.Panel header="字体" key="font-style">
          <div className={ style.row }>
            <span className={ style.columnTitle }>字体</span>
            <div className={ style.inputArea }>
              <Select options={ fontFamilyList.map( item => ( { label: item, value: item } ) ) }
                      value={ findStyle?.fontFamily }
                      onChange={ value => changeSelectControlsItem( value, 'fontFamily' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>字号</span>
            <div className={ style.inputArea }>
              <InputNumber min={ 10 } max={ 99 }
                           value={ findStyle?.fontSize?.replace?.( 'px', '' ) }
                           onChange={ value => changeSelectControlsItem( `${ value }px`, 'fontSize' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>字形</span>
            <div className={ style.inputArea }>
              <Select options={ fontStyleMapList }
                      value={ findStyle?.fontStyle }
                      onChange={ value => changeSelectControlsItem( value, 'fontStyle' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>对齐方式</span>
            <div className={ style.inputArea }>
              <Select options={ textAlignMapList }
                      value={ findStyle?.textAlign }
                      onChange={ value => changeSelectControlsItem( value, 'textAlign' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>字体颜色</span>
            <div className={ style.inputArea }>
              <ColorPickerDropDown colorType={ 'color' }>
                <IconFont className={ style.selectColor } name="#icon-youqitiaoseban"/>
              </ColorPickerDropDown>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>间距</span>
            <div className={ style.inputArea }>
              <InputNumber min={ 0 } max={ 99 }
                           value={ findStyle?.letterSpacing?.replace?.( 'px', '' ) }
                           onChange={ value => changeSelectControlsItem( `${ value }px`, 'letterSpacing' ) }/>
            </div>
          </div>
        </Collapse.Panel>
      </Collapse>
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
    </div>
  )
}