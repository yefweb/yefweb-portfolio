import Head from 'next/head';
import { Aboutme, Hero, Navbar, Skills, Projects } from '../components';

// const inter = Inter({ subsets: ['latin'] });

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
      <div className='inset-0 overflow-hidden bg-primary bg-[url("../assets/dark-pattern.jpg")] bg-cover bg-center'>
        <div className='container mx-auto w-[90%] text-white'>
          <header className='container fixed top-0 left-0 right-0  mx-auto w-[90%]'>
            <Navbar />
          </header>

          <div className='mt-32'>
            <section className=''>
              <Hero />
            </section>

            <main className=''>
              {/* <Aboutme /> */}
              <Skills />
              <Projects />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
