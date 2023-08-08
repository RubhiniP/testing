import {render} from '@testing-library/react'
import Appprovider from './components/providers/Appprovider'

const customRender = (ui, options) =>
  render(ui, {wrapper: Appprovider, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}