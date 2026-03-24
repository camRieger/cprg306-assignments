'use client';

import { useUserAuth } from "../contexts/AuthContext";
import {LoginPage} from "@/app/week-9/LandingPages";
import { useRouter } from "next/navigation";
import {signOut} from "firebase/auth";
import {useEffect} from "react";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut, setLoggedOutNoti } = useUserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    // firebase sign in
    await gitHubSignIn();
  }

  const handleSignOut = async () => {
    // firebase sign out
    await firebaseSignOut();
    setLoggedOutNoti(true)
    router.replace("/")
  }

  useEffect(() => {
    if (user) {
      router.replace("/week-9/shopping-list")
    }
  }, [user]);

  return (
    <div>
      {
        !user && <LoginPage signIn={handleSignIn}></LoginPage>
      }
    </div>
  )
}
