'use client';
import { PopupProvider } from './PopupContext';

export default function PopupWrapper({ children }) {
  return <PopupProvider>{children}</PopupProvider>;
}