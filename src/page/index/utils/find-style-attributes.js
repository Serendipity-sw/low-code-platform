export const FindStyle = ( dataList, idList ) => {
  const findList = dataList?.filter?.( item => idList?.includes?.( item.id ) )
  if ( findList?.length > 0 ) {
    return findList[0].style
  }
  return ''
}