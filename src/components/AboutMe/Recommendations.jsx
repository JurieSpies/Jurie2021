import { FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';
import { COLOR_GREY, COLOR_WHITE } from '../../utils/globalColors';
import { SubHeading } from '../../utils/globalFonts';

// https://www.linkedin.com/in/juriespies/details/recommendations/

const StyledSubHeading = styled(SubHeading)`
  font-size: 18px;
  color: ${COLOR_WHITE};
  font-weight: 600;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const RecommendationCard = styled.div`
  display: flex;
  background: rgba(30, 30, 30, 0.6);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const PersonName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${COLOR_WHITE};
  margin-bottom: 5px;
`;

const PersonTitle = styled.div`
  font-size: 14px;
  color: ${COLOR_GREY};
  margin-bottom: 5px;
`;

const Relationship = styled.div`
  font-size: 12px;
  color: ${COLOR_GREY};
  margin-bottom: 15px;
  font-style: italic;
`;

const RecommendationText = styled.div`
  font-size: 15px;
  line-height: 1.6;
  color: ${COLOR_GREY};
  white-space: pre-wrap;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-top: 60px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const LinkedInButton = styled.a`
  display: flex;
  align-items: center;
  background: rgba(10, 102, 194, 0.8);
  color: white;
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  width: fit-content;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: rgba(10, 102, 194, 1);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const LinkedInIcon = styled(FaLinkedinIn)`
  margin-right: 10px;
  font-size: 18px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Recommendations = () => {
  // Data structure to hold recommendation information
  const recommendations = [
    {
      id: 1,
      name: "Marucelle McCallum",
      title: "Project Manager",
      relationship: "June 17, 2024, Marucelle managed Jurie directly",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGtpcjHIseCQQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1716210773826?e=1747267200&v=beta&t=e5k5TVGQw7YqN63_ygJUASNLp7mjZCgl20UYqKIfxkQ",
      text: "I've had the pleasure of working with Jurie on multiple project over the last four years at Open Vantage, where he has consistently shown exceptional dedication and commitment.\n\nHe is extremely reliable and an outstanding team player. His positive attitude and eagerness to help colleagues create a fun and collaborative work environment.\n\nI would highly recommend Jurie, as he would be a valuable asset to any team, bringing exceptional skills and a fantastic can-do attitude."
    },
    {
      id: 2,
      name: "Ruan Carstens",
      title: "QA Engineer",
      relationship: "June 14, 2024, Ruan worked with Jurie on the same team",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFtY2OViK7Kjw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730747462716?e=1747267200&v=beta&t=C6A1dRiRidpIRr7bdlyFv5F_0R_GPlY33WI6Ko045ic",
      text: "When I began my journey at OpenVantage, I had the privilege of working alongside Jurie. His qualities as a developer, such as tenacity and diligence, stood out to me. Jurie possesses the ability to take initiative and trust his instincts, which is a valuable trait not always found in developers. As a QA, I appreciated that giving him feedback was a collaborative process, and he didn't become discouraged by it. During that time, our design and UX processes were still evolving, allowing for creativity and ingenuity, which Jurie fully embraced.\n\nUnlike some developers who strictly adhere to documentation and acceptance criteria, Jurie isn't afraid to question things he disagrees with. This proactive approach is a vital asset for QA professionals. Although Jurie has since moved on to another project focused on mobile app development, we still keep in touch outside of work hours.\n\nI continue to be impressed by Jurie's passion and drive. He dedicates time to exercise and then seamlessly transitions back to coding, reading, and studying the latest coding approaches. In addition, he has even developed his own application, which is available on the Google Play store, to support his exercise routine.\n\nIn summary, Jurie's qualities and attitude are unmatched. He thrives on challenges and consistently seeks opportunities for growth."
    },
    {
      id: 3,
      name: "Kinesh Pillay",
      title: "Senior Business Analyst at Entelect",
      relationship: "June 14, 2024, Kinesh worked with Jurie on the same team",
      imageUrl: "https://media.licdn.com/dms/image/v2/C5603AQENLSvslbgQ-Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517004908434?e=1747267200&v=beta&t=SpIAtEsN6B6tdpV9eFhknYVil-NLFmwKHepEHAnHv_4",
      text: "I have had the honour of working with Jurie on multiple projects. Jurie is a really hard worker that puts his all in the work he does. He ensures his tasks gets done on time and when it cant, he communicates to let the team know. Jurie takes great pride in what he does ensuring he completes his tasks with the utmost quality. I would definitely recommend Jurie to any company that wants to pursue employment with him."
    },
    {
      id: 4,
      name: "Wian Van Schalkwyk",
      title: "Front-End developer| React, React Native",
      relationship: "June 14, 2024, Wian worked with Jurie but on different teams",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQG9Vl_XhHxvKQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718378128310?e=1747267200&v=beta&t=UgoHF5Y9zzy0HUqXQekQOV51uzsX8uqd916R_RunU3M",
      text: "Jurie's dedication and determination are unparalleled. I've had the honor of being mentored by Jurie and collaborating with him on multiple projects.\n\nHis commitment to excellence leaves no room for uncertainty. Jurie consistently ensures that projects adhere to best practices, ensuring smooth execution.\n\nJurie's wealth of knowledge and knack for problem-solving are invaluable assets. He fosters teamwork, ensuring everyone is included and supported.\n\nHaving someone of Jurie's caliber on a team is genuinely enriching and inspiring."
    },
    {
      id: 5,
      name: "Nicola Spies",
      title: "Software Analyst / UI/UX Design",
      relationship: "June 14, 2024, Nicola managed Jurie directly",
      imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQEXRdzmKFmhJw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1610040746292?e=1747267200&v=beta&t=ivZqTWsJZxUAdsSe46wWpVrnNsJMNlHid6MQX9urg_A",
      text: "Jurie is hands down the best front-end engineer I have ever worked with. He is an absolute pleasure to collaborate with, putting in the grind and working tirelessly until the job is done. His dedication and hard work are unmatched, and his expertise in CSS is truly remarkable. Jurie's attention to the smallest pixels sets him apart, and as someone who is very critical of UI/UX, this is one of the things that stood out to me the most. He is one of the few developers who rigorously tests his work, ensuring it is perfect upon delivery. Working with Jurie is a joy, and I highly recommend him."
    },
    {
      id: 6,
      name: "Gus Visagie",
      title: "Systems & Automation Engineer",
      relationship: "July 3, 2019, Gus managed Jurie directly",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFOxyW0_952tw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1697348729454?e=1747267200&v=beta&t=wpt5R78sGhAfgO-ofY10xSMbDA8VOSpbZKl4WGNrXqs",
      text: "I truly recommend Jurie Spies as an asset to any company/business in the world. His professional approach to any task, project and situation is of a very high standard which is very rare. It was truly an honor workinh with Jurie Spies."
    }
  ];

  return (
    <CardsContainer>
      <HeaderContainer>
        <LinkedInButton 
          href="https://www.linkedin.com/in/juriespies/details/recommendations/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          View on LinkedIn
        </LinkedInButton>
      </HeaderContainer>
      {recommendations.map((recommendation) => (
        <RecommendationCard key={recommendation.id}>
          <Avatar>
            <img src={recommendation.imageUrl} alt={recommendation.name} />
          </Avatar>
          <Content>
            <PersonName>{recommendation.name}</PersonName>
            <PersonTitle>{recommendation.title}</PersonTitle>
            <Relationship>{recommendation.relationship}</Relationship>
            <RecommendationText>{recommendation.text}</RecommendationText>
          </Content>
        </RecommendationCard>
      ))}
    </CardsContainer>
  );
};

export default Recommendations; 