import '../src/themes/global.scss';
import { renderWithConfigs } from '../src/utils/tests/helpers';
import { addDecorator } from '@storybook/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { linkTo } from '@storybook/addon-links'
import { startCase } from 'lodash'

addDecorator((storyFn) => (
  <RouterContext.Provider
    value={{
      route: "/",
      pathname: '/',
      asPath: '/',
      query: {},
      basePath: '',
      push: (_url, as) => {
        if (as) {
          linkTo('Routes', as !== '/' ? startCase(as.toString()) : 'Index')()
        }
        return Promise.resolve(true)
      },
      replace: (_url, as) => {
        if (as) {
          linkTo('Routes', as !== '/' ? startCase(as.toString()) : 'Index')()
        }
        return Promise.resolve(true)
      },
      reload: () => { },
      prefetch: async () => { },
      back: () => { },
      beforePopState: () => { },
      isFallback: false,
    }}
  >
    {storyFn()}
  </RouterContext.Provider>
))

export const decorators = [
  (Story) => renderWithConfigs(<Story />, 'storybook')
]
