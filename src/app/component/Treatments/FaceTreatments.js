"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";

const TREATMENTS = [
  { img: "/facial.jpg", title: "Mezopen", link: "mezopen" },
  { img: "/body.jpg", title: "VEGA Lab Tech", link: "vega" },
  { img: "/hands.jpg", title: "Szemöldök Laminálás", link: "/face" },
  { img: "/hair.jpg", title: "Szempilla lifting", link: "/face" },
  { img: "/makeup.jpg", title: "Arcmasszázs", link: "/face" },
  { img: "/additional.jpg", title: "Smink", link: "/face" },
  { img: "/additional.jpg", title: "3D 11 SOROS HIFU ", link: "/face" },
  { img: "/additional.jpg", title: "HydraFacial™", link: "/face" },
  { img: "/additional.jpg", title: "LPG-LIFT M6", link: "/face" },
  { img: "/additional.jpg", title: "Ultrahang", link: "/face" },
  { img: "/additional.jpg", title: "Tű Nélküli Mezoterápia ", link: "/face" },
  { img: "/additional.jpg", title: "Dermaroller", link: "/face" },
  { img: "/additional.jpg", title: "Arctisztítás", link: "/face" },
];

export default function Treatments(props) {
  const router = useRouter();

  return (
    <div id="#treatments" className="treatments face-treatments">
      <div className="treatments-wrapper">
        {TREATMENTS.map((item, index) => (
          <div
            className="treatment"
            key={index}
            onClick={() =>
              router.push({
                pathname: "/arckezeles/[kezeles]",
                query: { kezeles: item.link },
              })
            }
          >
            <Card>
              <Image src={item.img} width={400} height={250} alt={item.title} />
              <h4 className="treatment-title">{item.title}</h4>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
