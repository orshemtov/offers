import type { NextPage } from "next"
import { Topbar } from "../components/Topbar/Topbar"
import { Offer } from "../components/Offer/Offer"

const Home: NextPage = () => {
  const item = {
    name: "Camera",
    description: "A security camera",
    price: 200.00,
    image: "https://www.satsigma.co.il/wp-content/uploads/2021/02/HIKVISION-DS-2CD1153G0-I-2.8mm-C.png"
  }

  return (
    <div>
      <Topbar/>
      <Offer/>
    </div>
  )
}

export default Home
