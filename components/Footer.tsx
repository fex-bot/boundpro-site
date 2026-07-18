import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo.svg" alt="BoundPro" width={160} height={28} />
            <p>
              BoundPro is A and D Software for Federal Firearms Licensees — modern, fast, and built
              around the way you actually run your gun shop.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/comparison">Compare</Link>
              </li>
              <li>
                <Link href="/features#api">API &amp; webhooks</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <a href="mailto:hello@boundpro.app">Contact</a>
              </li>
              <li>
                <a href="https://app.boundpro.app/login">Sign in</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Compliance</h4>
            <ul>
              <li>
                <Link href="/features#compliance">ATF compliance</Link>
              </li>
              <li>
                <Link href="/features#audit">Audit mode</Link>
              </li>
              <li>
                <Link href="/features#nfa">NFA / SOT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 BoundPro Software, LLC. BoundPro is not affiliated with the ATF.</span>
          <span>The #1 A and D Software for FFLs.</span>
        </div>
      </div>
    </footer>
  );
}
