import NavBar from "@/app/components/NavBar";
import {PageHeader} from "@/app/components/PageHeader";
import {NewItem} from "@/app/week-5/NewItem";
import {ItemListImproved} from "@/app/week-5/item-list";

export default function Page() {
  const pageHeaderData = {
    pageTitle: 'Week 5: Interactable Shopping List',
    description: "The beginnings of an interactable shopping list that would allow users to add new grocery items to the list.",
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

      <div className={`flex flex-row justify-center`}>
        <div className='m-6 mr-10 flex-1'>
          <NewItem/>
        </div>
        <div className="flex flex-2 align-center items-center h-full w-1/2 mr-6 my-6">
          <ItemListImproved/>
        </div>
      </div>
    </main>
  )
}