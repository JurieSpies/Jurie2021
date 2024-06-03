import { COLOR_BACKGROUND, COLOR_GREY, COLOR_PRIMARY } from '@/utils/globalColors';
import { Heading, SubHeading } from '@/utils/globalFonts';
import styled from 'styled-components';
import RESUME_DATA from '@/utils/RESUME_DATA';



const CardsContainer = styled.div`
  justify-content: center;
  flex:1;
  display: flow;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
`;

const Image = styled.img`
  margin: 20px;
  background-color: ${COLOR_BACKGROUND};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${COLOR_PRIMARY};
  width: 15%;
  min-width: 100px;
  animation: fadeIn 1s ease-in-out;
  /* cursor: pointer; */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }


  &:hover {
    transform: scale(1.05) rotate(3deg);
    transition: all 0.1s ease-in-out;
  }
`;

const Skills = () => {
  const { work } = RESUME_DATA;
  console.log('🚀 ~~ work:', work);

  return (
    <div>
      <Heading size="52px">Work Skills</Heading>
      <SubHeading>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</SubHeading>
      <CardsContainer>
      <Image src={'src/assets/skillIcons/css.svg'} alt="CSS Logo"/>
      <Image src={'src/assets/skillIcons/html.svg'} alt="HTML Logo"/>
      <Image src={'src/assets/skillIcons/js.svg'} alt="JS Logo"/>
      <Image src={'src/assets/skillIcons/react.svg'} alt="React Logo"/>
        </CardsContainer>
    </div>
  );
};
export default Skills;
