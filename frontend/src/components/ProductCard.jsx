import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product._id}`} className="group max-xl:mx-auto relative">
      <div className="bg-[#F5F5F5] h-40 sm:w-60 sm:h-68 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          className="max-h-30 sm:max-h-44 w-auto object-contain group-hover:scale-110 transition duration-300 p-4"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="flex justify-between gap-3 text-sm text-slate-800 pt-2 sm:max-w-60">
        <div className="flex-1 min-w-0">
          <p className="truncate">{product.name}</p>
          <p className="text-xs text-slate-400 capitalize mt-0.5">{product.category}</p>
          <p className="text-xs mt-1">
            {product.stock > 0 ? (
              <span className="text-slate-400">{product.stock} units left</span>
            ) : (
              <span className="text-rose-500">Out of stock</span>
            )}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-medium">₹{product.price.toFixed(2)}</p>
        </div>
      </div>

      <button className="mt-2 w-full sm:max-w-60 text-xs py-2 bg-slate-800 text-white rounded hover:bg-slate-900 active:scale-95 transition opacity-0 group-hover:opacity-100">
        View Details
      </button>
    </Link>
  )
}