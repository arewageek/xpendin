import React, { useContext, useEffect, useState } from 'react'
import { Web3Context } from '../context/Web3Context'

export const Row = ({ index, data }) => {

    const [amount, setAmount] = useState(0)
    const [gas, setGas] = useState(0)
    const [gasPrice, setGasPrice] = useState(0)
    
    const { valueFormatter, gasFormatter } = useContext(Web3Context)

    const trxValue = data.value

    useEffect(() => {
        return async () => {
            const eth = await valueFormatter(Number(data.value))
            const gas = await gasFormatter(Number(data.gas))
            const gasPrice = await gasFormatter(Number(data.gasPrice))

            setAmount(eth)
            setGas(gas)
            setGasPrice(gasPrice)
        }
    }, [trxValue])
    
    return (
        
        data && <tr key={index}>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600 font-semibold italic'>
                {index}
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600 font-semibold italic'>
                { data.hash && data.hash.slice(0,6) }...{ data.hash && data.hash.slice(-7) }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600 font-semibold italic'>
                { data.from && data.from.slice(0,6) }...{ data.from && data.from.slice(-7) }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600 font-semibold italic'>
                { data.to && data.to.slice(0,6) }...{ data.to && data.to.slice(-7) }
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600 font-semibold italic'>
                { data.data && data.data.slice(0,7) }{data.data.length > 7 ? '...' : ''}
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600 font-semibold italic'>
                {
                    amount && Number(amount)
                } Eth
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600 font-semibold italic'>
                { gas && gas } Gwei
            </td>
            <td className='p-2 border-2 border-gray-200 dark:border-gray-600 font-semibold italic'>
                { gasPrice && gasPrice } Gwei
            </td>
        </tr>
        
    )
}
