// AboutUs.js
import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #007bff; /* Blue color for the title */
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333; /* Dark text color */
`;

const BulletPoint = styled.li`
  list-style: disc; /* Use bullets for list items */
  margin-bottom: 10px;
`;

function AboutUs() {
  return (
    <AboutUsContainer>
      <Title>About Us</Title>
      <Description>
        Welcome to [Your Project Name] - Your Premier Online Bidding Platform! We're dedicated to providing a seamless and exciting online auction experience.

        Whether you're a collector, a seller, or just looking for a thrilling way to acquire unique items, our platform has something for everyone.
      </Description>
      <Title>Our Mission</Title>
      <Description>
        Our mission is to connect passionate buyers with a diverse range of high-quality, curated items while ensuring a secure and user-friendly environment. We strive to create a platform that encourages fair and transparent bidding, where trust and integrity are paramount.
      </Description>
      <Title>What We Offer</Title>
      <ul>
        <BulletPoint>Wide Selection: We offer a wide variety of auctions featuring collectibles, rare artifacts, art, electronics, and much more. There's always something new and exciting to explore.</BulletPoint>
        <BulletPoint>User-Friendly Experience: Our user interface is designed to be intuitive and accessible for all users, from beginners to seasoned bidders. Browsing, bidding, and winning have never been easier.</BulletPoint>
        <BulletPoint>Secure Transactions: We prioritize the safety and security of your transactions. Rest assured that your personal and financial information is protected.</BulletPoint>
        <BulletPoint>Professional Support: Our dedicated support team is always ready to assist you with any questions or concerns you may have. Feel free to reach out at any time.</BulletPoint>
      </ul>
      <Description>
        <strong>Join Us Today:</strong> Become part of our vibrant and growing community of bidders and sellers. [Sign up](link-to-registration) today and embark on an exciting journey of online bidding. Whether you're a seasoned bidder or just starting, we welcome you to [Your Project Name]!

        Thank you for choosing us as your preferred online bidding platform. We look forward to providing you with unforgettable auction experiences.

        If you have any questions, suggestions, or feedback, please don't hesitate to [contact us](link-to-contact).
        <Description>
        Happy Bidding!
      </Description>
      </Description>
    </AboutUsContainer>
  );
}

export default AboutUs;
