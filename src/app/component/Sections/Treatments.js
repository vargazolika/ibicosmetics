"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TREATMENTS = [
  { img: "/facial.jpg", title: "Arckezelés", link: "/arckezeles" },
  { img: "/body.jpg", title: "Testkezelése", link: "/testkezeles" },
  { img: "/hands.jpg", title: "Klasszikus kozmetika", link: "/klasszikus" },
  { img: "/hair.jpg", title: "Fülbelövés", link: "/fulbeloves" },
];

export default function Treatments(props) {
  const router = useRouter();

  return (
    <div id="#treatments" className="treatments">
      <div className="treatments-wrapper">
        {TREATMENTS.map((item, index) => (
          <div
            className="treatment"
            key={index}
            onClick={() => router.push(item.link)}
          >
            <Image src={item.img} width={250} height={509} alt={item.title} />
            <h4 className="treatment-title">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
