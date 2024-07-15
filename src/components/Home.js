import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import your background image or use a URL directly
import backgroundImage from "./Images/ground.png";

// Styled components for the hero section
const HeroSection = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
`;

const HeroHeading = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const HeroSubheading = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
`;

const CallToActionButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #007bff; /* Example button color */
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center; /* Ensure text alignment for all content */
`;

const TopRightContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: right;
`;

const WelcomeMessage = styled.h1`
  font-size: 1em;
  margin-bottom: 10px;
`;

const Clock = styled.div`
  font-size: 1em;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
`;

const IntroSection = styled.div`
  text-align: center;
  margin: 40px;
  padding-top: 0px;
  padding-left: 140px;
  padding-right: 140px;
`;

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [animationClass, setAnimationClass] = useState("");
  const [time, setTime] = useState(new Date());
  const [nameSubmitted, setNameSubmitted] = useState(false);

  useEffect(() => {
    if (nameSubmitted) {
      setAnimationClass("fade-in");

      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [nameSubmitted]);

  useEffect(() => {
    if (nameSubmitted) {
      const currentHour = new Date().getHours();
      let greeting = "";

      if (currentHour < 12) {
        greeting = "Good Morning";
      } else if (currentHour < 18) {
        greeting = "Good Afternoon";
      } else {
        greeting = "Good Evening";
      }

      setWelcomeMessage(`${greeting}, ${inputValue}!`);
    }
  }, [nameSubmitted, inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = () => {
    setNameSubmitted(true);
  };

  return (
    <>
      <HeroSection>
        <TopRightContainer>
          <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
          <Clock>{time.toLocaleTimeString()}</Clock>
        </TopRightContainer>

        {!nameSubmitted ? (
          <Container>
            <HeroHeading>Enter your name</HeroHeading>
            <Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
            <CallToActionButton onClick={handleFormSubmit}>
              Submit
            </CallToActionButton>
          </Container>
        ) : (
          <IntroSection className={animationClass}>
            <HeroHeading>
              Transform Your Vision into Reality – Build Your Dream Website
              Today!
            </HeroHeading>
            <HeroSubheading>
              Our team of experts is dedicated to delivering user-friendly,
              scalable, and secure solutions tailored to meet your unique needs.
            </HeroSubheading>
            <CallToActionButton as={Link} to="/about/mission">
              About Us
            </CallToActionButton>
          </IntroSection>
        )}
      </HeroSection>
    </>
  );
};

export default Home;
