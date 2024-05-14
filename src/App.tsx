import ButtonGradient from "./assets/svg/ButtonGradient";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        {/* <Projects /> */}
        <ContactForm />
      </div>
      <ButtonGradient />
      <Footer></Footer>
    </>
  );
};

export default App;
