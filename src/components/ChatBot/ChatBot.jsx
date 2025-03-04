import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLOR_GREY, COLOR_WHITE, COLOR_DARK, COLOR_BACKGROUND } from '@/utils/globalColors';
import { IoChatbubbleEllipsesOutline, IoSend, IoClose } from 'react-icons/io5';
import RESUME_DATA from '@/utils/RESUME_DATA.json';
import { getYearsOfExperience } from '@/utils/helpers';
import { generateGeminiResponse } from '@/services/gemini';

// Animation keyframes
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ChatBotWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 20px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    top: 55px;
    right: 5px;
  }
`;

const ChatBotLabel = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #00f5a0, #00d9f5);
  color: ${COLOR_WHITE};
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 8px;
    padding: 2px 6px;
    top: -12px;
  }
`;

const ChatBotIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(145deg, #00f5a0, #00d9f5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 217, 245, 0.4);
  transition: all 0.3s ease;
  z-index: 2;
  pointer-events: auto;
  animation: ${float} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 217, 245, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ChatBotContainer = styled.div`
  position: fixed;
  top: 120px;
  right: 20px;
  width: 450px;
  height: 600px;
  background: ${COLOR_BACKGROUND};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    height: calc(100% - 160px);
    top: 100px;
  }
`;

const ChatHeader = styled.div`
  padding: 20px;
  background: linear-gradient(90deg, #1a1a1a, #2a2a2a);
  color: ${COLOR_WHITE};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  h2 {
    font-size: 18px;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    
    h2 {
      font-size: 16px;
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${COLOR_WHITE};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.8;
    transform: rotate(90deg);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${COLOR_BACKGROUND};

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) transparent;

  /* Chrome, Safari, and Opera scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: 3px;

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    gap: 10px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
    gap: 8px;
  }
`;

const OptionButton = styled.button`
  padding: 10px 18px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-dark));
  color: ${COLOR_WHITE};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const Label = styled.span`
  font-size: 14px;
  color: ${COLOR_DARK};
`;

const Message = styled.div`
  margin: 5px 0;
  padding: 15px 20px;
  border-radius: 15px;
  max-width: 85%;
  background: ${(props) => (props.isBot ? COLOR_GREY : "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))")};
  color: ${(props) => (props.isBot ? "#1a1a1a" : COLOR_WHITE)};
  align-self: ${(props) => (props.isBot ? "flex-start" : "flex-end")};
  font-size: 15px;
  line-height: 1.5;
  white-space: pre-wrap;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  animation: ${pulse} 0.3s ease-out;
  
  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
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

const InputContainer = styled.div`
  display: ${(props) => (props.$show ? "flex" : "none")};
  padding: 20px;
  background-color: ${COLOR_BACKGROUND};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 15px;
  
  @media (max-width: 768px) {
    padding: 15px;
    gap: 10px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  font-size: 15px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.05);
  color: ${COLOR_WHITE};
  transition: all 0.3s;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(0, 217, 245, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 12px 18px;
    font-size: 14px;
  }
`;

const SendButton = styled.button`
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: ${COLOR_WHITE};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: rotate(15deg) scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null); // Add this ref

  // Add this scroll helper function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Add this useEffect to scroll on messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const options = [
    { label: '👋 Introduction', value: 'intro' },
    { label: '📞 Contact Details', value: 'contact' },
    { label: '💻 Tech Stack', value: 'tech' },
    { label: '📚 Experience', value: 'experience' },
    { label: '🎯 Current Focus', value: 'focus' },
    { label: '🤝 Let\'s Connect', value: 'connect' },
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
• GraphQL
• Res

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

Looking forward to connecting with you!`
    };

    return responses[option] || RESUME_DATA.aboutMe;
  };

  const handleCustomQuestion = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const prompt = `As Jurie Spies' AI assistant, please answer the following question about him: ${inputValue}. Use the following context about Jurie: He is a Software Engineer with ${getYearsOfExperience()}+ years of experience, specializing in React and React Native development. ${RESUME_DATA.aboutMe}`;
      
      const response = await generateGeminiResponse(prompt);
      
      const botMessage = {
        text: response,
        isBot: true,
        html: true
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        text: "I'm having trouble connecting to the AI service. Please ensure you have a valid API key configured in your environment variables (VITE_GEMINI_API_KEY).",
        isBot: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCustomQuestion();
    }
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
      <ChatBotWrapper>
        <ChatBotIcon onClick={toggleChat}>
          <IoChatbubbleEllipsesOutline size={24} color="white" />
        </ChatBotIcon>
      </ChatBotWrapper>
      <ChatBotContainer isOpen={isOpen}>
        <ChatHeader>
          <h2>Chat with Jurie's Assistant</h2>
          <CloseButton onClick={toggleChat}>
            <IoClose size={24} />
          </CloseButton>
        </ChatHeader>
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
          <div ref={messagesEndRef} /> {/* Add this div at the end */}
        </ChatMessages>
        <OptionsContainer>
          {options.map((option) => (
            <OptionButton
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </OptionButton>
          ))}
        </OptionsContainer>
        <InputContainer $show>
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question..."
            disabled={isLoading}
          />
          <SendButton 
            onClick={handleCustomQuestion}
            disabled={isLoading || !inputValue.trim()}
          >
            <IoSend size={16} />
          </SendButton>
        </InputContainer>
      </ChatBotContainer>
    </>
  );
};

export default ChatBot;
