import React from 'react';

export default function VideoChat() {
    const participants = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6];

    return (
        <div className='w-full h-full p-4 fixed top-0 left-0' style={{ paddingBottom: 90, overflow: 'hidden' }}>
            <div className='w-full h-full bg-white rounded-lg shadow-xl border border-gray-200' style={{overflowY: 'auto'}}>
                
            </div>
        </div>
    );
}
