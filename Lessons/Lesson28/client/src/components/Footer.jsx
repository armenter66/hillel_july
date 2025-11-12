export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <strong>SimpleShop</strong>
          <p className="muted">Bringing simplicity to online shopping.</p>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <a href="/list">All products</a>
          <a href="/list?category=popular">Popular</a>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} SimpleShop — Built with ❤️</div>
    </footer>
  )
}