import { useSelector } from "react-redux"
import ProductCard from "../Components/ProductCard"
import NopProduct from "../assets/images/not_found.png"
const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filteredData)
  return (
    <div className="max-auto py-10 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ?
        <>
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">Your Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((product, index) => (
              <ProductCard key={index} product={product}/>
            ))}
          </div>
        </> : 
        <div className="flex justify-center">
          <img src={NopProduct} alt="" />
        </div>
      }
        
    </div>
  )
}

export default FilterData
