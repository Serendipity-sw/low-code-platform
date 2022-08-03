import { cloneDeep } from 'lodash'

const lowCodeDataInit = {
  title: '标题编辑',
  pageContentData: []
}

const lowCodeDataAction = {
  editTitle: Symbol( 'editTitle' ),
  addPageItem: Symbol( 'addPageItem' ),
  editPageItemByIndex: Symbol( 'editPageItemByIndex' ),
  editPageItemById: Symbol( 'editPageItemById' ),
  delPageItemByIndex: Symbol( 'delPageItemByIndex' ),
  delPageItemById: Symbol( 'delPageItemById' )
}

const lowCodeData = ( state = cloneDeep( lowCodeDataInit ), action ) => {
  switch ( action.type ) {
    case lowCodeDataAction.editTitle:
      return { ...state, title: action.title }
    case lowCodeDataAction.addPageItem:
      state.pageContentData.push( action.payInfo )
      return state
    case lowCodeDataAction.editPageItemByIndex:
      state.pageContentData[action.index] = { ...state.pageContentData[action.index], ...action.payInfo }
      return state
    case lowCodeDataAction.editPageItemById:
      const index = state.pageContentData.findIndex( item => item.id === action.payInfo.id )
      state.pageContentData[index] = { ...state.pageContentData[index], ...action.payInfo }
      return state
    case lowCodeDataAction.delPageItemByIndex:
      state.pageContentData.splice( action.index, 1 )
      return state
    case lowCodeDataAction.delPageItemByIndex:
      state.pageContentData = state.pageContentData.filter( item => item.id !== action.id )
      return state
    default:
      return state
  }
}

export default lowCodeData

export const EditTitle = title => ( { type: lowCodeDataAction.editTitle, title } )

export const AddPageItem = payInfo => ( { type: lowCodeDataAction.addPageItem, payInfo } )

export const EditPageItemByIndex = ( index, payInfo ) => ( {
  type: lowCodeDataAction.editPageItemByIndex,
  index,
  payInfo
} )