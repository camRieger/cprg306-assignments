import NavBar from "@/app/components/NavBar";
import {PageHeader} from "@/app/components/PageHeader";
import {ItemList} from "@/app/week-4/item-list";

export default function Page() {
  const pageHeaderData = {
    pageTitle: 'Week 4: Improved Shopping List',
    description: "This page explores how Next.JS handles lists. It displays very similarly to week 3, however in this case we are dealing with external data sources that are mapped to components using the .map() function and props!",
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

      <div className={`flex flex-col items-center justify-center`}>
        <div className="flex align-center items-center h-full w-1/2">
          <ItemList/>
        </div>
      </div>
    </main>
  )
}