export function PageHeader({
                             pageTitle,
                             description,
                             primaryColour = 'bg-amber-950',
                             secondaryColour = 'bg-amber-950',
}) {
  return (
    <header className="w-full flex flex-row p-4">
      <div className={`flex flex-1 flex-col rounded-2xl items-center ${primaryColour} mr-4`}>
        <h1 className='flex-1 p-4 pt-8 text-3xl'>{pageTitle}</h1>
        <p className="flex-1 p-8 text-lg text-center">{description}</p>
      </div>

      <div className={`flex flex-1 flex-row items-center rounded-2xl ${secondaryColour}`}>
        <p className="flex-1 p-4">some stuff over here</p>
      </div>
    </header>
  )
}