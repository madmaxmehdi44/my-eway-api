'use client';

import { useEffect, useRef, useState } from 'react';

export default function EwayPayForm() {
    const [amount, setAmount] = useState('');
    const buttonRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://secure.ewaypayments.com/scripts/eCrypt.js';
        script.className = 'eway-paynow-button';
        script.setAttribute('data-publicapikey', 'epk-7C850896-2DE8-4F6D-A30B-6CA74087B0EE');
        script.setAttribute('data-currency', 'AUD');
        script.setAttribute('data-amount', '0'); // مقدار اولیه
        if (buttonRef.current) {
            buttonRef.current.appendChild(script);
        }
    }, []);

    useEffect(() => {
        const button = buttonRef.current?.querySelector('.eway-paynow-button');
        if (button) {
            button.setAttribute('data-amount', amount || '0');
        }
    }, [amount]);

    return (
        <div className="flex flex-col items-center justify-center p-8 shadow-xl bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl animate-fade-in">
            <h2 className="mb-4 text-2xl font-bold text-blue-800">پرداخت با eWAY</h2>
            <input
                type="number"
                placeholder="مبلغ را وارد کنید (دلار)"
                value={amount}
                onChange={(e) => setAmount((parseFloat(e.target.value) * 100).toString())}
                className="w-2/3 px-4 py-2 mb-6 text-lg transition-all duration-300 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div ref={buttonRef} className="animate-bounce-in" />
        </div>
    );
}