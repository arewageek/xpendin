import React from 'react'

export const Row = ({ index, data }) => {
    console.log(data)
    return (

        
        data && <tr key={index}>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                {index}
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.hash.slice(0,6) }...{ data.hash.slice(-7) }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.from.slice(0,6) }...{ data.from.slice(-7) }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.to.slice(0,6) }...{ data.to.slice(-7) }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                {
                    data.value
                }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.gas }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.gasPrice }
            </td>
        </tr>
        
    )
}
