
export default function BottomNav({filterType}) {
  return <div className="text-[#494c6b] border-[#494c6b] lg:text-[15px] border-b-[0.5px] flex justify-center items-center gap-8 text-sm font-light h-16 rounded-tl-md rounded-tr-md">
    <button onClick={()=>filterType('all')} type="button" className="focus:font-bold">
        All
    </button>
    <button onClick={()=>filterType('active')} type="button" className="focus:font-bold">
        Active
    </button>
    <button onClick={()=>filterType('complete')} type="button" className="focus:font-bold">
        Completed
    </button>
  </div>
}
