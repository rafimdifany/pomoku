import Icon from "../assets/icon-svg"
import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded"
import SettingsRounded from "@mui/icons-material/SettingsRounded"
import AssessmentRounded from "@mui/icons-material/AssessmentRounded"
import { useState } from "react"

const navMenu = [
  {
    name: 'Report',
    key: 1
  },
  {
    name: 'Settings',
    key: 2
  },
  {
    name: 'Login',
    key: 3
  },
]

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="flex justify-between items-center navbar">
      <h2 className="font-poppins font-semibold text-[24px] text-white drop-shadow-sm">Pomoku</h2>


      <ul className="list-none sm:flex hidden flex-1 justify-end font-poppins text-white/90 ">
        {navMenu.map((data) => (
          <li key={data.key}>
            <a href="#" className={`text-[12px] bg-white/25 hover:bg-white/30 transition-colors hover:text-white p-2 rounded-md ${data.key != 3 ? "mr-5" : "mr-0"}`}>
            {data.key == 1 ? <AssessmentRounded/> : data.key == 2 ? <SettingsRounded/> : <AccountCircleRounded/> } {data.name}
            </a>
          </li>
        ))}
      </ul>

      <ul className="list-none flex flex-1 justify-end font-poppins text-white/90 sm:hidden">
        {navMenu.map((data) => (
          <li key={data.key}>
            <a href="#" className={`text-[12px] bg-white/25 hover:bg-white/30 transition-colors hover:text-white p-2 rounded-md ${data.key != 3 ? "mr-5" : "mr-0"}`}>
            {data.key == 1 ? <AssessmentRounded/> : data.key == 2 ? <SettingsRounded/> : <AccountCircleRounded/> }
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}





export default Navbar
