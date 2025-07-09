'use client';

import Image from 'next/image';
import Head from 'next/head';

const galleryImages = [
  { id: 1, src: '/g3.jpg', title: '' },
  { id: 2, src: '/g2.jpg', title: '' },
  { id: 3, src: '/g1.jpg', title: '' },
  { id: 4, src: '/g4.jpg', title: '' },
  { id: 5, src: '/g5.jpg', title: '' },
  { id: 7, src: '/g6.jpg', title: '' },
  { id: 8, src: '/g7.jpg', title: '' },
  { id: 9, src: '/g8.jpg', title: '' },
  { id: 10, src: '/g9.jpg', title: '' },
  { id: 11, src: '/g10.jpg', title: '' },
  { id: 12, src: '/g11.jpg', title: '' },
  { id: 15, src: '/g12.jpg', title: '' },
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title> Gallery</title>
      </Head>

      <style jsx global>{`
        body {
          background-color: #fff8f0;
        }
        .card-title {
          font-family: 'Segoe UI', sans-serif;
        }
        .gallery-header {
          background-color: #FF6F00;
          color: white;
          font-weight: bold;
          border-radius: 0.5rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          padding-top: 75%; /* 4:3 aspect ratio */
          overflow: hidden;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
        .image-container img {
          border-radius: inherit;
        }
      `}</style>

      <div className="container py-5">
        <h2 className="text-center mb-5 py-3 gallery-header">
          Photo Gallery
        </h2>

        <div className="row g-4">
          {galleryImages.map((image) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={image.id}>
              <div className="card shadow border-0 h-100">
                <div className="image-container">
                  <Image
                    src={image.src}
                    alt={image.title || 'Gallery Image'}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center bg-light">
                  <h5 className="card-title text-warning">{image.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
