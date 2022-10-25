import Section1 from "../components/homePage/section1";
import Section2 from "../components/homePage/section2";
import Section3 from "../components/homePage/section3";
import Section4 from "../components/homePage/section4";
import NavBar from "../components/homeNavbar/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="" id="firstSection">
        <Section1 sectionId="secondSection" />
      </section>
      <section id="secondSection">
        <Section2 />
      </section>
      <section id="thirdSection">
        <Section3 />
      </section>
      <section id="forthSection">
        <Section4 />
      </section>
    </>
  );
}
