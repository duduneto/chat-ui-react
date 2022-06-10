import React, { createContext, useMemo } from 'react';
// import {
//   AuthResponse,
//   OccupationTypes,
//   UserTypes,
//   MenuTypes,
//   AuthEcResponse,
// } from '../services/common/types';
import useChat from './hooks/useChat';

// interface ChatContextData {
//   user: UserTypes | any;
//   menus: MenuTypes[] | [];
//   occupations: OccupationTypes[] | [];
//   loading: boolean;
//   isAuthenticated: boolean;
//   /* eslint  no-unused-vars: off */
//   signIn(email: string, password: string): Promise<AuthResponse | any>;
//   signOut: () => void;
//   changeEc(ecId: string): Promise<AuthEcResponse | any>;
// }

const ChatContext = createContext({});

export const ChatProvider = ({ children }) => {
    const {
        messages,
        getMessages,
        setNewMessage
    } = useChat();

    const value = useMemo(
        () => ({
            messages,
            getMessages,
            setNewMessage
        }),
        [messages, getMessages, setNewMessage]
    );

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContext;
