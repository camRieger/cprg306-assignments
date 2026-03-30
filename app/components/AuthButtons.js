import {useUserAuth} from "@/app/contexts/AuthContext";
import {router} from "next/client";
import {useRouter} from "next/navigation";
import {useState} from "react";

export function SignInButton () {

  const { gitHubSignIn } = useUserAuth();
  const [signInError, setSignInError] = useState(null);

  const handleSignIn = async () => {
    // firebase sign in
    try {
      await gitHubSignIn();
    } catch (error) {
      setSignInError("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="flex flex-col w-full items-center justify-between ">
      <button
        onClick={() => handleSignIn()}
        className="px-6 py-2 rounded-lg bg-slate-600 text-white hover:bg-sky-800 transition cursor-pointer"
      >
        <p className="font-bold ">Sign In</p>
      </button>
    </div>
  )
}

export function SignOutButton () {

  const { firebaseSignOut, setLoggedOutNoti } = useUserAuth();
  const [signOutError, setSignOutError] = useState(null);
  const router = useRouter();

  const handleSignOut = async () => {
    try{
      // firebase sign out
      await firebaseSignOut();
      setLoggedOutNoti(true)
      router.replace("/")
    } catch (error) {
      setSignOutError("Something went wrong. Please try again.");
    }
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