"use client";
import { useWindowScroll } from "@uidotdev/usehooks";
import { Link } from "react-scroll";

const LINKS = [
  { to: "#introduction", title: "Bemutatkozás" },
  { to: "#treatments", title: "Kezelés" },
  { to: "#socials", title: "Kapcsolat" },
  { to: "#reviews", title: "Árlista" },
  { to: "#motto", title: "Csapatunk" },
];

export default function Header(props) {
  const [{ x, y }, scrollTo] = useWindowScroll();

  return (
    <header className={y > 0 ? "header-scrolled" : ""}>
      <div className={y > 0 ? "logo-wrapper scrolled" : "logo-wrapper"}>
        {/* <Image src="/logo.png" width={254} height={59} alt="Ibi kozmetika" /> */}
        <h2 className="logo">IBI kozmetika</h2>
        <div>
          <h2 className="logo-scrolled">IBI kozmetika</h2>
        </div>
      </div>
      <nav>
        <ul>
          {LINKS.map((item, index) => (
            <li key={index}>
              <h3>
                <Link
                  className="link"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  {item.title}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
