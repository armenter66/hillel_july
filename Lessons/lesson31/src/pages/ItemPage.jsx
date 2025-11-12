import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router"
import ProductCard from "../components/ProductCard";

export default function ItemPage({ items }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = useState();
  console.log(location);

  useEffect(() => {
    const product = items.find(listItem => listItem.id == id);
    if (!product) {
      navigate('/404');
    } else {
      setItem(product);
    }

  }, [id, items, navigate]);

  return (
    <div>
      <h2>ItemPage</h2>
      <ProductCard {...item} />
    </div>
  )
}