import Link from "next/link";

export function NavItem({contents, source}) {
  return(
    <div>
      <Link href={source}>{contents}</Link>
    </div>
  )
}