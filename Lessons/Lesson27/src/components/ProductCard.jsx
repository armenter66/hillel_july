import './ProductCard.css'

export default function ProductCard({
  id,
  image = '/logo192.png',
  title = 'Product title',
  price = 19.99,
  onClick
}) {
  const handleClick = () => {
    onClick && onClick(id);
  }
  return (
    <article className="product-card" onClick={handleClick}>
      <div className="product-media">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <div className="product-meta">
          <span className="product-price">${price.toFixed(2)}</span>
        </div>
      </div>
    </article>
  )
}