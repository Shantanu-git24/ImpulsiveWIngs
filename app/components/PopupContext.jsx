'use client';
import { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export function PopupProvider({ children }) {
    const [showPopup, setShowPopup] = useState(false);

    const [step, setStep] = useState(1);

    return (
        <PopupContext.Provider value={{ showPopup, setShowPopup, step, setStep }}>
            {children}
        </PopupContext.Provider>
    );
}

export function usePopup() {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within a PopupProvider');
    }
    return context;
}
