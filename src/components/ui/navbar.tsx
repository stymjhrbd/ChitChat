'use client'
import { Contact, Layers3, Mailbox, MessageSquareText, PhoneCall, Video } from 'lucide-react';
import Image from 'next/image';
import React from 'react'



export default function NavItems() {
    return (
        <div className="h-screen w-full flex flex-col justify-start  bg-slate-800 border border-slate-500">
            <div className="flex pt-3">
                <Image src="/chitChat.png" alt="Chitchat" width={100}
                    height={50} />
            </div>
            <div className="pt-12 ">
                <div className='flex justify-center p-3 rounded-full transition-duration-300 hover:bg-slate-700'>
                    <button><MessageSquareText size={28} strokeWidth={1.75} absoluteStrokeWidth /></button>

                </div>
                <div className='flex justify-center p-3 rounded-full transition-duration-300 hover:bg-slate-700'>
                    <button><PhoneCall size={28} strokeWidth={1.75} absoluteStrokeWidth /></button>
                </div>
                <div className='flex justify-center p-3 rounded-full transition-duration-300 hover:bg-slate-700'>
                    <button><Video size={28} strokeWidth={1.75} /></button>
                </div>
                <div className='flex justify-center p-3 rounded-full transition-duration-300 hover:bg-slate-700'>
                    <button><Mailbox size={28} strokeWidth={1.75} /></button>
                </div>
                <div className='flex justify-center p-3 rounded-full transition-duration-300 hover:bg-slate-700'>
                    <button><Contact size={28} strokeWidth={1.75} /></button>
                </div>
                <div className='flex justify-center p-3 rounded-full transition-duration-300 hover:bg-slate-700'>
                    <button><Layers3 size={28} strokeWidth={1.75} /></button>
                </div>
            </div>
        </div>
    )
}


