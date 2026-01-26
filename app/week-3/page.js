import {Item} from "@/app/week-3/GroceryItem";
import {PageHeader} from "@/app/components/PageHeader";
import NavBar from "@/app/components/NavBar";
import {GroceryItemList} from "@/app/week-3/GroceryItemList";

export default function Page() {
  const pageHeaderData = {
    pageTitle: 'Week 3: Shopping List',
    description: "This page uses props to implement a grocery list full of different grocery item components.",
    primaryColour: 'bg-sky-900',
    secondaryColour: 'bg-sky-950',
  }
  const bgGradient = '' +
    'bg-linear-to-tr from-slate-200 to-slate-300' +
    'dark:bg-linear-to-tr dark:from-slate-800 dark:to-slate-950'

  return (
    <main className={`min-h-screen w-full ${bgGradient}`}>
      <NavBar/>
      <PageHeader {...pageHeaderData}/>

      <div className={`flex flex-col items-center justify-center`}>
        <div className="flex align-center items-center h-full w-1/2">
          <GroceryItemList/>
        </div>
      </div>

    </main>
  );
}