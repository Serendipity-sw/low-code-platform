import React from 'react'
import * as echarts from 'echarts'

class ChartColumn extends React.Component {

  #chartObj

  componentDidMount() {
    this.#chartInit(this.props)
  }

  componentWillUnmount() {
    this.#chartObj?.dispose?.()
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.style.width !== this.props.style.width || nextProps.style.height !== this.props.style.height) {
      this.#controlsResizeChange()
    }
    return true
  }

  #controlsResizeChange = _ => {
    this.#chartObj?.resize?.()
  }

  #chartInit = props => {
    const {id} = props
    this.#chartObj = echarts.init(document.getElementById(id))
    this.#chartObj.setOption({
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  }

  render() {
    const {id, style} = this.props
    return (
      <div style={style} id={id}/>
    )
  }
}

export default ChartColumn
