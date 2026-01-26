import Link from "next/link";

export function NavItemLarge({
                               contents,
                               source,
                               bgColour = 'bg-gray-300/30',
}) {
  return(
    <div className={`flex-1 ${bgColour} rounded-2xl items-center p-8 m-4`}>
      <Link href={source} className={`text-2xl`}>{contents}</Link>
    </div>
  )
}

export function NavItemSmall({contents, source}) {
  return(
    <div>
      <Link href={source}>{contents}</Link>
    </div>
  )
}