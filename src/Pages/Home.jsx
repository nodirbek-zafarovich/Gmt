import { useEffect } from "react";
import {
  Brends,
  Cabinet,
  Category,
  Hero,
  News,
  Options,
  Partners,
  SendQuestion,
  Subscribe,
} from "../components";
import AboutCompanyAcc from "../components/AboutCompanyAcc";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Category />
      <Cabinet />
      <Options />
      <Partners />
      <Brends />
      <News />
      <AboutCompanyAcc />
      <SendQuestion />
      <Subscribe />
    </div>
  );
};

export default Home;
