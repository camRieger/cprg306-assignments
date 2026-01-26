import {Item} from "@/app/week-3/GroceryItem";
import {PageHeader} from "@/app/components/PageHeader";
import NavBar from "@/app/components/NavBar";

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
      <Item name={'milk'} quantity={5} category={'dairy'}/>
    </main>
  );
}