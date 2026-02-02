import NavBar from "@/app/components/NavBar";
import {PageHeader} from "@/app/components/PageHeader";

export default function Page() {
  const pageHeaderData = {
    pageTitle: 'Week 4: Improved Shopping List',
    description: "This page explores how Next.JS handles lists.",
    primaryColour: 'bg-sky-900',
    secondaryColour: 'bg-sky-950',
  }
  const bgGradient = '' +
    'bg-linear-to-tr from-slate-200 to-slate-300' +
    'dark:bg-linear-to-tr dark:from-slate-800 dark:to-slate-950';

  return (
    <main className={`min-h-screen w-full ${bgGradient}`}>
      <NavBar/>
      <PageHeader {...pageHeaderData}/>

    </main>
  )
}