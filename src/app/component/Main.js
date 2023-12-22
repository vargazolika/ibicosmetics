import Introduction from "./Sections/Introduction";
import Reviews from "./Sections/Reviews";
import Treatments from "./Sections/Treatments";
import Socials from "./Sections/Socaials";

export default function Header(props) {
  return (
    <main>
      <Introduction />
      <Treatments />
      <Reviews />
      <Socials />
    </main>
  );
}
