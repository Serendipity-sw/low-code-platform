import { cloneDeep } from 'lodash'

const toolbarStoreInit = {
  // 1: 开始 2:插入
  selected: 2
}

const toolbarStoreAction = {
  editSelected: Symbol( 'editSelected' ),
  dataInit: Symbol( 'dataInit' )
}

const toolbarStore = ( state = cloneDeep( toolbarStoreInit ), action ) => {
  switch ( action.type ) {
    case toolbarStoreAction.editSelected:
      return { ...state, selected: action.payInfo }
    case toolbarStoreAction.dataInit:
      return cloneDeep( toolbarStoreInit )
    default:
      return state
  }
}

export default toolbarStore

export const editSelected = payInfo => ( { type: toolbarStoreAction.editSelected, payInfo } )

export const dataInit = _ => ( { type: toolbarStoreAction.dataInit } )