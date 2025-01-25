import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const map = [1, 2, 3, 4, 5, 6];
    const nevigate = useNavigate();
    const enterInSpace = (spaceName) =>{
        nevigate(`/space/${spaceName}`)
    }
    return (
        <div className='max-w-xxl'>
            <nav class="bg-white border-gray-200 dark:bg-gray-900 pb-3">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Colab</span>
                    </a>
                </div>
            </nav>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    map.map((ele, idx) => {
                        return (
                            <div key={idx} style={{margin: 'auto'}}>
                                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Space Name {ele}</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">lorem dfsd fsd sdf sdfsdsf sdf dsf sdf sd</p>
                                    <a onClick={()=>enterInSpace(ele)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Get stared
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
