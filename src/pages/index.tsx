import Head from 'next/head';
import { Aboutme, Hero, Navbar, Skills, Projects, Footer } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yefweb - Sitio web profesional</title>
        <meta
          name='description'
          content='Portafolio profesional Yeferson Olarte Roncancio @yefweb'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <div className=' scroll-smooth bg-primary bg-[url("../assets/dark-pattern.jpg")] bg-cover bg-center'>
        <div className='container mx-auto w-[90%] text-white'>
          <header className='container fixed top-0 left-0 right-0  z-50 mx-auto w-[90%]'>
            <Navbar />
          </header>

          <section className=''>
            <Hero />
          </section>

          <main>
            <Skills />
            <Aboutme />
            <Projects />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
