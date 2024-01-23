import { Bell, Plus, Search } from 'lucide-react'
import React from 'react'
import { ModeToggle } from './ModeButton'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ChatNav() {
    return (
        <div className='flex w-full align-middle pt-7 pl-6 pb-4 pr-16 bg-slate-900 '>

            <div className=" flex p-2 mr-96 rounded-full align-middle justify-start bg-blue-800">
                <button> <Plus strokeWidth={1.75} /></button>
            </div>
            <div className="flex justify-end ml-96">
                <div className="flex p-2 rounded-full">
                    <button>  <Search strokeWidth={1.75} /></button>
                </div>
                <div className="flex pl-2 pr-2 rounded-full">
                    <ModeToggle />
                </div>
                <div className="flex p-2 rounded-full">
                    <button><Bell strokeWidth={1.75} /></button>
                </div>
                <div className="flex pl-2 pr-2 rounded-full">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>



            </div>
        </div>
    )
}
