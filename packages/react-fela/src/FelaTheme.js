/* @flow */
import { createElement } from 'react'
import { FelaThemeFactory } from 'layeshifter-fela-bindings'

import { ThemeContext } from './context'

export default FelaThemeFactory(createElement, ThemeContext)
