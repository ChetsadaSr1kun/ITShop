
function Header({ searchText, onSearchChange }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <a className="brand" href="#">
          ITShop
        </a>

        <nav className="main-nav" aria-label="เมนูหลัก">
          <a href="#">หน้าแรก</a>
          <a href="#">สินค้า</a>
        </nav>

        <div className="search-box">
            <input
                type="search"
                placeholder="ค้นหาสินค้า..."
                aria-label="ค้นหาสินค้า"
                value={searchText}
                onChange={(event) => onSearchChange(event.target.value)}
            />

          <button type="button" aria-label="ค้นหา">
            🔍
          </button>
        </div>

        <div className="header-actions">
          <button type="button" aria-label="ตะกร้าสินค้า">
            🛒
          </button>

          <button type="button" aria-label="บัญชีผู้ใช้">
            👤
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;