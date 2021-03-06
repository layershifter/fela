/* @flow */
import { createElement } from 'react'
import { createComponentFactory } from 'layeshifter-fela-bindings'

import { RendererContext } from './context'
import FelaTheme from './FelaTheme'

export default createComponentFactory(createElement, RendererContext, FelaTheme)
