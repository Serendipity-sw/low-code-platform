import React, { useRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light.css'
import style from './index.pcss'
import ColorPicker from './components/color-picker'

class ColorPickerDropDown extends React.Component {
  #ref = React.createRef()

  shouldComponentUpdate( nextProps, nextState, nextContext ) {
    return nextProps.disabled !== this.props.disabled
  }

  render() {
    const { colorType, disabled, children } = this.props
    return (
      <Tippy content={ <ColorPicker colorType={ colorType }/> } ref={ this.#ref }
             interactive={ true }
             theme="light"
             arrow={ false }
             disabled={ disabled ?? false }
             className={ `animate__animated animate__rubberBand ${ style.tranBg }` }>
        { children }
      </Tippy>
    )
  }
}

export default ColorPickerDropDown