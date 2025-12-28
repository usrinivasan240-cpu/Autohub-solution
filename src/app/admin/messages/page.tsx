'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Search, Filter, MoreVertical,
  ArrowLeft, Phone, Mail, Clock, User,
  Send, Paperclip, Smile, Check, CheckCheck
} from 'lucide-react';

const conversations = [
  { 
    id: 1, 
    name: 'John Doe', 
    avatar: 'J',
    company: 'TechCorp Solutions',
    lastMessage: 'Thanks for the information!',
    time: '10:32 AM',
    unread: 2,
    online: true,
    messages: [
      { id: 1, text: 'Hi! I saw your website and I\'m interested in WhatsApp automation.', sender: 'user', time: '9:15 AM' },
      { id: 2, text: 'Hello John! Thanks for reaching out. I\'d be happy to help you with that. What type of business are you in?', sender: 'me', time: '9:20 AM' },
      { id: 3, text: 'We run a software development company with about 50 employees. We get a lot of customer queries.', sender: 'user', time: '9:25 AM' },
      { id: 4, text: 'Perfect! Our Pro plan would be ideal for you. It includes:\n\n• 5,000 conversations/month\n• Unlimited AI responses\n• 10 language support\n• CRM integrations\n\nWould you like me to share more details?', sender: 'me', time: '9:30 AM' },
      { id: 5, text: 'Yes, please share the pricing details.', sender: 'user', time: '10:00 AM' },
      { id: 6, text: 'Sure! Here are the plans:\n\nBasic: ₹2,999/month (1,000 conv.)\nPro: ₹7,999/month (5,000 conv.)\nEnterprise: ₹24,999/month (unlimited)\n\nAll plans include a 14-day free trial!', sender: 'me', time: '10:15 AM' },
      { id: 7, text: 'Thanks for the information!', sender: 'user', time: '10:32 AM' },
    ]
  },
  { 
    id: 2, 
    name: 'Priya Sharma', 
    avatar: 'P',
    company: 'Startup.io',
    lastMessage: 'When can we schedule a demo?',
    time: '9:15 AM',
    unread: 1,
    online: false,
    messages: []
  },
  { 
    id: 3, 
    name: 'Amit Patel', 
    avatar: 'A',
    company: 'Foodie连锁',
    lastMessage: 'Great, I\'ll check and get back.',
    time: 'Yesterday',
    unread: 0,
    online: true,
    messages: []
  },
  { 
    id: 4, 
    name: 'Sanjay Kumar', 
    avatar: 'S',
    company: 'Grand Hotel',
    lastMessage: 'Is there a discount for annual billing?',
    time: 'Jan 14',
    unread: 0,
    online: false,
    messages: []
  },
];

export default function AdminMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Add message to conversation
    const newMsg = {
      id: selectedConversation.messages.length + 1,
      text: newMessage,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    // In a real app, this would update the backend
    console.log('Sending message:', newMsg);
    setNewMessage('');
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex">
      {/* Conversations List */}
      <div className="w-80 bg-white rounded-xl shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 border-b border-secondary-100">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`w-full p-4 flex items-start space-x-3 hover:bg-secondary-50 transition-colors ${
                selectedConversation.id === conversation.id ? 'bg-primary-50' : ''
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                  {conversation.avatar}
                </div>
                {conversation.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-secondary-900 truncate">{conversation.name}</h3>
                  <span className="text-xs text-secondary-400">{conversation.time}</span>
                </div>
                <p className="text-sm text-secondary-500 truncate">{conversation.company}</p>
                <p className={`text-sm truncate ${conversation.unread > 0 ? 'text-secondary-900 font-medium' : 'text-secondary-500'}`}>
                  {conversation.lastMessage}
                </p>
              </div>
              {conversation.unread > 0 && (
                <span className="w-5 h-5 bg-primary-500 rounded-full text-white text-xs flex items-center justify-center">
                  {conversation.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-xl shadow-sm ml-6 flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-secondary-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="lg:hidden p-2 text-secondary-600 hover:bg-secondary-100 rounded-lg">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="relative">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                {selectedConversation.avatar}
              </div>
              {selectedConversation.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900">{selectedConversation.name}</h3>
              <p className="text-sm text-secondary-500">{selectedConversation.company}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-secondary-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-secondary-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg">
              <Mail className="w-5 h-5" />
            </button>
            <button className="p-2 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 rounded-lg">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {selectedConversation.messages.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
              <p className="text-secondary-500">No messages yet. Start the conversation!</p>
            </div>
          ) : (
            selectedConversation.messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-lg ${message.sender === 'me' ? 'order-2' : ''}`}>
                  <div className={`rounded-2xl p-4 ${
                    message.sender === 'me'
                      ? 'bg-primary-500 text-white rounded-br-md'
                      : 'bg-secondary-100 text-secondary-900 rounded-bl-md'
                  }`}>
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                  <div className={`flex items-center mt-1 text-xs text-secondary-400 ${
                    message.sender === 'me' ? 'justify-end' : ''
                  }`}>
                    <span>{message.time}</span>
                    {message.sender === 'me' && (
                      <CheckCheck className="w-4 h-4 ml-1 text-primary-400" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-secondary-100">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
            <button
              type="button"
              className="p-2 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 rounded-lg"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="button"
              className="p-2 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 rounded-lg"
            >
              <Smile className="w-5 h-5" />
            </button>
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="p-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
