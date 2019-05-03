/* @flow */
import { createElement, Children } from 'react'
import { ThemeProviderFactory } from 'layeshifter-fela-bindings'

import { ThemeContext } from './context'

export default ThemeProviderFactory(ThemeContext, createElement, children =>
  Children.only(children)
)
