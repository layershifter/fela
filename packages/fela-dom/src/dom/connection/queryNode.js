/* @flow */
import type { NodeAttributes } from '../../../../../flowtypes/DOMNode'

export default function queryNode(
  { type, media, support }: NodeAttributes,
  target: Document,
  id?: string = ''
): ?Object {
  const idQuery = `[data-fela-id="${id}"]`
  const mediaQuery = media ? `[media="${media}"]` : ':not([media])'
  const supportQuery = support
    ? '[data-fela-support="true"]'
    : ':not([data-fela-support="true"])'

  return target.querySelector(
    `[data-fela-type="${type}"]${idQuery}${supportQuery}${mediaQuery}`
  )
}
