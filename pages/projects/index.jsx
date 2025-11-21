'use client';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react/jsx-runtime';

const projects = [
  { id: 7, title: 'Renovation Project', category: 'Renovation', img: '/img/projects/images.jpg' },
  { id: 13, title: 'Renovation Project', category: 'Renovation', img: '/img/home-page-5.jpg' },
  { id: 8, title: 'Renovation Project', category: 'Renovation', img: '/img/home-page-3.jpg' },
  { id: 15, title: 'Modern Construction', category: 'Construction', img: '/img/home-page-10.jpg' },
  { id: 9, title: 'Renovation Project', category: 'Renovation', img: '/img/home-page-4.jpg' },
  { id: 10, title: 'Renovation Project', category: 'Renovation', img: '/img/home-page-1.jpg' },
  { id: 11, title: 'Renovation Project', category: 'Renovation', img: '/img/home-page-2.jpg' },
  { id: 1, title: 'Modern Construction', category: 'Construction', img: '/img/home-page-7.jpg' },
  { id: 13, title: 'Modern Construction', category: 'Construction', img: '/img/home-page-8.jpg' },
  { id: 14, title: 'Modern Construction', category: 'Construction', img: '/img/home-page-9.jpg' },

  { id: 16, title: 'Renovation Project', category: 'Renovation', img: '/img/home-page-11.jpg' },
  { id: 17, title: 'Renovation Project', category: 'Renovation', img: '/img/home-page-12.jpg' },
  { id: 18, title: 'Renovation Project', category: 'Renovation', img: '/img/home-page-13.jpg' },
  { id: 19, title: 'Renovation Project', category: 'Renovation', img: '/img/home-page-14.jpeg' },

  { id: 12, title: 'Renovation Project', category: 'Renovation', img: '/img/bussiness-building.jpg' }
];

export default function Projects() {
  return (
    <Fragment>
      <Head>
        <title>Khush Construction</title>
        <meta
          name="description"
          content="Khush Construction is a trusted real estate builder and construction company in Surat and Bharuch, delivering quality residential and commercial projects since 2012."
        />
      </Head>

      <main>
        {/* =========================
            TOP SECTION WITH IMAGE + TEXT
        ============================ */}
        <section className="wrapper">
          <div className="container py-12 py-md-0">
            <div className="row gx-lg-8 align-items-center">
              {/* Left Image */}
              <div className="order-lg-1 col-lg-6">
                <figure className="img-bg">
                  <Image
                    alt="Civil Work Construction in Location | Buildify"
                    src="/img/projects/underconstruction-4.webp"
                    width={600}
                    height={700}
                    className="position-static"
                  />
                </figure>
              </div>

              {/* Right Content */}
              <div className="order-lg-2 col-lg-6">
                <h2 className="mb-3 mt-3 justify-content-start fs-34 fw-bold oswald">
                  Civil Work
                  <span className="ms-2 fs-34 fw-bold oswald"> Construction in Location</span>
                </h2>

                <p className="mb-8 text-justify roboto">
                  Civil work is the foundation of every strong and reliable structure. We handle all key stages—from
                  site preparation and concrete work to structural framing—using quality materials and trained
                  professionals to ensure long-lasting strength and safety.
                </p>

                <p className="mb-3 text-justify roboto">
                  We also manage essential civil services such as drainage, road work, utility layouts, and finishing
                  tasks. Every project is planned carefully and executed with precision, helping deliver durable results
                  that match your requirements and expectations.
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              TRUCK ANIMATION (Left → Right Only)
          ============================ */}
          <div className="truck-animation-wrapper">
            <img src="/img/vehicle-1.svg" alt="Truck Animation" width={150} height={150} className="truck" />
          </div>
        </section>

        {/* =========================
            PROJECT GRID
        ============================ */}
        <section className="py-5">
          <div className="container">
            <div className="row gy-4">
              <div className="text-center mb-10">
                <h2 className="oswald">
                  Discover Quality-Driven <span>Residential Construction</span> in Location
                </h2>
              </div>

              {projects.map((project) => (
                <div className="col-md-6 col-lg-4" key={project.id}>
                  <div className="card shadow-sm border-0 project-card">
                    <div className="overflow-hidden">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={200}
                        height={300}
                        className="card-img-top project-img"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            CSS STYLES
        ============================ */}
        <style jsx>{`
          /* ------------------------------
             Project Hover Zoom
          --------------------------------*/

          /* Image Popup Hover */
          .project-card {
            overflow: hidden;
            border-radius: 8px;
            transition: transform 0.3s ease;
            cursor: pointer;
          }

          .project-card:hover {
            transform: scale(1.03);
          }

          .project-img {
            transition: transform 0.4s ease;
          }

          .project-card:hover .project-img {
            transform: scale(1.12); /* POP-UP EFFECT */
          }

          /* ------------------------------
             TRUCK ANIMATION (Reusable)
             Moves left → right continuously
          --------------------------------*/
          .truck-animation-wrapper {
            position: relative;
            width: 100%;
            height: 150px;
            overflow: hidden;
            margin-top: -10px;
            margin-bottom: -20px;
          }

          .truck {
            position: absolute;
            left: -200px; /* start off-screen */
            animation: moveTruck 18s linear infinite;
            animation-direction: normal; /* always left → right */
          }

          @keyframes moveTruck {
            0% {
              transform: translateX(-200px);
            }
            100% {
              transform: translateX(calc(100vw + 200px));
            }
          }
        `}</style>
      </main>
    </Fragment>
  );
}
