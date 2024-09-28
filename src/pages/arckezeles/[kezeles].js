import Header from "../../app/component/Header.js";
import Footer from "../../app/component/Footer.js";
import TreatmentDescription from "../../app/component/Treatments/TreatmentDescription.js";

import "../../../style/index.scss";

export default function Home() {
  return (
    <>
      <Header />
      <TreatmentDescription />
      <Footer />
    </>
  );
}
