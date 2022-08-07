import React from 'react'
import { Chart } from '@antv/g2'

class ChartLine extends React.Component {

  #chartObj

  componentDidMount() {
    this.#chartInit( this.props )
  }

  componentWillUnmount() {
    this.#chartObj?.destroy?.()
  }

  shouldComponentUpdate( nextProps, nextState, nextContext ) {
    if ( nextProps.style.width !== this.props.style.width || nextProps.style.height !== this.props.style.height ) {
      this.#controlsResizeChange()
    }
    return true
  }

  #controlsResizeChange = _ => {
    this.#chartObj?.forceFit?.()
  }

  #chartInit = props => {
    const { id } = props
    this.#chartObj = new Chart( {
      container: id,
      autoFit: true,
      syncViewPadding: true
    } )
    this.#chartObj.data( require( './data/data-init.json' ) )
    this.#chartObj.line().position( 'Date*Close' )
    this.#chartObj.render()
  }

  render() {
    const { id, style } = this.props
    return (
      <div style={ style } id={ id }/>
    )
  }
}

export default ChartLine