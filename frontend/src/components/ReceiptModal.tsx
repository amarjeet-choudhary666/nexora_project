import React, { useEffect, useState } from 'react';
import type { Receipt } from '../types';

interface ReceiptModalProps {
  receipt: Receipt;
  onClose: () => void;
}

const ReceiptModal: React.FC<ReceiptModalProps> = ({ receipt, onClose }) => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Successful!</h3>
          <p className="text-gray-600">Thank you for your purchase</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-center mb-4">
            <h4 className="font-bold text-lg text-gray-800">Receipt</h4>
            <p className="text-sm text-gray-600">Receipt ID: {receipt.receiptId}</p>
            <p className="text-sm text-gray-600">{formatDate(receipt.timestamp)}</p>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-gray-800 border-b pb-2">Items Purchased:</h5>
            {receipt.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-600">
                    ${item.price} x {item.quantity}
                  </div>
                </div>
                <div className="font-semibold text-gray-800">
                  ${item.itemTotal.toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-3 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800">Total Paid:</span>
              <span className="text-xl font-bold text-green-600">
                ${receipt.total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-green-800 font-medium">
                Status: {receipt.status.charAt(0).toUpperCase() + receipt.status.slice(1)}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Auto-closing in {countdown} seconds</span>
            <span>{countdown}/4</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(countdown / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Continue Shopping Now
        </button>
      </div>
    </div>
  );
};

export default ReceiptModal;