import { useCallback, useEffect, useState } from "react"

const sectionMenu = [
  {
    id: 1,
    name: "Pomodoro"
  },
  {
    id: 2,
    name: "Short Break"
  },
  {
    id: 3,
    name: "Long Break"
  },
]

const Timer = () => {

  const [pomodoroTime, setPomodoroTime] = useState(1500000)
  const [shortBreakTime, setShortBreakTime] = useState(300000)
  const [longBreakTime, setLongBreakTime] = useState(900000)
  const [active, setActive] = useState(pomodoroTime)
  const [activeSection, setActiveSection] = useState(1)
  const [isPaused, setIsPaused]  = useState(true)

  const handleClick = useCallback((activeSection) => {
    setActiveSection(activeSection);
  })

  useEffect(() => {
    switch(activeSection) {
      case 1:
        setActive(pomodoroTime)
        break
      case 2:
        setActive(shortBreakTime)
        break
      case 3:
        setActive(longBreakTime)
        break
    }
  }, [activeSection])


  
  return (
    <section className="my-10 w-[85%] min-h-[310px] p-5 bg-white/10 rounded-md mx-auto">
      <div >
        <ul className="flex justify-center">
          {sectionMenu.map((data) => (
            <li key={data.id} className="mx-1 hover:bg-slate-500/50 rounded transition-colors">
              <button 
              className={`text-white  transition-colors py-1 px-3 rounded-md font-medium ${activeSection == data.id ? "bg-slate-700" : "" }`}
              onClick={() => handleClick(data.id)}
              >
                {data.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center flex-row items-center content-center mt-5">
        <span className="text-9xl text-white font-semibold mb-5">{
          (`0`+ Math.floor(active/60000)%60).slice(-2)
        }</span>
        <span className="text-9xl text-white font-semibold mb-5">:</span>
        <span className="text-9xl text-white font-semibold mb-5">{
          (`0`+ Math.floor(active/1000)%60).slice(-2)
        }</span>
      </div>
      <div className="flex items-center content-center justify-center">
        <button className="text-[30px] py-2 px-12 bg-white rounded  font-semibold text-slate-800">START</button>

      </div>
    </section>
  )
}

export default Timer