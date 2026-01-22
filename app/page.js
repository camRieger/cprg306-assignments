import Image from "next/image";
import {NavItem} from "@/app/components/NavItem";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <NavItem contents='Week 2: Student Info' source='week-2'/>
    </main>
  );
}
