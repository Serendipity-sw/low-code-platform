import { cloneDeep } from 'lodash'
import { lowCodeDataAction } from './lowCodeDataAction'

const lowCodeDataInit = {
  title: '标题编辑',
  insertControlsSelected: '',
  layerOpened: true,
  selectControls: [],
  pageContentData: [],
  moveableRef: null,
  containerSize: { width: 0, height: 0 }
}

const lowCodeData = ( state = cloneDeep( lowCodeDataInit ), action ) => {
  let pageContentData = cloneDeep( state.pageContentData )
  switch ( action.type ) {
    case lowCodeDataAction.editTitle:
      return { ...state, title: action.title }
    case lowCodeDataAction.selectedInsertControls:
      return { ...state, insertControlsSelected: action.selected }
    case lowCodeDataAction.clearSelectedInsertControls:
      return { ...state, insertControlsSelected: '' }
    case lowCodeDataAction.selectControls:
      return { ...state, selectControls: action.id }
    case lowCodeDataAction.addPageItemAndSelect:
      pageContentData.push( action.payInfo )
      return { ...state, pageContentData, selectControls: [ action.payInfo.id ] }
    case lowCodeDataAction.addPageItemListAndSelect:
      pageContentData.push( ...action.list )
      return { ...state, pageContentData, selectControls: action.list.map( item => item.id ) }
    case lowCodeDataAction.editPageItemList:
      action.list.forEach( item => {
        pageContentData.splice( pageContentData.findIndex( modal => modal.id === item.id ), 1, item )
      } )
      return { ...state, pageContentData }
    case lowCodeDataAction.editPageItemGroup:
      action?.list?.forEach( item => {
        const modal = pageContentData.find( modal => modal.id === item.target.id )
        modal.style.transform = item.target.style.transform
        modal.style.width = item.target.style.width
        modal.style.height = item.target.style.height
      } )
      return { ...state, pageContentData }
    case lowCodeDataAction.clearData:
      return cloneDeep( lowCodeDataInit )
    case lowCodeDataAction.setMoveableRef:
      return { ...state, moveableRef: action.payInfo }
    case lowCodeDataAction.setContainerSize:
      return { ...state, containerSize: action.payInfo }
    case lowCodeDataAction.toggleLayerOpened:
      return { ...state, layerOpened: !state.layerOpened }
    default:
      return state
  }
}

export default lowCodeData