import Introduction from "./Sections/Introduction"
import Reviews from "./Sections/Reviews"
import Treatments from "./Sections/Treatments"

export default function Header(props) {
    return (
     <main>
          <Introduction/>
          <Treatments/>
          <Reviews/>
     </main>
    )
  }
  