import { usePathname } from "next/navigation";
import Image from "next/image";
import { Divider } from "@mui/material";

const DESCRIPTIONS = {
  "/arckezeles/mezopen": {
    title: "Mezopen",
    description:
      "Mezopen loorem ipsum ezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsum",
    img: "/facial.jpg",
    time: "30 perc",
    price: "28 000 Ft",
    purpose: {
      title: "Miért válaszd Mezopen kezelésünket?",
      img: "/body.jpg",
      informations: [
        "Nagyon jó megoldás tág pórusokra",
        "Javasolt hegek kezelésére",
        "Javasolt bőrfelszíni problémák kezelésére",
        "Nagyon jó megoldás tág pórusokra",
        "Javasolt hegek kezelésére",
        "Javasolt bőrfelszíni problémák kezelésére",
      ],
    },
    about: {
      title: "Kezeléssel kapcsolatos információk",
      img: "/hands.jpg",
      informations: [
        "A kozmetikai kezelést 3 hetente lehet megismételni",
        "Javasolt hegek kezelésére",
        "Javasolt bőrfelszíni problémák kezelésére",
      ],
    },
  },
  "/arckezeles/vega": {
    title: "VEGA Lab Tech",
    description:
      "VEGA Lab Tech loorem ipsum ezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsum",
    img: "/facial.jpg",
    time: "30 perc",
    price: "28 000 Ft",
    purpose: {
      title: "Miért válaszd Mezopen kezelésünket?",
      img: "/body.jpg",
      informations: [
        "Nagyon jó megoldás tág pórusokra",
        "Javasolt hegek kezelésére",
        "Javasolt bőrfelszíni problémák kezelésére",
        "Nagyon jó megoldás tág pórusokra",
        "Javasolt hegek kezelésére",
        "Javasolt bőrfelszíni problémák kezelésére",
      ],
    },
    about: {
      title: "Kezeléssel kapcsolatos információk",
      img: "/hands.jpg",
      informations: [
        "A kozmetikai kezelést 3 hetente lehet megismételni",
        "Javasolt hegek kezelésére",
        "Javasolt bőrfelszíni problémák kezelésére",
      ],
    },
  },
};

export default function Home() {
  const pathname = usePathname();
  if (pathname === null) return <></>;

  const { img, title, description, price, time, purpose, about } =
    DESCRIPTIONS[pathname];
  return (
    <div className="treatment-description">
      <div className="treatment-header">
        <Image src={img} width={250} height={509} alt={title} />
        <div className="description-column">
          <h1 className="subtitle">{title}</h1>
          <span className="description">{description}</span>
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
        <h1 className="subtitle">Bemutatkozás</h1>
        <span className="description">{description}</span>
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
    </div>
  );
}
