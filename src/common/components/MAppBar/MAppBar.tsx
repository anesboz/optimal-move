import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from 'routes'
import { Grid } from '@mui/material'
import Icon from '@mui/material/Icon'
import { useAppDispatch, useAppSelector } from 'common/redux/store'
import { mainActions } from 'common/redux/reducers/main'

const drawerWidth = 240

export default function MAppBar() {
  const { open, content } = useAppSelector((state) => state.main.drawer)
  const dispatch = useAppDispatch()

  const location = useLocation()
  const navigate = useNavigate()
  const route = routes.find((e) => e.path === location.pathname)

  const handleDrawerToggle = () => {
    dispatch(mainActions.openDrawer(!open))
  }

  return (
    <Box sx={{ display: 'flex', width: `100%` }}>
      <AppBar component="nav" position="relative">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container className="center" sx={{ flex: 1 }}>
            <Icon sx={{ mr: 2 }}>{route?.icon}</Icon>
            <Typography
              variant="h6"
              component="span"
              sx={{ cursor: `pointer` }}
              onClick={() => {
                navigate(0)
              }}
            >
              {route?.name}
            </Typography>
          </Grid>

          <Box sx={{ display: { sm: 'block' } }}>
            {routes.slice(0, 3).map(({ name, path }) => (
              <Button
                key={name}
                sx={{ color: '#fff' }}
                onClick={() => navigate(path)}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {content}
        </Drawer>
      </Box>
    </Box>
  )
}
