import Image from "next/image";
import {NavItemLarge} from "@/app/components/NavItem";
import {PageHeader} from "@/app/components/PageHeader";
import NavBar from "@/app/components/NavBar";

export default function Home() {
  const pageHeaderData = {
    pageTitle: 'Home Page',
    description: "Welcome to Cam's CPRG-306 Assignment Website! See the pages linked below to check out what I've been working on this semester.",
    primaryColour: 'bg-sky-900',
    secondaryColour: 'bg-sky-950',
  }
  const bgGradient = '' +
    'bg-linear-to-tr from-slate-200 to-slate-300' +
    'dark:bg-linear-to-tr dark:from-slate-800 dark:to-slate-950'

  return (
    <main className={`min-h-screen w-full ${bgGradient}`}>
      <NavBar />
      <PageHeader {...pageHeaderData} />
      <nav className="flex flex-col items-center justify-between">
        <div className="flex flex-row w-full items-center justify-between ">
          <NavItemLarge contents='Week 2: Student Info' source='week-2'/>
          <NavItemLarge contents='Week 3: Shopping List' source='week-3'/>
          <NavItemLarge contents='Week 4: {Not Implemented}' source='week-4'/>
        </div>
        <div className="flex flex-row w-full items-center justify-between ">
          <NavItemLarge contents='Week 5: {Not Implemented}' source='week-5'/>
          <NavItemLarge contents='Week 6: {Not Implemented}' source='week-6'/>
          <NavItemLarge contents='Week 7: {Not Implemented}' source='week-7'/>
        </div>
        <div className="flex flex-row w-full items-center justify-between ">
          <NavItemLarge contents='Week 8: {Not Implemented}' source='week-8'/>
          <NavItemLarge contents='Week 9: {Not Implemented}' source='week-9'/>
          <NavItemLarge contents='Week 10: {Not Implemented}' source='week-10'/>
        </div>
      </nav>
    </main>
  );
}
