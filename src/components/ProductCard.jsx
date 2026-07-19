import { Link } from "react-router";


function ProductCard({ product }) {
  function formatPrice(price) {
    return price.toLocaleString("th-TH");
  }

  return (
    <article className="product-card">
      <div className="product-image-area">
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        <button
          className="favorite-button"
          type="button"
          aria-label={`เพิ่ม ${product.name} ในรายการโปรด`}
        >
          ♡
        </button>

        <img
          className="product-image"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-card-body">
        <p className="product-category">{product.category}</p>

        <h2 className="product-name">{product.name}</h2>

        <p className="product-rating">
          <span>★</span>
          {product.rating}

          <small>({product.reviews})</small>
        </p>

        <div className="price-row">
          <strong>฿{formatPrice(product.price)}</strong>

          {product.oldPrice && (
            <del>฿{formatPrice(product.oldPrice)}</del>
          )}
        </div>

        <div className="product-card-actions">
        <Link
            className="detail-button"
            to={`/products/${product.id}`}
        >
            ดูรายละเอียด
        </Link>

        <button className="add-cart-button" type="button">
            เพิ่มลงตะกร้า
        </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;