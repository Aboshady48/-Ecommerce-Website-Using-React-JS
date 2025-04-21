import axios from "axios";
import SlideProduct from "../Components/Product/SlideProduct"
import HeroSlider from "../Components/Slider/HeroSlider"
import { useState ,useEffect} from "react";

const categories = [
  "laptops",
  "mobile-accessories",
  "womens-dresses",
  "mens-shirts",
  "skin-care",
  "beauty"
]

const Home = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all(
          categories.map((category) =>
            axios.get(`https://dummyjson.com/products/category/${category}`)
          )
        );

        const data = {};
        categories.forEach((category, index) => {
          data[category] = responses[index].data.products; // Access the `products` array
        });

        setProductsByCategory(data);
        setLoading(false);
      } catch (error) {
        console.error(`Fetch error: ${error}`);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <HeroSlider/>
      
      {
        Object.keys(productsByCategory).map((category) => (
          <SlideProduct key={category} title={category}  products={productsByCategory[category]} />
        ))
      }
    </div> 
  )
}

export default Home
