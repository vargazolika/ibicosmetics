import { usePathname } from "next/navigation";
import Image from "next/image";
import { Divider } from "@mui/material";
import { FACE_TREATMENTS_CONTENT } from "./faceTreatmentsContent";

export default function Home() {
  const pathname = usePathname();
  if (pathname === null) return <></>;

  const {
    img,
    title,
    description,
    price,
    time,
    purpose,
    about,
    descriptionTitle,
    titleDescription,
    third,
    fourth,
  } = FACE_TREATMENTS_CONTENT[pathname];

  return (
    <div className="treatment-description">
      <div className="treatment-header">
        <Image src={img} width={250} height={509} alt={title} />
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

      <div className="motto">
        <h1 className="subtitle">{descriptionTitle}</h1>
        {description.map((desc) => (
          <span className="description">{desc}</span>
        ))}
      </div>

      <div className="purpose">
        <div className="content-wrapper">
          <h1 className="subtitle">{purpose.title}</h1>
          <div className="list">
            <ul>
              {purpose.informations.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="image-wrapper">
          <Image src={purpose.img} width={250} height={509} alt={title} />
        </div>
      </div>

      <div className="about">
        <div className="about-first">
          <div className="image-wrapper">
            <Image src={about.img} width={250} height={509} alt={title} />
          </div>
          <div className="list-wrapper">
            <h1 className="subtitle">{about.title}</h1>
            <div className="list">
              <ul>
                {about.informations.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="about-second"></div>
      </div>

      {third && (
        <div className="third">
          <div className="content-wrapper">
            <h1 className="subtitle">{third.title}</h1>
            <div className="list">
              <ul>
                {third.informations.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="image-wrapper">
            <Image src={third.img} width={250} height={509} alt={title} />
          </div>
        </div>
      )}

      {fourth && (
        <div className="fourth">
          <div className="about-first">
            <div className="image-wrapper">
              <Image src={fourth.img} width={250} height={509} alt={title} />
            </div>
            <div className="list-wrapper">
              <h1 className="subtitle">{fourth.title}</h1>
              <div className="list">
                <ul>
                  {fourth.informations.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="about-second"></div>
        </div>
      )}
    </div>
  );
}
