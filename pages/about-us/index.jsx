import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

export default function AboutUs() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: '📅' },
    { number: '500+', label: 'Projects Completed', icon: '🏗️' },
    { number: '50+', label: 'Expert Workers', icon: '👷' },
    { number: '100%', label: 'Satisfaction Rate', icon: '⭐' }
  ];

  const features = [
    {
      icon: '🔧',
      title: 'Expert Team',
      description: 'Highly skilled professionals with years of construction experience'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'We complete projects on time without compromising quality'
    },
    {
      icon: '✓',
      title: 'Quality Work',
      description: 'Premium materials and craftsmanship in every project'
    },
    {
      icon: '💰',
      title: 'Best Price',
      description: 'Competitive pricing with transparent quotes'
    }
  ];

  const values = [
    { title: 'Safety First', desc: 'We prioritize safety in every project' },
    { title: 'Quality Standards', desc: 'Maintaining highest quality benchmarks' },
    { title: 'Client Focus', desc: 'Your satisfaction is our priority' },
    { title: 'Innovation', desc: 'Modern solutions for construction' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', overflow: 'hidden' }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .hero-banner {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23222" width="1200" height="600"/><g fill="%23444"><circle cx="100" cy="100" r="3"/><circle cx="300" cy="200" r="3"/><circle cx="500" cy="150" r="3"/><circle cx="700" cy="250" r="3"/><circle cx="900" cy="100" r="3"/><circle cx="1100" cy="200" r="3"/></g></svg>');
          background-size: cover;
          background-position: center;
          padding: 120px 0 80px;
          position: relative;
        }

        .hero-banner::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff9800 0%, #ff5722 100%);
        }

        .breadcrumb-custom {
          display: flex;
          gap: 10px;
          align-items: center;
          color: #ff9800;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .page-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .section-header {
          margin-bottom: 50px;
        }

        .section-subtitle {
          color: #ff9800;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 2px;
          margin-bottom: 10px;
          display: inline-block;
          position: relative;
          padding-left: 50px;
        }

        .section-subtitle::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 2px;
          background: #ff9800;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.2;
        }

        .about-content {
          padding: 80px 0;
        }

        .about-image-wrapper {
          position: relative;
        }

        .about-image {
          background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
          height: 500px;
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
          position: relative;
          overflow: hidden;
        }

        .about-image::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.03) 10px,
            rgba(255,255,255,0.03) 20px
          );
        }

        .experience-badge {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: #1a1a1a;
          color: white;
          padding: 30px 40px;
          z-index: 2;
        }

        .experience-number {
          font-size: 3rem;
          font-weight: 800;
          color: #ff9800;
          line-height: 1;
        }

        .experience-text {
          font-size: 14px;
          margin: 0;
          font-weight: 600;
          text-transform: uppercase;
        }

        .stats-section {
          background: #1a1a1a;
          padding: 60px 0;
          margin: 80px 0;
        }

        .stat-item {
          text-align: center;
          color: white;
          padding: 20px;
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          filter: grayscale(100%) brightness(200%);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          color: #ff9800;
          margin: 0;
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.8;
        }

        .feature-box {
          background: white;
          padding: 40px 30px;
          border: 1px solid #eee;
          transition: all 0.3s ease;
          height: 100%;
          position: relative;
        }

        .feature-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: #ff9800;
          transition: width 0.3s ease;
        }

        .feature-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .feature-box:hover::before {
          width: 100%;
        }

        .feature-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
          display: block;
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1a1a1a;
        }

        .feature-desc {
          color: #666;
          margin: 0;
          line-height: 1.7;
        }

        .mission-vision-section {
          background: #f8f9fa;
          padding: 80px 0;
        }

        .mission-box {
          background: white;
          padding: 50px;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .mission-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: #ff9800;
        }

        .mission-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .mission-text {
          color: #666;
          line-height: 1.8;
          font-size: 1rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          background: #ff9800;
          margin-top: 50px;
        }

        .value-item {
          background: white;
          padding: 40px 30px;
          text-align: center;
        }

        .value-title {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: #1a1a1a;
        }

        .value-desc {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
        }

        .cta-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,152,0,0.1)" stroke-width="0.5"/><line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,152,0,0.1)" stroke-width="0.5"/></svg>');
          background-size: 50px 50px;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .cta-text {
          color: rgba(255,255,255,0.8);
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        .btn-primary-custom {
          background: #ff9800;
          color: white;
          padding: 15px 40px;
          font-weight: 700;
          text-transform: uppercase;
          border: none;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .btn-primary-custom::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #ff5722;
          transition: left 0.3s ease;
          z-index: -1;
        }

        .btn-primary-custom:hover::before {
          left: 0;
        }

        .btn-primary-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255,152,0,0.4);
        }

        @media (max-width: 768px) {
          .page-title { font-size: 2rem; }
          .section-title { font-size: 1.8rem; }
          .about-image { height: 350px; font-size: 5rem; }
          .stat-number { font-size: 2rem; }
          .values-grid { grid-template-columns: 1fr; }
          .cta-title { font-size: 1.8rem; }
        }
        .about-real-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 0;
            display: block;
        }
      `}</style>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="container">
          <div className="breadcrumb-custom animate__animated animate__fadeInDown">
            <span>Home</span>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="page-title animate__animated animate__fadeInUp">About Us</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 animate__animated animate__fadeInLeft">
              <div className="about-image-wrapper">
                <img src="/img/projects/images (2).jpg" alt="About Khush Enterprise" className="about-real-image" />
              </div>
            </div>
            <div className="col-lg-6 animate__animated animate__fadeInRight">
              <div className="section-header">
                <p className="section-subtitle">About Khush Construction</p>
                <h2 className="section-title">Building Excellence Since 2012</h2>
              </div>
              <p className="mb-4" style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>
                <strong>Khush Construction</strong> has been a trusted name in the construction industry for over a
                decade. Since our establishment in 2012, we've been committed to delivering exceptional construction
                solutions that transform visions into reality.
              </p>
              <p className="mb-4" style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Our team of experienced professionals brings expertise, dedication, and innovation to every project.
                From residential buildings to commercial complexes, we handle projects of all scales with the same level
                of commitment and quality craftsmanship.
              </p>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="d-flex align-items-center mb-3">
                    <span style={{ fontSize: '1.5rem', color: '#ff9800', marginRight: '10px' }}>✓</span>
                    <span style={{ fontWeight: '600', color: '#1a1a1a' }}>Licensed & Insured</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <span style={{ fontSize: '1.5rem', color: '#ff9800', marginRight: '10px' }}>✓</span>
                    <span style={{ fontWeight: '600', color: '#1a1a1a' }}>Expert Team</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center mb-3">
                    <span style={{ fontSize: '1.5rem', color: '#ff9800', marginRight: '10px' }}>✓</span>
                    <span style={{ fontWeight: '600', color: '#1a1a1a' }}>Quality Materials</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <span style={{ fontSize: '1.5rem', color: '#ff9800', marginRight: '10px' }}>✓</span>
                    <span style={{ fontWeight: '600', color: '#1a1a1a' }}>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header text-center mb-5">
            <p className="section-subtitle" style={{ paddingLeft: 0 }}>
              Why Choose Us
            </p>
            <h2 className="section-title">What Makes Us Different</h2>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-box">
                  <span className="feature-icon">{feature.icon}</span>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-lg-6 animate__animated animate__fadeInLeft">
              <div className="mission-box">
                <h3 className="mission-title">Our Mission</h3>
                <p className="mission-text">
                  To deliver exceptional construction services that exceed client expectations through innovation,
                  quality craftsmanship, and unwavering commitment to safety. We strive to build lasting relationships
                  with our clients by providing reliable, efficient, and sustainable construction solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-6 animate__animated animate__fadeInRight">
              <div className="mission-box">
                <h3 className="mission-title">Our Vision</h3>
                <p className="mission-text">
                  To be the most trusted and respected construction company in the region, recognized for our
                  excellence, integrity, and innovation. We aim to set new standards in the industry while contributing
                  to the development of sustainable and thriving communities.
                </p>
              </div>
            </div>
          </div>

          <div className="values-grid animate__animated animate__fadeInUp">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <h4 className="value-title">{value.title}</h4>
                <p className="value-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center cta-content animate__animated animate__fadeIn">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-text">
                Let's discuss how we can bring your construction vision to life. Contact us today for a free consultation.
              </p>
              <button className="btn btn-primary-custom btn-lg">Get A Free Quote</button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
