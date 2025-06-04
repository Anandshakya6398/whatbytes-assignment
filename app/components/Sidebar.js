'use client';
export default function Sidebar({ category, setCategory, priceRange, setPriceRange }) {
  return (
    <aside className="w-full md:w-80 p-4 space-y-6">
      {/* Blue Card */}
      <div className="bg-[#1560b8] text-white p-6 rounded-2xl shadow flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        {/* Category */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Category</h3>
          <div className="flex flex-col gap-3">
            {['all', 'electronics', 'clothing', 'footwear','accessories'].map((cat) => (
              <label key={cat} className="flex items-center gap-3 capitalize text-base font-normal">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                  className="accent-white w-5 h-5"
                />
                <span className="tracking-wide">{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Price */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Price</h3>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-white"
            />
          </div>
          <div className="flex justify-between text-sm mt-2 font-medium">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>
     
      <div className="bg-white text-[#22223b] p-6 rounded-2xl shadow flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Category</h2>
        <div>
          <div className="flex flex-col gap-3">
            {['all', 'electronics', 'clothing', 'home'].map((cat) => (
              <label key={cat} className="flex items-center gap-3 capitalize text-base font-normal">
                <input
                  type="radio"
                  name="category2"
                  value={cat}
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                  className="accent-blue-500 w-5 h-5"
                />
                <span className="tracking-wide">{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">Price</h3>
          <input
            type="number"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full border rounded px-2 py-1 mt-1"
          />
        </div>
      </div>
    </aside>
  );
}
