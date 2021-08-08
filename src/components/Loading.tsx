export const LoadingMessage = ({ loading = false, message = '' }) => {
  if (!loading) return null
  return (
    <div className="rounded flex justify-center items-center text-green-400">
      <svg className="animate-spin w-14 h-14" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"></path></svg>
      <p className="ml-2 font-bold text-xl">{message}</p>
    </div>
  )
}