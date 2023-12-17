import RoomIcon from '@mui/icons-material/Room';
import Grid from '@mui/material/Unstable_Grid2';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export default function Footer(props) {
    return (
     <footer>
       <Grid container spacing={2}>
        <Grid xs={6} >
            <Grid container spacing={2}>
                <Grid xs={6} >
                    <RoomIcon />
                </Grid>
                <Grid xs={6} >
                    <span>1117 Budapest, Sopron út. 25-27.</span> 
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={6} >
                    <CallRoundedIcon />
                </Grid>
                <Grid xs={6} >
                    <a href='tel:+36302807881'>+36302807881</a> 
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={6} >
                    <EmailRoundedIcon />
                </Grid>
                <Grid xs={6} >
                    <a href="mailto:vargazoltan96@gmail.com">vargazoltan96@gmail.com</a> 
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={6} >
          asd
        </Grid>
      </Grid>
     </footer>
    )
  }
  