import React, { createContext, ReactNode, useRef   } from "react"

export const DataContext = createContext<SongContextType | null>(null)

type SongsContextProps = {
  children: ReactNode
}

function SongsContext({ children }: SongsContextProps) {
    const AudioRef = useRef(new Audio())

  const value = {AudioRef}

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default SongsContext