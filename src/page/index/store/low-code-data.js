import { cloneDeep } from 'lodash'
import { lowCodeDataAction } from './lowCodeDataAction'

const lowCodeDataInit = {
  title: '标题编辑',
  insertControlsSelected: '',
  selectControls: [],
  pageContentData: []
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
    default:
      return state
  }
}

export default lowCodeData