"use client"
import React from 'react'

function Body({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex-grow'>
            {children}
        </div>
    )
}

export default Body
