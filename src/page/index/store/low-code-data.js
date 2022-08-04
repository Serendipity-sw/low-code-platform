import { cloneDeep } from 'lodash'

const lowCodeDataInit = {
  title: '标题编辑',
  insertControlsSelected: '',
  selectControls: [],
  pageContentData: []
}

const lowCodeDataAction = {
  editTitle: Symbol( 'editTitle' ),
  addPageItem: Symbol( 'addPageItem' ),
  editPageItemByIndex: Symbol( 'editPageItemByIndex' ),
  editPageItemById: Symbol( 'editPageItemById' ),
  delPageItemByIndex: Symbol( 'delPageItemByIndex' ),
  delPageItemById: Symbol( 'delPageItemById' ),
  selectedInsertControls: Symbol( 'selectedInsertControls' ),
  clearSelectedInsertControls: Symbol( 'clearSelectedInsertControls' ),
  selectControls: Symbol( 'selectControls' ),
  addPageItemAndSelect: Symbol( 'addPageItemAndSelect' ),
  clearSelectControls: Symbol( 'clearSelectControls' )
}

const lowCodeData = ( state = cloneDeep( lowCodeDataInit ), action ) => {
  let pageContentData = cloneDeep( state.pageContentData )
  switch ( action.type ) {
    case lowCodeDataAction.editTitle:
      return { ...state, title: action.title }
    case lowCodeDataAction.addPageItem:
      pageContentData.push( action.payInfo )
      return { ...state, pageContentData }
    case lowCodeDataAction.editPageItemByIndex:
      pageContentData[action.index] = { ...pageContentData[action.index], ...action.payInfo }
      return { ...state, pageContentData }
    case lowCodeDataAction.editPageItemById:
      const index = pageContentData.findIndex( item => item.id === action.payInfo.id )
      pageContentData[index] = { ...pageContentData[index], ...action.payInfo }
      return { ...state, pageContentData }
    case lowCodeDataAction.delPageItemByIndex:
      pageContentData.splice( action.index, 1 )
      return { ...state, pageContentData }
    case lowCodeDataAction.delPageItemById:
      return { ...state, pageContentData: pageContentData.filter( item => item.id !== action.id ) }
    case lowCodeDataAction.selectedInsertControls:
      return { ...state, insertControlsSelected: action.selected }
    case lowCodeDataAction.clearSelectedInsertControls:
      return { ...state, insertControlsSelected: '' }
    case lowCodeDataAction.selectControls:
      return { ...state, selectControls: action.id }
    case lowCodeDataAction.clearSelectControls:
      return { ...state, selectControls: [] }
    case lowCodeDataAction.addPageItemAndSelect:
      pageContentData.push( action.payInfo )
      return { ...state, pageContentData, selectControls: [action.payInfo.id] }
    default:
      return state
  }
}

export default lowCodeData

export const EditTitle = title => ( { type: lowCodeDataAction.editTitle, title } )

export const AddPageItem = payInfo => ( { type: lowCodeDataAction.addPageItem, payInfo } )

export const SelectControls = id => ( { type: lowCodeDataAction.selectControls, id } )

export const ClearSelectControls = _ => ( { type: lowCodeDataAction.clearSelectControls } )

export const AddPageItemAndSelect = payInfo => ( { type: lowCodeDataAction.addPageItemAndSelect, payInfo } )

export const EditPageItemByIndex = ( index, payInfo ) => ( {
  type: lowCodeDataAction.editPageItemByIndex,
  index,
  payInfo
} )

export const EditPageItemById = payInfo => ( { type: lowCodeDataAction.editPageItemById, payInfo } )

export const DelPageItemByIndex = index => ( { type: lowCodeDataAction.delPageItemByIndex, index } )

export const DelPageItemById = id => ( { type: lowCodeDataAction.delPageItemByIndex, id } )

export const SelectedInsertControls = selected => ( { type: lowCodeDataAction.selectedInsertControls, selected } )

export const ClearSelectedInsertControls = _ => ( { type: lowCodeDataAction.clearSelectedInsertControls } )