import NavBar from "@/app/components/NavBar";
import {LandingHeader} from "@/app/components/PageHeader";
import {SignInButton} from "@/app/components/AuthButtons";

export function LoginPage({ signIn }) {
  const pageHeaderData = {
    pageTitle: "You must be logged in to reach this page!",
    description: "Please sign in below to access the shopping list",
    primaryColour: "bg-sky-900",
    secondaryColour: "bg-sky-950",
  };

  const bgGradient =
    "bg-linear-to-tr from-slate-200 to-slate-300 " +
    "dark:bg-linear-to-tr dark:from-slate-800 dark:to-slate-950";

  return (
    <main className={`min-h-screen w-full ${bgGradient}`}>
      <NavBar />
      <LandingHeader {...pageHeaderData} />

      <div className="flex flex-col items-center justify-center mt-10 gap-6">
        <SignInButton/>
      </div>
    </main>
  );
}