export default function FormSearch(): JSX.Element {
  return (
    <form 
      className="bg-background h-11 flex items-center rounded-xl p-4 text-b w-full max-w-[506px] text-black border-1 border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
    >
      <input
        type="text"
        placeholder="Search here..."
        className="outline-none bg-background flex-1"
      />
      <button
        type="submit"
      >
        <img src="/images/icons/icon-search.png" alt="Search Icon" width={35} height={35} />
      </button>
    </form>
  )
}
