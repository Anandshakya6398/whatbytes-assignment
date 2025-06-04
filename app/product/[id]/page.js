'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/store/cartSlice';
import Header from '@/app/components/Header';
// Dummy product data 
const products = [
    {
        id: 1,
        name: 'Running Shoes For Men',
        price: 99,
        oldPrice: 249,
        discount: '65% off',
        image: '/shoes.png',
        rating: 4,
        description: 'Comfortable running shoes for daily use.',
        category: 'Footwear',
        ratingsCount: 984,
        reviewsCount: 58,
    },
    { id: 2, name: 'Wireless Headphone', price: 199, image: '/headphone.png', rating: 5, description: 'High quality wireless headphones.', category: 'Electronics' },
    { id: 3, name: 'Backpack', price: 129, image: '/bag.png', rating: 3, description: 'Spacious and durable backpack.', category: 'Bags' },
    { id: 4, name: 'Smartwatch', price: 249, image: '/smartwatch.png', rating: 4, description: 'Track your fitness and notifications.', category: 'Wearables' },
    { id: 5, name: 'Sunglasse', price: 149, image: '/sunglass.png', rating: 4, description: 'Stylish sunglasses for all seasons.', category: 'Accessories' },
    { id: 6, name: 'Digital Camera', price: 499, image: '/camera.png', rating: 5, description: 'Capture your moments in HD.', category: 'Electronics' },
    { id: 7, name: 'T-shirt', price: 29, image: '/tshirt.png', rating: 3, description: 'Comfortable cotton t-shirt.', category: 'Clothing' },
    { id: 8, name: 'Smartphone', price: 699, image: '/mobile.png', rating: 5, description: 'Latest smartphone with all features.', category: 'Electronics' },
];

// Dummy reviews
const reviews = [
    {
        rating: 5,
        comment: "Comfort and Nice product",
        user: "Madhu Mohan Rao",
        date: "Feb, 2024",
        address: "Karimnagar District"
    },
    {
        rating: 4,
        comment: "Good quality, value for money",
        user: "Priya Sharma",
        date: "Jan, 2024",
        address: "Lucknow"
    },
    {
        rating: 5,
        comment: "Highly recommended!",
        user: "Amit Verma",
        date: "Dec, 2023",
        address: "Jaipur"
    },
    {
        rating: 3,
        comment: "Average, could be better",
        user: "Rahul Singh",
        date: "Nov, 2023",
        address: "Bhopal"
    }
];
function Stars({ count }) {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < count ? 'text-green-600' : 'text-gray-300'}`} fill={i < count ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <polygon points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" />
                </svg>
            ))}
        </div>
    );
}

export default function ProductDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = products.find(p => p.id === Number(id));
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);

    if (!product) {
        return <div className="text-center text-gray-500 py-20">Product not found.</div>;
    }
    const totalPrice = product.price * qty;
    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, qty }));
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
    };

    return (
        <>
            <Header />
            <div
                className="max-w-7xl mx-auto px-2 sm:px-6 py-6 sm:py-10 flex flex-col md:flex-row gap-6 md:gap-10 bg-white rounded-lg shadow min-h-[80vh]"
                style={{ height: 'auto' }}
            >
                <div className="w-full md:w-auto flex-1 flex flex-col items-center justify-start mb-4 md:mb-0">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-[520px] h-[320px] sm:h-[400px] md:h-[520px] bg-gray-100 rounded-lg flex items-center justify-center shadow
                    group transition-all duration-300
                    md:sticky md:top-24 md:self-start
                ">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                            style={{ maxHeight: 500 }}
                        />
                    </div>
                </div>

                {/* Right: Details (scrollable only on md and up) */}
                <div
                    className="flex-[1.3] flex flex-col gap-4 justify-start pr-0 md:pr-2
                    max-h-none md:overflow-y-auto md:max-h-[calc(100vh-80px)]"
                    style={{ maxHeight: 'none' }} // Remove maxHeight for mobile
                >
                    {/* Breadcrumbs */}
                    <div className="text-xs text-gray-400 mb-2">
                        Home &gt; {product.category} &gt; {product.name}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base font-medium text-gray-700">{product.name}</span>
                    </div>
                    <div className="text-green-700 font-semibold text-base">Special price</div>
                    <div className="flex flex-wrap items-end gap-2 sm:gap-4 mt-1">
                        <span className="text-2xl sm:text-3xl font-bold text-green-700">${product.price}</span>
                        {product.oldPrice && (
                            <span className="line-through text-gray-400 text-lg">${product.oldPrice}</span>
                        )}
                        {product.discount && (
                            <span className="text-green-600 font-semibold">{product.discount}</span>
                        )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                        <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                            <span className="text-green-700 font-bold">{product.rating}★</span>
                            <Stars count={product.rating} />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">
                            {product.ratingsCount || 984} ratings and {product.reviewsCount || 58} reviews
                        </span>
                        <span className="ml-2 text-blue-800 font-semibold text-xs bg-blue-100 px-2 py-1 rounded">Assured</span>
                    </div>

                    {/* Delivery & Services */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mt-2">
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                            <span>💰</span>
                            <span>Cash on Delivery available</span>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="text-gray-700 text-base mt-2">Description: - {product.description}</div>
                    <div className="text-sm text-gray-500 ">Category: {product.category}</div>
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3">
                        <span className="font-medium">Quantity:</span>
                        <button
                            className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
                            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                        >-</button>
                        <span className="px-4 text-lg">{qty}</span>
                        <button
                            className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
                            onClick={() => setQty(qty + 1)}
                        >+</button>
                    </div>
                    {/* Add to Cart Button */}
                    <button
                        className={`w-full sm:w-auto px-4 py-3 rounded font-semibold transition-colors duration-200 shadow ${added
                            ? 'bg-green-600 text-white'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        onClick={handleAddToCart}
                    >
                        {added ? 'Added!' : 'Add to Cart'}
                    </button>
                    {/* Reviews Section */}

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-3">Reviews</h3>
                        <div className="space-y-4">
                            {reviews.map((r, i) => (
                                <div key={i} className="bg-gray-50 p-4 rounded shadow-sm flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                                            {r.rating}
                                            <svg className="w-4 h-4 text-white inline" fill="currentColor" viewBox="0 0 20 20">
                                                <polygon points="10,2 12.59,7.36 18.51,8.09 14,12.26 15.18,18.09 10,15.27 4.82,18.09 6,12.26 1.49,8.09 7.41,7.36" />
                                            </svg>
                                        </span>
                                        <span className="font-medium text-base">{r.comment}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-700">
                                        <span className="font-semibold text-gray-800">{r.user}</span>
                                        <span>{r.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Certified Buyer, {r.address}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
