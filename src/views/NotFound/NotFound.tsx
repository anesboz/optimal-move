import { Button, Grid } from '@mui/material'
import NotFoundImage from 'common/assets/NotFoundImage.jpg'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <Grid container className="center">
      <Grid item sx={{ height: `40vh`, m: 4, display: 'block' }}>
        <img
          src={NotFoundImage}
          alt="Not Found"
          style={{ maxHeight: `40vh`, maxWidth: `100%` }}
        />
      </Grid>
      <Grid item xs={12} className="center">
        <Button
          onClick={() => navigate('/')}
          variant="contained"
          color="primary"
          sx={{ m: `auto` }}
        >
          HOME
        </Button>
      </Grid>
    </Grid>
  )
}
