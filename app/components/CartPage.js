'use client';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseQty, removeFromCart } from '../store/cartSlice';
import { useRouter } from 'next/navigation';
import Header from './Header';

export default function CartPage() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = total > 0 ? 40 : 0;
  const discount = total > 200 ? 30 : 0;
  const grandTotal = total + delivery - discount;

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4 w-full">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {items.length === 0 ? (
          <div className="text-gray-500 text-center py-10">
            Your cart is empty.
            <br />
            <button
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
              onClick={() => router.push('/')}
            >
              let&apos;s go shopping
            </button>
          </div>
        ) : (
          // Responsive flex: column on mobile, row on md+
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Cart Items */}
            <div className="md:w-2/3 w-full order-1">
             <div className="space-y-4 overflow-x-auto">
  {items.map(item => (
    <div
      key={item.id}
      className="flex flex-row items-center gap-2 sm:gap-4 bg-white p-2 sm:p-3 rounded shadow flex-nowrap"
      style={{ minWidth: 320 }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-14 h-14 object-contain bg-gray-100 rounded"
      />
      <div className="flex-1 min-w-0">
        <div className="font-semibold truncate">{item.name}</div>
        <div className="text-sm text-gray-600 flex items-center gap-2 flex-wrap">
          Qty:
          <button
            className="px-2 py-0.5 bg-gray-200 rounded text-lg font-bold"
            onClick={() => dispatch(decreaseQty(item.id))}
          >-</button>
          <span className="px-2">{item.qty}</span>
          <button
            className="px-2 py-0.5 bg-gray-200 rounded text-lg font-bold"
            onClick={() => dispatch(addToCart({ ...item, qty: 1 }))}
          >+</button>
          <button
            className="ml-2 px-2 py-0.5 bg-red-500 text-white rounded text-xs"
            onClick={() => dispatch(removeFromCart(item.id))}
          >Remove</button>
        </div>
        <div className="text-sm text-gray-600">${item.price} each</div>
      </div>
      <div className="font-bold text-blue-800 min-w-fit text-right pl-2">
        ${item.price * item.qty}
      </div>
    </div>
  ))}
</div>
            </div>
            {/* Price Summary - show right on md+ */}
            <div className="md:w-1/3 w-full order-2">
              <div className="bg-gray-50 rounded p-4 mt-6 md:mt-0 shadow md:sticky md:top-24">
                <h3 className="font-semibold text-lg mb-3">Price Summary</h3>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Delivery Charges</span>
                  <span>{delivery === 0 ? 'Free' : `$${delivery}`}</span>
                </div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Discount</span>
                  <span className="text-green-600">- ${discount}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span>${grandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}