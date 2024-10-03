import { usePathname } from "next/navigation";
import Header from "../../app/component/Header.js";
import Footer from "../../app/component/Footer.js";
import TreatmentWithLists from "../../app/component/Treatments/TreatmentWithLists.js";
import TreatmentWithContent from "../../app/component/Treatments/TreatmentWithContent.js";
import { FACE_TREATMENTS_CONTENT } from "../../app/component/Treatments/faceTreatmentsContent.js";

import "../../../style/index.scss";

export default function Treatment() {
  const pathname = usePathname();

  if (pathname === null) return <></>;

  const { component } = FACE_TREATMENTS_CONTENT[pathname];

  const getComponent = (component) => {
    switch (component) {
      case "withList":
        return <TreatmentWithLists pathname={pathname} />;
      case "withContent":
        return <TreatmentWithContent pathname={pathname} />;
    }
  };

  return (
    <>
      <Header />
      {getComponent(component)}
      <Footer />
    </>
  );
}
