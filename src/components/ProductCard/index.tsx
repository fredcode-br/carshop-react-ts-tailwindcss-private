interface Props {
  imageUrl: string;
  title: string;
  price: number;
  year: number;
  onClick?: () => void;
}

import image from "../../assets/img/defaultcar.jpg"
import Button from "../Button";

function ProductCard({ imageUrl, title, price, year, onClick }: Props ) {
  return (
    <div className=" max-w-72 rounded overflow-hidden shadow-lg p-3 cursor-pointer border border-solid border-black border-opacity-25 bg-white shadow-md" onClick={onClick}>
        <img className="w-full" src={image} alt={title} />
        <p className="font-bold text-center text-xl my-5">{title}</p>
        <Button>
            R${price}
        </Button>  
    </div>
  );
}

export default ProductCard;
