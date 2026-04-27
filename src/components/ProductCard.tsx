import type { IProduct } from "../interfaces";
import { textSlicer } from "../untils/function";
import Image from "./Image";
import Button from "./ui/Button";
interface Iprops {
 product:IProduct
}

const ProductCard = ({product}: Iprops) => {
  const{title , description , imageURL , price} = product
  return (
  <div className="w-full border rounded-xl p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-200 bg-white">
    <Image imageURL={imageURL} alt= {"Product Name"} className=" rounded-md mb-2 h-48 w-full object-cover"/>  

    <h3 className="mb-2">{title}</h3>
    <p>{textSlicer(description)}</p>
    
<div className="flex items-center my-4 ">
   <span className="w-5 h-5 bg-indigo-200 rounded-full inline-block mr-2 cursor-pointer" />
   <span className="w-5 h-5 bg-yellow-400 rounded-full inline-block mr-2 cursor-pointer" />
   <span className="w-5 h-5 bg-red-600 rounded-full inline-block mr-2 cursor-pointer" />

</div>

<div className="flex items-center justify-between">
  <span>{price}</span>

     <Image
    imageURL={imageURL}   
    alt= {"Product Name"} 
    className="w-10 h-10 rounded-full object-bottom"
    />  
</div>


      
    <div className=" flex items-center justify-between space-x-2 mt-5">
      
      <Button  className="bg-indigo-700" width="w-full" >EDIT ✌</Button>
       
   
      <Button className="bg-red-700">DELETE</Button>
    
    </div>

    </div>
  )
}

export default ProductCard;