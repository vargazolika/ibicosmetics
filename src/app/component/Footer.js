import RoomIcon from "@mui/icons-material/Room";
import Grid from "@mui/material/Grid";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function Footer(props) {
  return (
    <footer>
      <Grid className="footerGrid" container justifyContent="center">
        <Grid item xs={4}></Grid>
        <Grid className="contacts" item xs={2}>
          <Grid container alignItems="center">
            <Grid item xs={2} justifyContent="center">
              <RoomIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <a
                target="blank"
                href="https://www.google.com/maps/place/Ibi+Kozmetika/@46.8883645,19.6551543,17z/data=!3m1!4b1!4m6!3m5!1s0x4743da7f91114acb:0xa741d6596e96152d!8m2!3d46.8883609!4d19.6577346!16s%2Fg%2F11b6ln3nz2?entry=ttu"
              >
                Kecskemét, Madár utca 16, 6000
              </a>
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item xs={2}>
              <CallRoundedIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <a href="tel:+36302807881">+36302807881</a>
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyItems="center">
            <Grid item xs={2}>
              <EmailRoundedIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <a href="mailto:vargazoltan96@gmail.com">
                vargazoltan96@gmail.com
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid className="footer-item" item xs={2}>
          <h3>Nyitva Tartás</h3>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>Hétfő</span>
            </Grid>
            <Grid item xs={6}>
              <span>8:00 - 19:00</span>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>Kedd</span>
            </Grid>
            <Grid item xs={6}>
              <span>8:00 - 19:00</span>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>Szerda</span>
            </Grid>
            <Grid item xs={6}>
              <span>8:00 - 19:00</span>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>Csütörtök</span>
            </Grid>
            <Grid item xs={6}>
              <span>8:00 - 19:00</span>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>Péntek</span>
            </Grid>
            <Grid item xs={6}>
              <span>8:00 - 19:00</span>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>Szombat</span>
            </Grid>
            <Grid item xs={6}>
              <span>Zárva</span>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>Vasárnap</span>
            </Grid>
            <Grid item xs={6}>
              <span>Zárva</span>
            </Grid>
          </Grid>
        </Grid>

        <Grid className="map" item xs={4}>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d340.8416055901186!2d19.657701615746614!3d46.88831072421634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743da7f91114acb%3A0xa741d6596e96152d!2sIbi%20Kozmetika!5e0!3m2!1shu!2shu!4v1705177266890!5m2!1shu!2shu"
            width="80%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </Grid>
      </Grid>
    </footer>
  );
}
