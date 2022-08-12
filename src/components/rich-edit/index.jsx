import React, { useEffect, useId } from 'react'
import style from './index.pcss'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import Alert from 'editorjs-alert'
import HeaderAlignment from 'editorjs-header-with-alignment'
import ToggleBlock from 'editorjs-toggle-block'
import editorJsNestedChecklist from '@calumk/editorjs-nested-checklist'
import SimpleImage from '@editorjs/simple-image'
import AttachesTool from '@editorjs/attaches'
import { FileUpload } from '../../service/file'
import Table from '@editorjs/table'
import editorJsCodeFlask from '@calumk/editorjs-codeflask'
import Marker from '@editorjs/marker'
import Underline from '@editorjs/underline'
import Tooltip from 'editorjs-tooltip'
import DragDrop from 'editorjs-drag-drop'
import Undo from 'editorjs-undo'

export default React.forwardRef( ( props, ref ) => {

  const id = useId()

  const toolsObj = {
    header: {
      class: Header,
      inlineToolbar: true
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true
    },
    quote: {
      class: Quote,
      inlineToolbar: true
    },
    delimiter: Delimiter,
    alert: Alert,
    headerAlignment: HeaderAlignment,
    toggle: {
      class: ToggleBlock,
      inlineToolbar: true
    },
    nestedChecklist: editorJsNestedChecklist,
    image: SimpleImage,
    table: Table,
    code: editorJsCodeFlask,
    underline: Underline,
    tooltip: {
      class: Tooltip,
      config: {
        location: 'left',
        highlightColor: '#FFEFD5',
        underline: true,
        backgroundColor: '#154360',
        textColor: '#FDFEFE',
        holder: 'editorId'
      }
    },
    Marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M'
    },
    attaches: {
      class: AttachesTool,
      config: {
        uploader: {
          uploadByFile: file => {
            return FileUpload( file ).then( result => {
              return {
                success: 1,
                file: {
                  url: result.data
                }
              }
            } )
          }
        }
      }
    }
  }

  useEffect( _ => {
    ref = new EditorJS( {
      holder: id,
      tools: toolsObj,
      onReady: () => {
        new Undo( { editor: ref } )
        new DragDrop( ref )
      }
    } )
  }, [] )


  return (
    <div id={ id } className={ [ style.init, props.className ].join( ' ' ) }>

    </div>
  )
} )