'use client'
import React, { useState } from 'react';
import ChatNav from './ChatNav';

interface Message {
    id: number;
    text: string;
}

const ChatBox: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            const newMessage: Message = {
                id: messages.length + 1,
                text: inputText,
            };

            setMessages([...messages, newMessage]);
            setInputText('');
        }
    };


    return (
        <div className="flex flex-col p-3 rounded-lg border-[1px solid #ccc] bg-slate-900" >
            <ChatNav />
            <div className='h-full mb-3 pt-[5rem]'
            >
                {messages.map((message) => (
                    <div key={message.id} className='flex justify-end align-middle mb-2' >
                        <div className="p-2 bg-slate-800" style={{ borderRadius: '8px', maxWidth: '70%', wordWrap: 'break-word' }}>
                            {message.text}

                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end items-centre mb-0 pb-0">
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className='flex w-full mr-2 p-3 border rounded-md outline-0'

                />
                <button className='p-2 m-1 bg-blue-600 text-white border-none rounded-md ' onClick={handleSendMessage}>
                    Send
                </button>

            </div>
        </div>
    );
};

export default ChatBox;
