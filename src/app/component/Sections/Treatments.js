import Image from "next/image";

const TREATMENTS = [
  { img: "/facial.jpg", title: "Arckezelésink" },
  { img: "/body.jpg", title: "Testkezeléseink" },
  { img: "/hands.jpg", title: "Kéz és láb" },
  { img: "/hair.jpg", title: "Szőrtelenítés" },
  { img: "/makeup.jpg", title: "Smink" },
  { img: "/additional.jpg", title: "További kezeléseink" },
];

export default function Treatments(props) {
  return (
    <div id="#treatments" className="treatments">
      <div className="treatments-wrapper">
        {TREATMENTS.map((item, index) => (
          <div className="treatment" key={index}>
            <Image src={item.img} width={250} height={509} alt={item.title} />
            <h4 className="treatment-title">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
