"use client"
import { QueryClientProvider, QueryClient } from "react-query"
import { useState } from 'react'

function Provider({ children }: { children: React.ReactNode }) {
    const [queryclient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryclient}>
            {children}
        </QueryClientProvider>
    )
}

export default Provider
