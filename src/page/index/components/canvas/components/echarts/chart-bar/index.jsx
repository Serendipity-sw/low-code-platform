import React from 'react'
import * as echarts from 'echarts'

class ChartColumn extends React.Component {

  #chartObj

  componentDidMount() {
    this.#chartInit( this.props )
  }

  componentWillUnmount() {
    this.#chartObj?.dispose?.()
  }

  shouldComponentUpdate( nextProps, nextState, nextContext ) {
    if ( nextProps.style.width !== this.props.style.width || nextProps.style.height !== this.props.style.height ) {
      this.#controlsResizeChange()
    }
    return true
  }

  #controlsResizeChange = _ => {
    this.#chartObj?.resize?.()
  }

  #chartInit = props => {
    const { id } = props
    this.#chartObj = echarts.init(document.getElementById(id))
    this.#chartObj.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    })
  }

  render() {
    const { id, style } = this.props
    return (
      <div style={ style } id={ id }/>
    )
  }
}

export default ChartColumn
