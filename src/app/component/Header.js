import { Grid } from "@mui/material";
import Image from "next/image";

export default function Header(props) {
  return (
    <header>
      <Grid container justifyContent="center">
        <Grid item xs={4} className="logo">
          <Image src="/logo.png" width={508} height={118} alt="Ibi kozmetika" />
        </Grid>
        <Grid item xs={4} alignItems="center" justifyContent="center">
          <nav>
            <ul>
              <li>
                <h3>Bemutatkozás</h3>
              </li>
              <li>
                <h3>Kezelés</h3>
              </li>
              <li>
                <h3>Galéria</h3>
              </li>
              <li>
                <h3>Kapcsolat</h3>
              </li>
              <li>
                <h3>Árlista</h3>
              </li>
              <li>
                <h3>Árlista</h3>
              </li>
              <li>
                <h3>Árlista</h3>
              </li>
            </ul>
          </nav>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </header>
  );
}
