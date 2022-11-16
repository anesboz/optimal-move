import { Button } from '@mui/material'
import { mainActions } from 'common/redux/reducers/main'
import { useAppDispatch } from 'common/redux/store'

export default function Main() {
  const dispatch = useAppDispatch()

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(mainActions.setDrawerContent(new Date().toString()))
          dispatch(mainActions.openDrawer(true))
        }}
      >
        Set Right Drawer Content
      </Button>
    </div>
  )
}
