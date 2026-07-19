import { useState } from "react";
import { Link, useParams } from "react-router";
import { products } from "../data/products";



function ProductDetailPage() {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("black");
    const [selectedStorage, setSelectedStorage] = useState("16GB / 512GB");

    const { productId } = useParams();
    const product = products.find(
    (item) => item.id === Number(productId)
  );

    const colorOptions = [
    {
        id: "black",
        name: "สีดำ",
        colorCode: "#111827",
    },
    {
        id: "silver",
        name: "สีเงิน",
        colorCode: "#d1d5db",
    }
    ];

    const storageOptions = [
    "16GB / 512GB",
    "16GB / 1TB",
    "32GB / 1TB",
    ];

  function decreaseQuantity() {
    setQuantity((currentQuantity) =>
        Math.max(1, currentQuantity - 1)
    );
    }

    function increaseQuantity() {
    setQuantity((currentQuantity) =>
        currentQuantity + 1
    );
    }

  function formatPrice(price) {
    return price.toLocaleString("th-TH");
  }

  const totalPrice = product
  ? product.price * quantity
  : 0;

  if (!product) {
    return (
      <main className="detail-page">
        <div className="product-not-found">
          <h1>ไม่พบสินค้านี้</h1>
          <p>รหัสสินค้าอาจไม่ถูกต้อง หรือสินค้าไม่มีอยู่ในระบบ</p>

          <Link className="back-link" to="/">
            ← กลับไปหน้าสินค้า
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <Link className="back-link" to="/">
        ← กลับไปหน้าสินค้า
      </Link>

      <div className="detail-layout">
        <section className="detail-image-section">
          {product.badge && (
            <span className="product-badge">
              {product.badge}
            </span>
          )}

          <img
            className="detail-main-image"
            src={product.image}
            alt={product.name}
          />
        </section>

        <section className="detail-info">
          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="detail-rating">
            <span>★</span>
            {product.rating}
            <small>จาก {product.reviews} รีวิว</small>
          </p>

          <div className="detail-price">
            <strong>
              ฿{formatPrice(product.price)}
            </strong>

            {product.oldPrice && (
              <del>
                ฿{formatPrice(product.oldPrice)}
              </del>
            )}
          </div>

          <p className="stock-status">
            ● มีสินค้าในสต็อก
          </p>

          <div className="variant-section">
            <div className="variant-heading">
                <p>สี</p>
                <span>
                {
                    colorOptions.find(
                    (color) => color.id === selectedColor
                    )?.name
                }
                </span>
            </div>

            <div className="color-options">
                {colorOptions.map((color) => (
                <button
                    key={color.id}
                    className={
                    selectedColor === color.id
                        ? "color-button active"
                        : "color-button"
                    }
                    type="button"
                    onClick={() => setSelectedColor(color.id)}
                    aria-label={`เลือก${color.name}`}
                    title={color.name}
                >
                    <span
                    style={{ backgroundColor: color.colorCode }}
                    />
                </button>
                ))}
            </div>
            </div>

            <div className="variant-section">
            <div className="variant-heading">
                <p>หน่วยความจำและพื้นที่จัดเก็บ</p>
                <span>{selectedStorage}</span>
            </div>

            <div className="storage-options">
                {storageOptions.map((storage) => (
                <button
                    key={storage}
                    className={
                    selectedStorage === storage
                        ? "storage-button active"
                        : "storage-button"
                    }
                    type="button"
                    onClick={() => setSelectedStorage(storage)}
                >
                    {storage}
                </button>
                ))}
            </div>
            </div>

          <p className="detail-description">
            โน้ตบุ๊กประสิทธิภาพสูง เหมาะสำหรับการทำงาน
            การเรียน และความบันเทิง ออกแบบให้ใช้งานง่าย
            พร้อมประสิทธิภาพที่ตอบโจทย์การใช้งานประจำวัน
          </p>

          <div className="quantity-section">
            <p>จำนวน</p>

            <div className="quantity-control">
                <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                aria-label="ลดจำนวนสินค้า"
                >
                −
                </button>

                <span>{quantity}</span>

                <button
                type="button"
                onClick={increaseQuantity}
                aria-label="เพิ่มจำนวนสินค้า"
                >
                +
                </button>
            </div>
                <p className="total-price">
                ราคารวม:
                <strong> ฿{formatPrice(totalPrice)}</strong>
                </p>
            </div>

          <div className="detail-actions">
            <button className="buy-button" type="button">
              ซื้อเลย
            </button>

            <button className="detail-cart-button" type="button">
              เพิ่มลงตะกร้า
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetailPage;