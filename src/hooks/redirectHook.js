import { useState } from 'react'

const useSetRedirect = (status, location) => {
  const [redirect, setRedirect] = useState({ status: false, to: '' })
  setRedirect({
    status: status,
    to: location,
  })
  return redirect
}

export default useSetRedirect
