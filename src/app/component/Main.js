import Introduction from "./Sections/Introduction";
import Reviews from "./Sections/Reviews";
import Treatments from "./Sections/Treatments";
import Socials from "./Sections/Socaials";
import Motto from "./Sections/Motto";

export default function Header(props) {
  return (
    <main>
      <Introduction />
      <Motto />
      <Treatments />
      <Reviews />
      <Socials />
    </main>
  );
}
