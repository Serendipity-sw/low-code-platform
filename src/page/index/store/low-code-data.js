import { cloneDeep } from 'lodash'

const lowCodeDataInit = {
  title: '标题编辑'
}

const lowCodeDataAction = {
  editTitle: Symbol( 'editTitle' )
}

const lowCodeData = ( state = cloneDeep( lowCodeDataInit ), action ) => {
  switch ( action.type ) {
    case lowCodeDataAction.editTitle:
      return { ...state, title: action.payInfo }
    default:
      return state
  }
}

export default lowCodeData

export const EditTitle = title => ( { type: lowCodeDataAction.editTitle, payInfo: title } )