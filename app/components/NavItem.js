import Link from "next/link";

export function NavItemLarge({
                               contents,
                               source,
                               bgColour = 'bg-gray-300/30'
}) {

  return(
    <Link href={source} className={`flex-1 shadow-lg/20  ${bgColour} hover:bg-gray-400/30 rounded-2xl items-center p-8 m-4`}>
      <span className={`text-2xl`}>{contents}</span>
    </Link>
  )
}

export function NavItemSmall({contents, source}) {
  return(
    <div>
      <Link href={source}>{contents}</Link>
    </div>
  )
}