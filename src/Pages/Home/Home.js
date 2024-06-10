import AboutMe from '../../Components/AboutMe/AboutMe'
import CardsSkills from '../../Components/CardsSkills/CardsSkills';
import SocialMediaContact from '../../Components/SocialMediaContact/SocialMediaContact'
import ButtonScroll from '../../Components/ButtonScroll/ButtonScroll'
import Skills from '../Skills/Skills';
import ResumeExperienceEducation from '../../Components/ResumeExperienceEducation/ResumeExperienceEducation'
const Home = () => {
  return (
    <>
      <AboutMe />
      
      {/**  
       * 
       * <ButtonScroll />
       * 
       * 
       * 
      */}
      <CardsSkills />
      
      <Skills/>
      
      
    </>
  );
};

export default Home;
