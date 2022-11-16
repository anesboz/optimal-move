import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { Grid, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import store from 'common/redux/store'
import { mTheme } from 'common/variables/styles'
import MAppBar from 'common/components/MAppBar/MAppBar'
import { routes } from 'routes'
import NotFound from './NotFound/NotFound'

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <ThemeProvider theme={mTheme}>
          <BrowserRouter basename="/">
            <MAppBar />
            <Grid
              container
              sx={{ position: `relative`, p: 3 }}
              className="center"
            >
              <Routes>
                {routes.map((e, i) => {
                  const Element = e.element
                  return <Route key={i} path={e.path} element={<Element />} />
                })}
                <Route path={'*'} element={<NotFound />} />
              </Routes>
            </Grid>
          </BrowserRouter>
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  )
}

export default App
