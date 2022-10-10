import type { NextPage } from "next";
import { CSSProperties } from "react";
import { Parallax } from "react-parallax";
import {
  Seo,
  Header,
  Footer,
  SectionContent,
  Sticky,
  FirstAndSecondSection,
} from "../components";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const insideStyles: CSSProperties = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Home: NextPage = () => {
  return (
    <main
      className="w-full h-full overflow-scroll scroll-smooth snap-y snap-mandatory" //flex flex-col bg-gray-200 font-poppins
    >
      <Seo title="Home" />

      <Header className="fixed top-0 z-50 w-full" />

      {/* <section id="home" className="w-full h-screen bg-green-500 snap-center">Teste 1</section>
      <section id="about" className="w-full h-screen bg-red-500 snap-center">Teste 2</section>
      <section id="portfolio" className="w-full h-screen bg-gray-500 snap-center">Teste 3</section>
      <section id="contact" className="w-full h-screen snap-center bg-amber-500-500">Teste 4</section> */}

      <SectionContent
        id="home"
      >
        <Sticky
          className="bg-center bg-no-repeat bg-cover third"
          style={{
            backgroundImage: "url('/assets/capaPauloSpil.png')",
          }}
        />
      </SectionContent>

      <SectionContent
        id="about"
      >
        <Sticky className="fourth">
          <h1 className="mt-20 text-2xl font-bold uppercase">
            Sobre mim
          </h1>
        </Sticky>
      </SectionContent>

      <SectionContent
        id="portfolio"
      >
        <Sticky className="fourth">
          <h1 className="mt-20 text-2xl font-bold uppercase">
            Meus trabalhos
          </h1>
        </Sticky>
      </SectionContent>
      {/* 
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage: any) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "1%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax> */}

      <SectionContent id="contact">
        <Footer />
      </SectionContent>
    </main>
  );
};

export default Home;
