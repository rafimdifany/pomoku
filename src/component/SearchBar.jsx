const SearchBar = () => {
  return(
    <section>
      <div className="flex flex-col flex-1 items-center">
        <input type="text" className="w-[85%] h-10 py-3 px-5 mb-5 box-border rounded shadow-md "/>
        <button className="bg-teal-200 text-[18px] py-2 px-10 rounded shadow-md text-slate-800 font-medium">Search</button>
      </div>
    </section>
  )
}

export default SearchBar