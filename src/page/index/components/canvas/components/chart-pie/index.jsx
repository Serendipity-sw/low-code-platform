import React from 'react'
import { Chart, Util } from '@antv/g2'

class ChartColumn extends React.Component {

  #chartObj

  #data = [
    { type: '一线城市', value: 0.19 },
    { type: '二线城市', value: 0.21 },
    { type: '三线城市', value: 0.27 },
    { type: '四线及以下', value: 0.33 }
  ]

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
    this.#chartObj.data( this.#data )
    this.#chartObj.coordinate( 'theta', {
      radius: 0.75
    } )
    this.#chartObj.tooltip( {
      showMarkers: false
    } )

    this.#chartObj
      .interval()
      .adjust( 'stack' )
      .position( 'value' )
      .color( 'type', [ '#063d8a', '#1770d6', '#47abfc', '#38c060' ] )
      .style( { opacity: 0.4 } )
      .state( {
        active: {
          style: ( element ) => {
            const shape = element.shape
            return {
              matrix: Util.zoom( shape, 1.1 )
            }
          }
        }
      } )
      .label( 'type', ( val ) => {
        const opacity = val === '四线及以下' ? 1 : 0.5
        return {
          offset: -30,
          style: {
            opacity,
            fill: 'white',
            fontSize: 12,
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          },
          content: ( obj ) => {
            return obj.type + '\n' + obj.value + '%'
          }
        }
      } )

    this.#chartObj.interaction( 'element-single-selected' )
    this.#chartObj.render()
  }

  render() {
    const { id, style } = this.props
    return (
      <div style={ style } id={ id }/>
    )
  }
}

export default ChartColumn