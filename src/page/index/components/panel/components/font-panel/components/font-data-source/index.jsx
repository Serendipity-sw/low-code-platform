import React, { lazy } from 'react'
import style from './index.pcss'

const RichEdit = lazy( () => import('src/components/rich-edit') )

export default props => {
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <div className={ style.row }>
        <span className={ style.rowTitle }>文本内容</span>
        <React.Suspense>
          <div className={ style.content }>
            <RichEdit/>
          </div>
        </React.Suspense>
      </div>
    </div>
  )
}