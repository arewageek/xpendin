import React from 'react'

export const Row = ({ index, data }) => {
    console.log(data)
    return (

        
        data && <tr key={index}>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                {index}
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.hash && data.hash.slice(0,6) }...{ data.hash && data.hash.slice(-7) }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.from && data.from.slice(0,6) }...{ data.from && data.from.slice(-7) }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.to && data.to.slice(0,6) }...{ data.to && data.to.slice(-7) }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.data && data.data.slice(0,7) }{data.data.length > 7 ? '...' : ''}
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                {
                    data.value && data.value
                }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.gas && data.gas }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600'>
                { data.gasPrice && data.gasPrice }
            </td>
        </tr>
        
    )
}
