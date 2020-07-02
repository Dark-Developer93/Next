import Link from "next/link";
// import logoImage from "../public/logo.png";

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="/logo.png" alt="Logo" />
      </a>
    </Link>

    <style jsx>{`
      .logo img {
        display: block;
        width: 120px;
      }
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);

export default Logo;
