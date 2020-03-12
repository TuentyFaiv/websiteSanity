import S from '@sanity/desk-tool/structure-builder'

import IframePreview from './previews/IframePreview'
import { workflowListItems } from './workflow'

// Web preview configuration
const remoteURL = '<#<deployments.web.url>#>'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL })
    ])
  }
  return S.document().views([S.view.form()])
}

const HIDDEN_TYPES = [
  // NOTE: comment this to debug
  'workflow.metadata'
]

const hiddenDocTypes = listItem => !HIDDEN_TYPES.includes(listItem.getId())

const docTypeListItems = S.documentTypeListItems().filter(hiddenDocTypes)

export default () =>
  S.list()
    .title('Content')
    .items([
      ...workflowListItems,
      ...docTypeListItems,
    ])