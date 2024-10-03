import Image from "next/image";
import { Divider } from "@mui/material";
import { FACE_TREATMENTS_CONTENT } from "./faceTreatmentsContent";

export default function TreatmentWithContent({ pathname }) {
  const {
    titleImg,
    title,
    titleDescription,
    time,
    price,
    firstTitle,
    first,
    firstImg,
    secondTitle,
    second,
    secondImg,
    thirdTitle,
    third,
    thirdImg,
  } = FACE_TREATMENTS_CONTENT[pathname];

  return (
    <div className="treatment-description">
      <div className="treatment-header">
        <Image src={titleImg} width={250} height={509} alt={title} />
        <div className="description-column">
          <h1 className="subtitle">{title}</h1>
          <span className="description">{titleDescription}</span>
          <div>
            <Divider className="divider" />

            <div className="information">
              <div className="information-item">
                <h3>Időtartam:</h3>
                <h4>{time}</h4>
              </div>

              <div className="information-item">
                <h3>Ár:</h3>
                <h4>{price}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="first">
        <div className="content-wrapper">
          <h1 className="subtitle">{firstTitle}</h1>
          <div className="first-description">{first}</div>
        </div>

        <div className="image-wrapper">
          <Image src={firstImg} width={250} height={509} alt={firstTitle} />
        </div>
      </div>

      <div className="second">
        <div className="image-wrapper">
          <Image src={secondImg} width={250} height={509} alt={secondTitle} />
        </div>

        <div className="content-wrapper">
          <h1 className="subtitle">{secondTitle}</h1>
          <div className="second-description">{second}</div>
        </div>
      </div>

      <div className="third">
        <div className="content-wrapper">
          <h1 className="subtitle">{thirdTitle}</h1>
          <div className="third-description">{third}</div>
        </div>

        <div className="image-wrapper">
          <Image src={thirdImg} width={250} height={509} alt={thirdTitle} />
        </div>
      </div>
    </div>
  );
}
