import { IoStarSharp,IoStarHalf } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";


const Product = ({product}) => {
  return (
    <div className="product">
        <div className="img-product">
            <img src={product.images[0]} alt="" />
        </div>
        <h3>{product.title}</h3>
        <p className="name-product">{product.description}</p>
      
      <div className="stars">
      <IoStarSharp />
      <IoStarSharp />
      <IoStarSharp />
      <IoStarSharp />
      <IoStarHalf />
      </div>
      <p className="price">{product.price}</p>

      <div className="action">
        <span>
            <FaCartPlus />
             <FaRegHeart />
             <IoIosShareAlt />
        </span>
      </div>

      

    </div>
  )
}

export default Product
