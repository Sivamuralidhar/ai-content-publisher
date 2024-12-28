import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CheckoutButtonProps {
  priceId: string;
  children: React.ReactNode;
}

export function CheckoutButton({ priceId, children }: CheckoutButtonProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // This would be replaced with actual Stripe checkout session creation
      console.log('Creating checkout session for price:', priceId);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Redirect to checkout
      navigate(`/checkout/${priceId}`);
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
    >
      {loading ? 'Processing...' : children}
    </button>
  );
}