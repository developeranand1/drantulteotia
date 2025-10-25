'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/Events' },
    { label: 'Blogs', href: '/LatestBlogs' },
    { label: 'Contact Us', href: '/Contact' },
  ];

  return (
    <>
      <style>{`
        .navbar {
          // background: #fff;
           background: linear-gradient(90deg, #ffa726, #81c784);
          // border-bottom: 2px solid #ccc;
          z-index: 999;
          padding: 0.75rem 1rem;
        }

        .brand-icons-wrapper {
  display: flex;
  flex-wrap: nowrap;              /* prevent wrapping */
  justify-content: flex-start;    /* or center if preferred */
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;               /* allow scrolling on small screens */
  -webkit-overflow-scrolling: touch; /* smooth scrolling on iOS */
}


        .brand-icons-wrapper img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .brand-icons-wrapper img:hover {
          transform: scale(1.1);
        }

        .navbar-brand img {
          height: 50px;
          width: auto;
        }

        .nav-link {
          font-weight: 600;
          font-size: 1rem;
          color: #000;
          text-transform: uppercase;
          margin: 0 0.5rem;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ff6f00;
        }

        .btn-join {
          background: #ff6f00;
          border: none;
          color: #fff;
          font-weight: 600;
          padding: 0.4rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
        }

        @media (max-width: 576px) {
          .brand-icons-wrapper img {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>

      <div className="brand-icons-wrapper">
        <Image src="/Narendra Modi.jpg" alt="Modi" width={60} height={60} />
        <Image src="/jpNadda.jpg" alt="JP Nadda" width={60} height={60} />
        <Image src="/amitShah.jpg" alt="Amit Shah" width={60} height={60} />
        <Image src="/Rajnath.jpg" alt="Rajnath Singh" width={60} height={60} />
        <Image src="/bhupendraSingh.jpg" alt="Bhupendra" width={60} height={60} />
        <Image src="/yogi ji.jpg" alt="Yogi Adityanath" width={60} height={60} />
      </div>

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image src="/bjp-logo-png.png" alt="BJP Logo" width={50} height={50} />
            <span className="ms-2 fw-bold fs-4" style={{ color: '#ff6f00' }}>BJP</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center flex-lg-row gap-2 mt-2 mt-lg-0">
              {navItems.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={href} className="nav-item">
                    <Link href={href} className={`nav-link ${isActive ? 'active' : ''}`}>
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="nav-item">
                <Link
  href="https://wa.me/9195684 20467?text=Hello%2C%20I%20want%20to%20join%20BJP."
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-join"
>
  JOIN US NOW →
</Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
