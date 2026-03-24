import {useUserAuth} from "@/app/contexts/AuthContext";
import {router} from "next/client";
import {useRouter} from "next/navigation";

export function SignInButton () {

  const { gitHubSignIn } = useUserAuth();

  const handleSignIn = async () => {
    // firebase sign in
    await gitHubSignIn();
  }

  return (
    <button
      onClick={() => handleSignIn()}
      className="px-6 py-2 rounded-lg bg-slate-600 text-white hover:bg-sky-800 transition cursor-pointer"
    >
      <p className="font-bold ">Sign In</p>
    </button>
  )
}

export function SignOutButton () {

  const { firebaseSignOut, setLoggedOutNoti } = useUserAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    // firebase sign out
    await firebaseSignOut();
    setLoggedOutNoti(true)
    router.replace("/")
  }

  return (
    <button
      onClick={() => handleSignOut()}
      className="px-6 py-2 rounded-lg bg-slate-600 text-white hover:bg-sky-800 transition cursor-pointer"
    >
      <p className="font-bold ">Sign Out</p>
    </button>
  )
}