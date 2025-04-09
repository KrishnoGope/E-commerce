import { useSelector } from "react-redux"
import ProductCard from "../Components/ProductCard"

const Shop = () => {
    const products = useSelector(state => state.product)
  return (
    <div className="max-auto py-7 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Begin Your Smart Shopping Adventure</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.products.map((product, index) => (
            <ProductCard key={index} product={product}/>
        ))}
        </div>
    </div>
  )
}

export default Shop
