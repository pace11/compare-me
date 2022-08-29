import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const useQuery = () => {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

export const validationData = (params1, params2) => {
  return params1 === params2 &&
    (params1 !== '' || params2 !== '') &&
    (params1 !== false || params2 !== false)
    ? true
    : false
}
