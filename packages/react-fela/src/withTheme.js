/* @flow */
import { createElement } from 'react'
import { withThemeFactory } from 'layeshifter-fela-bindings'

import FelaTheme from './FelaTheme'

export default withThemeFactory(createElement, FelaTheme)
