import Header from "../../app/component/Header.js";
import Footer from "../../app/component/Footer.js";
import FaceTreatments from "../../app/component/Treatments/FaceTreatments.js";

import "../../../style/index.scss";

export default function Home() {
  return (
    <>
      <Header />
      <FaceTreatments />
      <Footer />
    </>
  );
}
