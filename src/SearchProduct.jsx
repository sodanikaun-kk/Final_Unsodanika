function SearchProduct({ search, setSearch }) {
  return (
    <div className="flex justify-center mt-8 mb-8">
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-5 py-3 border border-gray-300 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-green-500
                   shadow-sm"
      />
    </div>
  );
}

export default SearchProduct;