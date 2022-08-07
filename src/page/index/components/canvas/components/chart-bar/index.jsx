import React from 'react'
import { Chart } from '@antv/g2'

class ChartColumn extends React.Component {

  #chartObj

  #data = [
    { type: '汽车', value: 34 },
    { type: '建材家居', value: 85 },
    { type: '住宿旅游', value: 103 },
    { type: '交通运输与仓储邮政', value: 142 },
    { type: '建筑房地产', value: 251 },
    { type: '教育', value: 367 },
    { type: 'IT 通讯电子', value: 491 },
    { type: '社会公共管理', value: 672 },
    { type: '医疗卫生', value: 868 },
    { type: '金融保险', value: 1234 }
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
    this.#chartObj.scale( {
      value: {
        max: 1400,
        min: 0,
        alias: '销量（百万）',
      },
    })
    this.#chartObj.axis('type', {
      title: null,
      tickLine: null,
      line: null,
    })
    this.#chartObj.axis('value', {
      label: null,
      title: {
        offset: 30,
        style: {
          fontSize: 12,
          fontWeight: 300,
        },
      },
    })
    this.#chartObj.legend(false)
    this.#chartObj.coordinate().transpose()
    this.#chartObj.interval()
      .position('type*value')
      .size(26)
      .label('value', {
        style: {
          fill: '#8d8d8d',
        },
        offset: 10,
      })
    this.#chartObj.interaction('element-active')
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