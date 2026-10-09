import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getUTCFullYear()} Muhammad Hassan Sheikh</p>
        <span>Care in the details. Confidence in the release.</span>
        <Link href="/#home">
          Back to top <span aria-hidden="true">↑</span>
        </Link>
      </div>
    </footer>
  );
}
