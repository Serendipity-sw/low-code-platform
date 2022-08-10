import React from 'react'
import style from '../index.pcss'
import { Collapse, InputNumber, Select } from 'antd'
import { fontFamilyList, fontStyleMapList, textAlignMapList } from '../../../../../../utils/font-style-util'
import ColorPickerDropDown from '../../../../../../../../components/color-picker-drop-down'
import { useDispatch, useSelector } from 'react-redux'
import { findStyleAttributes } from '../../../../../../utils/find-style-attributes'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'
import IconFont from '../../../../../../../../components/icon-font'

export default props => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const selectControlsList = _ => cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )

  const changeSelectControlsItem = ( value, keyName ) => {
    const list = selectControlsList()
    list.forEach( item => {
      item.style[keyName] = value
    } )
    dispatch( EditPageItemList( list ) )
  }

  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <Collapse defaultActiveKey={ [ 'font-style' ] }>
        <Collapse.Panel header="字体" key="font-style">
          <div className={ style.row }>
            <span className={ style.columnTitle }>字体</span>
            <div className={ style.inputArea }>
              <Select options={ fontFamilyList.map( item => ( { label: item, value: item } ) ) }
                      value={ findStyleAttributes( pageContentData, selectControls, 'fontFamily' ) }
                      onChange={ value => changeSelectControlsItem( value, 'fontFamily' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>字号</span>
            <div className={ style.inputArea }>
              <InputNumber min={ 10 } max={ 99 }
                           value={ findStyleAttributes( pageContentData, selectControls, 'fontSize' )?.replace( 'px', '' ) }
                           onChange={ value => changeSelectControlsItem( `${ value }px`, 'fontSize' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>字形</span>
            <div className={ style.inputArea }>
              <Select options={ fontStyleMapList }
                      value={ findStyleAttributes( pageContentData, selectControls, 'fontStyle' ) }
                      onChange={ value => changeSelectControlsItem( value, 'fontStyle' ) }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>对齐方式</span>
            <div className={ style.inputArea }>
              <Select options={ textAlignMapList }
                      value={ findStyleAttributes( pageContentData, selectControls, 'textAlign' ) }
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
                           value={ findStyleAttributes( pageContentData, selectControls, 'letterSpacing' )?.replace( 'px', '' ) }
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
              <InputNumber precision={ 2 } min={ 0 } max={ 99 }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>大小</span>
            <div className={ style.inputArea }>
              <InputNumber precision={ 2 } min={ 0 } max={ 100 }/>
            </div>
          </div>
          <div className={ style.row }>
            <span className={ style.columnTitle }>图片位置</span>
            <div className={ style.inputArea }>
              <InputNumber precision={ 2 } min={ 0 } max={ 99 }/>
            </div>
          </div>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}