'use client';

import { useEffect } from 'react';

export default function EwayPayButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://secure.ewaypayments.com/scripts/eCrypt.js';
    script.className = 'eway-paynow-button';
    script.setAttribute('data-publicapikey', 'epk-7C850896-2DE8-4F6D-A30B-6CA74087B0EE');
    script.setAttribute('data-amount', '1000'); // مبلغ به سنت
    script.setAttribute('data-currency', 'AUD');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>پرداخت با eWAY</h2>
      {/* دکمه به صورت خودکار توسط اسکریپت اضافه می‌شود */}
    </div>
  );
}