import Icon from "../assets/icon-svg"

const navMenu = [
  {
    name: 'Report',
    key: 1,
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
  return (
    <nav className="max-w-[620px] flex py-6 px-6 justify-between items-center navbar m-auto">
      <h2 className="font-poppins font-semibold text-[24px] text-white drop-shadow-sm">Pomoku</h2>

      <ul className="list-none flex flex-1 justify-end font-poppins text-white/80 ">
        {navMenu.map((data) => (
          <li key={data.key}>
            <a href="#" className="text-[14px] mr-5 bg-white/30 hover:bg-white/40 hover:text-white p-2 rounded-md">
               {data.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}




export default Navbar
