import React from 'react'

export const Container = ({ children }) => {
    return (
        <div className='py-12 px-3 md:px-10'>
            { children }
        </div>
    )
}
