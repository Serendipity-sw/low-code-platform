import React from 'react'
import { Chart } from '@antv/g2'

class ChartColumn extends React.Component {

  #chartObj

  #data = [
    { type: '未知', value: 654, percent: 0.02 },
    { type: '17 岁以下', value: 654, percent: 0.02 },
    { type: '18-24 岁', value: 4400, percent: 0.2 },
    { type: '25-29 岁', value: 5300, percent: 0.24 },
    { type: '30-39 岁', value: 6200, percent: 0.28 },
    { type: '40-49 岁', value: 3300, percent: 0.14 },
    { type: '50 岁以上', value: 1500, percent: 0.06 }
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
    this.#chartObj.scale( 'value', {
      alias: '销售额(万)'
    } )
    this.#chartObj.axis( 'type', {
      tickLine: {
        alignTick: false
      }
    } )
    this.#chartObj.tooltip({
      showMarkers: false,
    })
    this.#chartObj.axis( 'value', false )
    this.#chartObj.interval().position( 'type*value' )
    this.#chartObj.interaction('element-active')
    this.#data.forEach((item) => {
      this.#chartObj
        .annotation()
        .text({
          position: [item.type, item.value],
          content: item.value,
          style: {
            textAlign: 'center',
          },
          offsetY: -30,
        })
        .text({
          position: [item.type, item.value],
          content: (item.percent * 100).toFixed(0) + '%',
          style: {
            textAlign: 'center',
          },
          offsetY: -12,
        });
    })
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