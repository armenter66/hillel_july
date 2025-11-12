import { useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";

export default function ListPage({ items }) {
  const navigate = useNavigate();
  const handleClick = id => {
    console.log('clicked')
    navigate(`/list/${id}`);
  }
  return (
    <div>
      <h1>ListPage</h1>
      <div>
        {items.map(item => <ProductCard onClick={handleClick} key={item.id} {...item} />)}
      </div>
    </div>
  )
}