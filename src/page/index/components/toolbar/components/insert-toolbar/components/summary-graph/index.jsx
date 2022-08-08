import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import DropDownPanel from '../../../../../../../../components/drop-down-panel'
import { controlsType } from '../../../../../../utils/controls-type'
import { useDispatch, useSelector } from 'react-redux'
import { ClearSelectedInsertControls, SelectedInsertControls } from '../../../../../../store/lowCodeDataReducers'

export default _ => {

  const insertControlsSelected = useSelector( state => state.lowCodeData.insertControlsSelected )

  const dispatch = useDispatch()

  const handleControlsClick = selected => {
    dispatch( insertControlsSelected === selected ? ClearSelectedInsertControls() : SelectedInsertControls( selected ) )
  }

  const dropDownList = [
    {
      image: 'https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*aetpSLfcpFIAAAAAAAAAAABkARQnAQ',
      name: '折线图',
      selected: controlsType.chartLine.name,
      onClick: handleControlsClick
    },
    {
      image: 'https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*377_TZgcotkAAAAAAAAAAABkARQnAQ',
      name: '柱状图',
      selected: controlsType.chartColumn.name,
      onClick: handleControlsClick
    },
    {
      image: 'https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*62ClRKVbiIYAAAAAAAAAAABkARQnAQ',
      name: '条形图',
      selected: controlsType.chartBar.name,
      onClick: handleControlsClick
    },
    {
      image: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*kiaxRq6B7lsAAAAAAAAAAABkARQnAQ',
      name: '饼图',
      selected: controlsType.chartPie.name,
      onClick: handleControlsClick
    }
  ]

  return (
    <DropDownPanel data={ dropDownList }>
      <div className={ style.column }>
        <IconFont className={ style.icon } name="#icon-tongji"/>
        图表
        <IconFont className={ style.dropDownIcon } name="#icon-xiala"/>
      </div>
    </DropDownPanel>
  )
}