import { Contact, Layers3, Mailbox, MessageSquareText, PhoneCall, Video } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


export default function NavItems() {
    return (
        <div className="h-screen w-full flex flex-col justify-start  bg-slate-800 border border-slate-500">
            <div className="flex align-middle p-2 pl-6 pt-3">
                <Image src="/public/Chat_Icon.png" alt="Chitchat" width={50}
                    height={50} />
            </div>
            <div className="pt-12 ">
                <div className='flex justify-center p-3'>
                    <MessageSquareText size={28} strokeWidth={1.75} absoluteStrokeWidth />

                </div>
                <div className='flex justify-center p-3 '>
                    <PhoneCall size={28} strokeWidth={1.75} absoluteStrokeWidth />
                </div>
                <div className='flex justify-center p-3'>
                    <Video size={28} strokeWidth={1.75} />
                </div>
                <div className='flex justify-center p-3 '>
                    <Mailbox size={28} strokeWidth={1.75} />
                </div>
                <div className='flex justify-center p-3'>
                    <Contact size={28} strokeWidth={1.75} />
                </div>
                <div className='flex justify-center p-3'>
                    <Layers3 size={28} strokeWidth={1.75} />
                </div>
            </div>
        </div>
    )
}


