import { combineReducers } from 'redux'
import lowCodeData from '../page/index/store/low-code-data'
import toolbarStore from '../page/index/components/toolbar/store'

export default combineReducers( {
  lowCodeData,
  toolbarStore
} )
