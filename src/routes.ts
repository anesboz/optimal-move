import About from 'views/About/About'
import Contact from 'views/Contact/Contact'
import Main from './views/Main/Main'

interface Route {
  name: string
  path: string
  icon: string
  element: React.FunctionComponent
}

export const routes: Route[] = [
  {
    name: `Home`,
    path: `/`,
    icon: `home`,
    element: Main,
  },
  {
    name: `About`,
    path: `/about`,
    icon: `info`,
    element: About,
  },
  {
    name: `Contact`,
    path: `/contact`,
    icon: `alternate_email`,
    element: Contact,
  },
]
