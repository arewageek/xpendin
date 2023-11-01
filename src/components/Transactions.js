import React, { useContext, useEffect, useState } from 'react'

import { Container } from './Container'
import { Row } from './Row'
import { Web3Context } from '../context/Web3Context'

export const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const [averageGas, setAverageGas] = useState(0)

    const { web3, gasFormatter } = useContext(Web3Context)

    useEffect(() => {
        web3 && fetchTrx()
    }, [web3])

    useEffect(() => {
        return async () => {
            if (transactions.length > 0) {
                console.log(transactions)
                const totalGas = transactions.reduce(
                    (total, tx) => total + parseInt(tx.gas),
                    0
                );
                const avgGas = totalGas / transactions.length;
                const formattedGasAvg = await gasFormatter(avgGas)
                setAverageGas(formattedGasAvg);
            }
        }
    }, [transactions])

    useEffect(() => {
        // console.log("Average Gas Price: " + averageGas)
    })
    
    const fetchTrx = async () => {
        try{
            // console.log(web3)

            if(web3){
                const allData = []
                const subscription = await web3.eth.subscribe('pendingTransactions')
                subscription.on('data', async (data) => {
                    const trxByHash = await web3.eth.getTransaction(data);
                    // console.log(data)
                    // const eachInfoBroken = trxByHash


                    allData.unshift(trxByHash)

                    const last50trx = allData.slice(0,50)
                
                    setTransactions(last50trx);
                })
            }
        }
        catch(e){
            console.log(e)
        }
    }
        
    return (
        <Container>
            <div className='w-full bg-gray-50 dark:bg-gray-700 min-h-[200pt] shadow-xl p-4 rounded-2xl overflow-x-auto'>

                <div className="w-full flex justify-end">
                    <div className='shadow px-3 py-2 text-xs font-bold rounded-lg my-4 mx-2 text-sky-800'>
                        Average Gas: { averageGas } Gwei
                    </div>
                </div>
                
                <table className='table table-auto w-full text-xs text-left border-2 border-gray-200 dark:border-gray-800 border-collapse text-gray-600 dark:text-gray-300'>
                    <thead className='border-2 border-gray-200 dark:border-gray-600'>
                        <tr className='border-2 border-gray-200 dark:border-gray-600'>
                            <th className='p-2 border-2 border-gray-200 dark:border-gray-600 rounded-l-lg'>S/N</th>
                            <th className='p-2 border-2 border-gray-200 dark:border-gray-600'>Block Hash</th>
                            <th className='p-2 border-2 border-gray-200 dark:border-gray-600'>From</th>
                            <th className='p-2 border-2 border-gray-200 dark:border-gray-600'>To</th>
                            <th className='p-2 border-2 border-gray-200 dark:border-gray-600'>Data</th>
                            <th className='p-2 border-2 border-gray-200 dark:border-gray-600'>Value</th>
                            <th className='p-2 border-2 border-gray-200 dark:border-gray-600'>Gas Price</th>
                            <th className='p-2 border-2 border-gray-200 dark:border-gray-600 rounded-r-lg'>Max. Gas Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        { 
                        
                            transactions.length > 0 ? (
                                
                                transactions.map((tx, index) => (
                                    <Row data={tx} index={index + 1} key={index + 1} />
                                ))
                            )
                            : (
                                <tr className='w-full border-gray-200 dark:border-gray-800 border-none'>
                                    <td colSpan={7} className='p-3 text-gray-500 dark:text-gray-400 border-none border-gray-200 dark:border-gray-800 text-center font-bold'>No Pending Transaction Found</td>
                                </tr>
                            )  
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    )
}
