import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Cog } from 'lucide-react'

const users = [
    {
        name: "satyam",
        message: "hi there",
    },
];


export default function SideBarItems() {
    return (
        <div className='flex flex-col'>
            <div className="flex p-7 pl-8  font-bold text-xl bg-slate-900 border border-slate-500 rounded">
                Personal
                <div className="flex align-middle justify-end ml-48 rounded-full  hover:bg-slate-700">
                    <DropdownMenu>
                        <DropdownMenuTrigger><Cog strokeWidth={1.5} /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>All Messages</DropdownMenuItem>
                            <DropdownMenuItem>Starred</DropdownMenuItem>
                            <DropdownMenuItem>Snoozed</DropdownMenuItem>
                            <DropdownMenuItem>Drafts</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
            <div className="flex bg-slate-900 h-[89vh] w-full border border-slate-500 rounded">
                <div className="flex-1 overflow-y-auto ">

                    <div className=" flex p-4 border-b rounded-lg transition duration-400 hover:bg-slate-800">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="">
                            <p className="pl-2 font-semibold">Ram</p>
                            <p className="pl-2 text-slate-500">Last message...</p>
                        </div>


                    </div>
                    <div className="flex p-4 border-b rounded-lg transition duration-400 hover:bg-slate-800">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="">
                            <p className="pl-2 font-semibold">Abhay</p>
                            <p className="pl-2 text-slate-500">Last message...</p>
                        </div>

                    </div>
                    <div className=" flex p-4 border-b rounded-lg transition duration-400 hover:bg-slate-800">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="">
                            <p className="pl-2 font-semibold">Surya</p>
                            <p className="pl-2 text-slate-500">Last message...</p>
                        </div>


                    </div>
                    <div className="flex p-4 border-b rounded-lg transition duration-400 hover:bg-slate-800">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="">
                            <p className="pl-2 font-semibold">Rohit</p>
                            <p className="pl-2 text-slate-500">Last message...</p>
                        </div>

                    </div>
                    <div className=" flex p-4 border-b rounded-lg transition duration-400 hover:bg-slate-800">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="">
                            <p className="pl-2 font-semibold">Shivam</p>
                            <p className="pl-2 text-slate-500">Last message...</p>
                        </div>


                    </div>
                    <div className="flex p-4 border-b rounded-lg transition duration-400 hover:bg-slate-800">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="">
                            <p className="pl-2 font-semibold">Parth</p>
                            <p className="pl-2 text-slate-500">Last message...</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
