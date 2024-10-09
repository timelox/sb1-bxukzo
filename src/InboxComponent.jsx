import React from 'react';

const InboxComponent = () => {
  const messages = [
    { name: 'Martin Randolph', message: "You: What's man!", time: '9:40 AM' },
    { name: 'Andrew Parker', message: 'You: Ok, thanks!', time: '9:25 AM' },
    { name: 'Karen Castillo', message: 'You: Ok, See you in To...', time: 'Fri' },
    { name: 'Maisy Humphrey', message: 'Have a good day, Maisy!', time: 'Fri' },
  ];

  return (
    <div className="w-[360px] bg-white font-inter text-sm max-w-full mx-auto h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-3 border-b">
        <div className="flex items-center flex-1">
          <button className="bg-transparent border-none">
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
          <h1 className="text-sm font-bold ml-4">Inbox</h1>
        </div>
        <div className="flex items-center flex-1 justify-end">
          <button className="bg-pink-500 text-white rounded-full px-2 py-0.5 text-xs mr-4 border border-black">
            $68.00
          </button>
          <button className="bg-transparent border-none relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Rest of the component remains unchanged */}
      {/* Timelox section */}
      <div className="p-3 border-b">
        <h2 className="font-semibold mb-2 text-xs">timelox</h2>
        <div className="flex space-x-4">
          {['andy_h', 'karenne', 'zackjohn', 'kieron_d'].map((name) => (
            <div key={name} className="flex flex-col items-center">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                {name[0].toUpperCase()}
              </div>
              <span className="mt-1 text-[10px]">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Message list */}
      <div className="flex-grow overflow-auto">
        {messages.map((chat, index) => (
          <div key={index} className="flex items-center p-3 border-b">
            <div className="h-8 w-8 mr-3 bg-gray-200 rounded-full flex items-center justify-center text-xs">
              {chat.name[0]}
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-xs">{chat.name}</h3>
              <p className="text-gray-400 truncate text-xs">{chat.message}</p>
            </div>
            <div className="text-[10px] text-gray-400 font-bold">{chat.time}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="sticky bottom-0 w-full max-w-[360px] bg-white border-t flex justify-around py-2">
        {['message-circle', 'clock', 'plus-circle', 'credit-card', 'user'].map((icon) => (
          <button key={icon} className="bg-transparent border-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {icon === 'message-circle' && <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>}
              {icon === 'clock' && <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
              {icon === 'plus-circle' && <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></>}
              {icon === 'credit-card' && <><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></>}
              {icon === 'user' && <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>}
            </svg>
          </button>
        ))}
      </footer>
    </div>
  );
}

export default InboxComponent;