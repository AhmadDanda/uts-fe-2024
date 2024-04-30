import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Gallery from './Gallery';
import Footer from './Footer/Footer';

function Content() {
  return (
    <div>
      <Navbar/>
      {/*Content*/}
      <Hero/>
      <Gallery/>
      {/* <Faq/> */}
      {/*Content*/}

      <Footer/>

    </div>
  );
}

export default Content;

