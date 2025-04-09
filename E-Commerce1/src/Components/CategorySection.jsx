import ManCategory from '../assets/images/Man.png'
import WomanCategory from '../assets/images/Woman.png'
import KidCategory from '../assets/images/Kid.png'


const categories = [
    {
        title:'Man',
        imageUrl: ManCategory,
    },
    {
        title:'Woman',
        imageUrl: WomanCategory,
    },
    {
        title:'Kids',
        imageUrl: KidCategory,
    }
]

const CategorySection = () => {
    return (
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="relative h-64 group cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={category.imageUrl} 
              alt={`${category.title} Category`} 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 left-8">
              <p className="text-xl font-bold">{category.title}</p>
              <p className="text-gray-800 group-hover:text-gray-800 transition-colors">View All</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CategorySection;