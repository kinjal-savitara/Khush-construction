import { Fragment } from 'react';
import Head from 'next/head';

// Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';

const Home = () => {
  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>Kush - contruction site</title>
        <meta name="description" content="Free Next.js website template for builders, contractors & construction firms – built with Bootstrap" />
      </Head>

      <main className="content-wrapper overflow-hidden">

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="wrapper" id='about'>
          <div className="container py-12 py-md-14">
            <About
              headingH1="Welcome to "
              span="Khush Construction"
              para="Established in 2010, Khush Construction is a trusted real estate builder and construction company located in the Ankleshwar GIDC area of Gujarat, India."
              para2="For more than a decade, we have been committed to delivering safe, strong, and high-quality residential and commercial structures. Our team focuses on doing every job the right way—using reliable materials, skilled craftsmanship, and transparent work practices."
              imgPosition="left"
              src="/img/home-page-1.jpg"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="wrapper whychoose-bg">
          <div className="container py-14 py-md-16">
            <WhyChoose />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
