'use client'

import {useUserAuth} from "@/app/contexts/AuthContext";

export function PageHeader({
                             pageTitle,
                             description,
                             secondaryDescription = '',
                             primaryColour = 'bg-amber-950',
                             secondaryColour = 'bg-amber-950',
}) {

  const { user } = useUserAuth();

  return (
    <header className="w-full flex flex-row p-4">
      <div className={`flex flex-1 flex-col rounded-2xl items-center ${primaryColour} mr-4`}>
        <h1 className='flex-1 p-4 pt-8 text-3xl'>{pageTitle}</h1>
        <p className="flex-1 p-8 text-lg text-center">{description}</p>
      </div>

      <div className={`flex flex-1 flex-row items-center text-center rounded-2xl ${secondaryColour}`}>
        <p className="flex-1 p-4 font-bold text-2xl">
          {
            user ? `Current User: ${user.displayName}` : "No User Currently Logged In"
          }
        </p>
      </div>
    </header>
  )
}

export function LandingHeader({
                             pageTitle,
                             description,
                             primaryColour = 'bg-amber-950',
                             secondaryColour = 'bg-amber-950',
}) {
  return (
    <header className="w-full flex flex-row justify-center p-4 mt-10">
      <div className={`flex flex-col rounded-2xl items-center justify-center w-7/10 ${primaryColour} mr-4`}>
        <h1 className='flex-1 p-4 pt-8 text-3xl'>{pageTitle}</h1>
        <p className="flex-1 p-8 text-lg text-center">{description}</p>
      </div>
    </header>
  )
}