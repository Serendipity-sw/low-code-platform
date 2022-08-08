import React from 'react'
import style from '../index.pcss'
import { InputNumber, Select } from 'antd'

export default props => {
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <div className={ style.row }>
        <span className={ style.columnTitle }>字体</span>
        <div className={ style.inputArea }>
          <Select/>
        </div>
      </div>
      <div className={ style.row }>
        <span className={ style.columnTitle }>字号</span>
        <div className={ style.inputArea }>
          <InputNumber min={ 10 } max={ 99 }/>
        </div>
      </div>
      <div className={ style.row }>
        <span className={ style.columnTitle }>字形</span>
        <div className={ style.inputArea }>
          <Select/>
        </div>
      </div>
      <div className={ style.row }>
        <span className={ style.columnTitle }>对齐方式</span>
        <div className={ style.inputArea }>
          <Select/>
        </div>
      </div>
      <div className={ style.row }>
        <span className={ style.columnTitle }>字体颜色</span>
        <div className={ style.inputArea }>
          <Select/>
        </div>
      </div>
      <div className={ style.row }>
        <span className={ style.columnTitle }>间距</span>
        <div className={ style.inputArea }>
          <InputNumber precision={ 2 } min={ 0 } max={ 99 }/>
        </div>
      </div>
      <span className={ style.rowTitle }>背景</span>
      <div className={ style.row }>
        <span className={ style.columnTitle }>背景颜色</span>
        <div className={ style.inputArea }>
          <Select/>
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
    </div>
  )
}