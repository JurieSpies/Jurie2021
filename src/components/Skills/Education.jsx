import { COLOR_BACKGROUND, COLOR_PRIMARY, COLOR_WHITE } from '@/utils/globalColors';
import styled from 'styled-components';
import udemy from '../../assets/skillIcons/Udemy.svg';
import school from '../../assets/skillIcons/school.svg';
import redseal from '../../assets/skillIcons/redseal.svg';

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 35px;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin: 10px;
  background-color: ${COLOR_BACKGROUND};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${COLOR_PRIMARY};
  min-width: 100px;
  width: 90%;
  filter: grayscale(100%);
  transition: transform 0.3s ease-in-out;


  &:hover {
    filter: none;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const IconTitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: ${COLOR_PRIMARY};
`;

const Education = () => {
  const skillSvgs = [
    { svg: udemy, title: 'Self-taught through Udemy and Pluralsight, Ive honed skills in React, React Native, Node.js, and CI/CD tools like Git. These courses empower me to deliver high-quality software solutions aligned with industry best practices.' },
    { svg: redseal, title: 'Majuba FET College - Newcastle Training Centre: Instumentation Red Seal - Jan 2008 - Dec 2011' },
    { svg: school, title: 'HTS Witbank: Matriculated - 2013' },

  ];

  return (
    <CardsContainer>
      {skillSvgs.map((skill, index) => (
        <ImageWrapper key={index}>
          <img src={skill.svg} alt={`${skill.title} Logo`} />
          <IconTitle>{skill.title}</IconTitle>
        </ImageWrapper>
      ))}
    </CardsContainer>
  );
};

export default Education;
