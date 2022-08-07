import React from 'react'
import AMapLoader from '@amap/amap-jsapi-loader'

class MapControls extends React.Component {
  #map

  componentDidMount() {
    this.#mapInit()
  }

  #mapInit = _ => {
    AMapLoader.load( {
      key: Map_Key,
      version: '2.0',
      plugins: [ '' ]
    } ).then( ( AMap ) => {
      this.#map = new AMap.Map( this.props.id, {
        viewMode: '3D',
        zoom: 5,
        center: [ 105.602725, 37.076636 ]
      } )
    } ).catch( e => {
      console.log( e )
    } )
  }

  render() {
    const { id, style } = this.props
    return (
      <div style={ style } id={ id }/>
    )
  }
}

export default MapControls