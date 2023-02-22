'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();
  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm '>
      <form className='p-5 space-x-5 flex'>
        <input
          className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 '
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type='text'
          name=''
          id=''
          placeholder='Type your message here'
        />
        <button type='submit' disabled={!session || !prompt} className='bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'>
          <PaperAirplaneIcon className='w-4 h-4 -rotate-45' />
        </button>
      </form>

      <div>{/* modelselection */}</div>
    </div>
  );
}

export default ChatInput;
