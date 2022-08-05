import { lowCodeDataAction } from './lowCodeDataAction'


export const EditTitle = title => ( { type: lowCodeDataAction.editTitle, title } )

export const SelectControls = id => ( { type: lowCodeDataAction.selectControls, id } )

export const AddPageItemAndSelect = payInfo => ( { type: lowCodeDataAction.addPageItemAndSelect, payInfo } )

export const SelectedInsertControls = selected => ( { type: lowCodeDataAction.selectedInsertControls, selected } )

export const ClearSelectedInsertControls = _ => ( { type: lowCodeDataAction.clearSelectedInsertControls } )

export const EditPageItemGroup = list => ( { type: lowCodeDataAction.editPageItemGroup, list } )

export const ToggleLayerOpened = _ => ( { type: lowCodeDataAction.toggleLayerOpened } )