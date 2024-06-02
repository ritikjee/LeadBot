import Link from "next/link";

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-3 font-bold border-b border-solid border-zinc-100 dark:border-gray-700 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <p className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Leadbot AI
        </p>
      </div>

      <Link
        href="/dashboard"
        className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-md text-white px-4 py-2 font-bold text-sm hover:bg-orange-400"
      >
        Dashboard
      </Link>
    </div>
  );
}

export default NavBar;
