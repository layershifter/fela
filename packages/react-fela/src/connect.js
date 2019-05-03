/* @flow */
import { Component, createElement } from 'react'
import { connectFactory } from 'layeshifter-fela-bindings'

import { RendererContext, ThemeContext } from './context'

export default connectFactory(
  Component,
  createElement,
  RendererContext,
  ThemeContext
)
