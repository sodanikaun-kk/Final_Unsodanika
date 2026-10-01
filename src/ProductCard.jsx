import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="w-72 bg-gray-100 rounded-2xl shadow-lg border border-gray-200 p-6">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain rounded-xl mb-5"
      />

      <h2 className="text-lg font-bold text-gray-800">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold text-xl mt-3">
        ${product.price}
      </p>

    </div>
  );
}


export default ProductCard;