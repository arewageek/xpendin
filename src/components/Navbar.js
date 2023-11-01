import React, {useState, useEffect} from 'react'
import { MoonStarsFill, SunFill } from 'react-bootstrap-icons'

export const Navbar = () => {
    const [darkmode, setDarkmode] = useState(localStorage.getItem('darkmode') || true)

    useEffect(() => {
        localStorage.setItem('darkmode', darkmode)  
        document.documentElement.classList.toggle('dark')
    }, [darkmode])

    return(
        <div className='w-full py-5 px-[20pt] min-h-[20pt] font-[Agbalumo] text-3xl bg-gray-50 shadow-xl dark:bg-gray-700 text-gray-800 dark:text-gray-50 flex justify-between items-center'>
            <div className=''>
                xPendin
            </div>
            <div className='text-2xl cursor-pointer' onClick={() => setDarkmode(prev => !prev)}>
                {
                    darkmode ? <>
                        <MoonStarsFill />
                    </> : <>
                        <SunFill />
                    </>
                }
            </div>
        </div>
    )
}