import { usePathname } from "next/navigation";
import Image from "next/image";

const DESCRIPTIONS = {
  "/arckezeles/mezopen": {
    title: "Mezopen",
    description:
      "Mezopen loorem ipsum ezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsum",
    img: "/facial.jpg",
  },
  "/arckezeles/vega": {
    title: "VEGA Lab Tech",
    description:
      "VEGA Lab Tech loorem ipsum ezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsumezopen loorem ipsum",
    img: "/facial.jpg",
  },
};

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname === null) return <></>;

  const { img, title, description } = DESCRIPTIONS[pathname];
  return (
    <div className="treatment-description">
      <div className="treatment-header">
        <Image src={img} width={250} height={509} alt={title} />
        <div className="description-column">
          <h1 className="subtitle">{title}</h1>
          <span className="description">{description}</span>
        </div>
      </div>

      <div className="motto">
        <h1 className="subtitle">Bemutatkozás</h1>
        <span className="description">{description}</span>
      </div>
    </div>
  );
}
