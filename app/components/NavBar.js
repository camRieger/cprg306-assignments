import Link from "next/link";

export default function NavBar() {
  return (
    <div className={`h-[8vh] border-b-1 border-slate-800 flex flex-row items-center bg-slate-900`}>
      <div className={`pl-8 flex-12`}>
        <Link className={`font-bold`} href={'/'}>CPRG-306: Web Development 2 Assignments</Link>
      </div>
      <div className={`flex-1`}>
        <Link
          className={`font-bold underline`}
          href={'https://github.com/camRieger'}
          target="_blank"
        >
          GitHub
        </Link>
      </div>
      <div className={`flex-1 underline`}>
        <Link
          className={`font-bold`}
          href={'https://www.linkedin.com/in/cameron-rieger'}
          target="_blank"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  )
}