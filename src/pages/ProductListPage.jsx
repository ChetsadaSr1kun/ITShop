import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";


function ProductListPage() {

  const [searchText, setSearchText] = useState("");

  const [sortOption, setSortOption] = useState("popular");

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState("all");
  const [minimumRating, setMinimumRating] = useState(0);

  function handleCategoryChange(category) {
    setSelectedCategories((currentCategories) => {
      const isSelected = currentCategories.includes(category);

      if (isSelected) {
        return currentCategories.filter(
          (currentCategory) => currentCategory !== category
        );
      }

      return [...currentCategories, category];
    });
  }

  function clearFilters() {
    setSelectedCategories([]);
    setPriceRange("all");
    setMinimumRating(0);
  }

  const filteredProducts = products.filter((product) => {
  const keyword = searchText.trim().toLowerCase();

  const productName = product.name.toLowerCase();
    const productCategory = product.category.toLowerCase();

    const matchesSearch =
      productName.includes(keyword) ||
      productCategory.includes(keyword);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    let matchesPrice = true;

    if (priceRange === "under-20000") {
      matchesPrice = product.price < 20000;
    }

    if (priceRange === "20000-30000") {
      matchesPrice =
        product.price >= 20000 &&
        product.price <= 30000;
    }

    if (priceRange === "over-30000") {
      matchesPrice = product.price > 30000;
    }

    const matchesRating = product.rating >= minimumRating;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesRating
    );
  });

  const sortedProducts = [...filteredProducts].sort(
    (productA, productB) => {
      switch (sortOption) {
        case "price-low":
          return productA.price - productB.price;

        case "price-high":
          return productB.price - productA.price;

        case "popular":
        default:
          return productB.reviews - productA.reviews;
      }
    }
  );

  return (
    <>
      <Header
        searchText={searchText}
        onSearchChange={setSearchText}
      />

      <main className="catalog-page">
        <section className="page-heading">
          <div>
            <p className="breadcrumb">หน้าแรก / สินค้า</p>
            <h1>สินค้าทั้งหมด</h1>
            <p>
              พบสินค้า {sortedProducts.length} รายการ
            </p>
          </div>

          <select
            aria-label="เรียงลำดับสินค้า"
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
          >
            <option value="popular">สินค้ายอดนิยม</option>
            <option value="price-low">ราคาต่ำไปสูง</option>
            <option value="price-high">ราคาสูงไปต่ำ</option>
          </select>
        </section>

        <div className="catalog-layout">
          <aside className="filters-panel">
            <div className="filter-heading">
              <h2>ตัวกรอง</h2>
              <button
                type="button"
                onClick={clearFilters}
              >
                ล้างทั้งหมด
              </button>
            </div>

        <div className="filter-group">
          <h3>หมวดหมู่</h3>

          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("Gaming Laptop")}
              onChange={() => handleCategoryChange("Gaming Laptop")}
            />
            Gaming Laptop
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("Notebook")}
              onChange={() => handleCategoryChange("Notebook")}
            />
            Notebook
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("Accessories")}
              onChange={() => handleCategoryChange("Accessories")}
            />
            Accessories
          </label>
        </div>

            <div className="filter-group">
              <h3>ช่วงราคา</h3>

              <label>
                <input
                  type="radio"
                  name="price"
                  value="all"
                  checked={priceRange === "all"}
                  onChange={(event) => setPriceRange(event.target.value)}
                />
                ทุกช่วงราคา
              </label>

              <label>
                <input
                  type="radio"
                  name="price"
                  value="under-20000"
                  checked={priceRange === "under-20000"}
                  onChange={(event) => setPriceRange(event.target.value)}
                />
                ต่ำกว่า ฿20,000
              </label>

              <label>
                <input
                  type="radio"
                  name="price"
                  value="20000-30000"
                  checked={priceRange === "20000-30000"}
                  onChange={(event) => setPriceRange(event.target.value)}
                />
                ฿20,000–฿30,000
              </label>

              <label>
                <input
                  type="radio"
                  name="price"
                  value="over-30000"
                  checked={priceRange === "over-30000"}
                  onChange={(event) => setPriceRange(event.target.value)}
                />
                มากกว่า ฿30,000
              </label>
            </div>

          <div className="filter-group">
            <h3>คะแนนสินค้า</h3>

            <label>
              <input
                type="radio"
                name="rating"
                value="0"
                checked={minimumRating === 0}
                onChange={(event) =>
                  setMinimumRating(Number(event.target.value))
                }
              />
              ทุกคะแนน
            </label>

            <label>
              <input
                type="radio"
                name="rating"
                value="4"
                checked={minimumRating === 4}
                onChange={(event) =>
                  setMinimumRating(Number(event.target.value))
                }
              />
              4 ดาวขึ้นไป
            </label>

            <label>
              <input
                type="radio"
                name="rating"
                value="3"
                checked={minimumRating === 3}
                onChange={(event) =>
                  setMinimumRating(Number(event.target.value))
                }
              />
              3 ดาวขึ้นไป
            </label>
          </div>
          </aside>

          <section className="product-grid" aria-label="รายการสินค้า">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className="empty-state">
                <span>🔍</span>
                <h2>ไม่พบสินค้า</h2>
                <p>ลองใช้ชื่อสินค้า หรือคำค้นหาอื่น</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default ProductListPage;