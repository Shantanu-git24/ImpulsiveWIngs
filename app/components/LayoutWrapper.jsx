'use client';
import PopupForm from './PopupForm';

export default function LayoutWrapper({ children }) {
  return (
    <>
      {children}
      <PopupForm />
    </>
  );
}