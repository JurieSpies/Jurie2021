import RESUME_DATA from '@/utils/RESUME_DATA.json';
import { COLOR_BACKGROUND, COLOR_DARK, COLOR_GREY, COLOR_WHITE } from '@/utils/globalColors';
import { getYearsOfExperience } from '@/utils/helpers';
import { useState } from 'react';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import styled from 'styled-components';

const ChatBotIcon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 350px;
  height: 500px;
  background: ${COLOR_WHITE};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
background-color:${COLOR_BACKGROUND};
`;

const ChatHeader = styled.div`
  padding: 15px;
  background: #1a1a1a;
  color: ${COLOR_WHITE};
  font-weight: bold;
  background-color:${COLOR_BACKGROUND};
  `;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color:${COLOR_BACKGROUND};
  `;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 15px;
  `;

const OptionButton = styled.button`
  padding: 8px 16px;
  background: var(--color-primary);
  color: ${COLOR_WHITE};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 14px;
  
  &:hover {
    opacity: 0.8;
  }
  `;

  const Label = styled.span`
  font-size: 14px;
  color: ${COLOR_DARK};
  `;

const Message = styled.div`
  margin: 5px 0;
  padding: 12px 16px;
  border-radius: 15px;
  max-width: 85%;
  background: ${props => props.isBot ? COLOR_GREY : 'var(--color-primary)'};
  color: ${props => props.isBot ? '#1a1a1a' : COLOR_DARK};
  align-self: ${props => props.isBot ? 'flex-start' : 'flex-end'};
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  a {
    color: ${props => props.isBot ? 'var(--color-primary)' : COLOR_WHITE};
    text-decoration: underline;
    font-weight: 500;
    
    &:hover {
      opacity: 0.8;
    }
  }

  ul {
    margin: 8px 0;
    padding-left: 20px;
    
  }
  
  li {
    margin: 4px 0;
  }
  `;

const BotMessageContent = styled.div`
  .highlight {
    color: var(--color-primary);
    font-weight: 500;
  }

  .section-title {
    font-weight: 600;
    margin-bottom: 4px;
  }
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const options = [
    { label: '👋 Introduction', value: 'intro' },
    { label: '📞 Contact Details', value: 'contact' },
    { label: '💻 Tech Stack', value: 'tech' },
    { label: '📚 Experience', value: 'experience' },
    { label: '🎯 Current Focus', value: 'focus' },
    { label: '🤝 Let\'s Connect', value: 'connect' }
  ];

  const formatMessage = (text) => {
    return text.split('\n').map((line, i) => (
      <div key={i}>
        {line.includes('•') ? <li>{line.replace('•', '')}</li> : line}
      </div>
    ));
  };

  const generateResponse = (option) => {
    const yearsExp = getYearsOfExperience();
    
    const responses = {
      intro: `Hi! 👋 I'm Jurie Spies, a Software Engineer with ${yearsExp}+ years of experience. ${RESUME_DATA.aboutMe}`,
      contact: `Let's get in touch! Here's how you can reach me:

📧 Email: <a href="mailto:${RESUME_DATA.email}">${RESUME_DATA.email}</a>
📱 Phone: <a href="tel:${RESUME_DATA.phoneNumber}">${RESUME_DATA.phoneNumber}</a>
🔗 LinkedIn: <a href="${RESUME_DATA.linkedIn}" target="_blank">View Profile</a>`,
      tech: `🚀 My core tech stack includes:

• React & React Native
• JavaScript/TypeScript
• Node.js
• Express.js
• PostgreSQL
• AWS

I'm always learning and exploring new technologies!`,
      experience: `💼 Professional Journey:

I have ${yearsExp}+ years of experience in software development, specializing in React and React Native. 

Key Projects:
• PropTech Solutions
• CCTV Systems
• Loyalty Programs

Want to know more? Check out my <a href="${RESUME_DATA.github}" target="_blank">GitHub</a>!`,
      focus: `🎯 Currently focusing on:

• AI Integration in Web Apps
• React Performance Optimization
• Mentoring Junior Developers
• Full-stack Development

Always excited to discuss new technologies and opportunities!`,
      connect: `🤝 Let's connect! Here are all the ways to reach me:

• <a href="mailto:${RESUME_DATA.email}">Send me an email</a>
• <a href="${RESUME_DATA.linkedIn}" target="_blank">Connect on LinkedIn</a>
• <a href="${RESUME_DATA.github}" target="_blank">Check out my GitHub</a>
• <a href="${window.location.origin}" target="_blank">Visit my portfolio</a>

Looking forward to connecting with you!`
    };

    return responses[option] || RESUME_DATA.aboutMe;
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([{
        text: "👋 Hi! I'm Jurie's virtual assistant. How can I help you today? Select an option below to learn more!",
        isBot: true
      }]);
    }
  };

  const handleOptionClick = (option) => {
    const userMessage = { text: options.find(opt => opt.value === option).label, isBot: false };
    const botMessage = { 
      text: generateResponse(option), 
      isBot: true,
      html: true 
    };
    
    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  return (
    <>
      <ChatBotIcon onClick={toggleChat}>
        <IoChatbubbleEllipsesOutline size={30} color="white" />
      </ChatBotIcon>
      <ChatBotContainer isOpen={isOpen}>
        <ChatHeader>Chat with Jurie's Assistant</ChatHeader>
        <ChatMessages>
          {messages.map((message, index) => (
            <Message key={index} isBot={message.isBot}>
              {message.html ? (
                <BotMessageContent dangerouslySetInnerHTML={{ __html: message.text }} />
              ) : (
                <BotMessageContent>{formatMessage(message.text)}</BotMessageContent>
              )}
            </Message>
          ))}
        </ChatMessages>
        <OptionsContainer>
          {options.map((option) => (
            <OptionButton
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              <Label>
              {option.label}
              </Label>
            </OptionButton>
          ))}
        </OptionsContainer>
      </ChatBotContainer>
    </>
  );
};

export default ChatBot;
