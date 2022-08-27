import { lowCodeDataAction } from './lowCodeDataAction'


export const EditTitle = title => ( { type: lowCodeDataAction.editTitle, title } )

export const SelectControls = idArray => ( { type: lowCodeDataAction.selectControls, idArray } )

export const AddPageItemAndSelect = payInfo => ( { type: lowCodeDataAction.addPageItemAndSelect, payInfo } )

export const SelectedInsertControls = selected => ( { type: lowCodeDataAction.selectedInsertControls, selected } )

export const ClearSelectedInsertControls = _ => ( { type: lowCodeDataAction.clearSelectedInsertControls } )

export const EditPageItemGroup = list => ( { type: lowCodeDataAction.editPageItemGroup, list } )

export const ToggleLayerOpened = _ => ( { type: lowCodeDataAction.toggleLayerOpened } )

export const AddPageItemListAndSelect = list => ( { type: lowCodeDataAction.addPageItemListAndSelect, list } )

export const EditPageItemList = list => ( { type: lowCodeDataAction.editPageItemList, list } )

export const SetMoveableRef = payInfo => ( { type: lowCodeDataAction.setMoveableRef, payInfo } )

export const SetContainerSize = payInfo => ( { type: lowCodeDataAction.setContainerSize, payInfo } )

export const DeleteControls = _ => ( { type: lowCodeDataAction.deleteControls } )

export const EditSelectedControlsFontContent = richEditContent => ( {
  type: lowCodeDataAction.editSelectedControlsFontContent,
  richEditContent
} )

export const EditPageItemTitleById = payInfo => ( {
  type: lowCodeDataAction.editPageItemTitleById,
  payInfo
} )