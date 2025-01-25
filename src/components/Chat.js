import React, { useState } from 'react'

export default function Chat({sendMessage}) {
    const [message, setMessage] = useState("");
    
    return (
        <div className='flex flex-col justify-between' style={{ height: '90vh' }}>
            <div class="mx-2 flex items-start gap-2.5">
                <div class="flex flex-col gap-1 w-full max-w-[320px]">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                    </div>
                    <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <p class="text-sm font-normal text-gray-900 dark:text-white"> That's awesome. I think our users will really appreciate the improvements.</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-10 flex'>
                    <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-1" placeholder="message..." required />
                    <button type="button" onClick={()=>{sendMessage(message); setMessage("")}} class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 mx-1">Send</button>
            </div>
        </div>
    )
}
