import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeWrapper = styled.div`
  margin: 0 auto;
`;

export const HomeTitle = styled.h1`
  font-size: 48px;
  color: white;
`;

export const HomeBody = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
`;

export const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 20px;
  padding-bottom: 20px;
  width: 60%;
  min-width: 200px;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 26px -14px rgba(0,0,0,1);
`;

export const SectionTitle = styled.h1`
  padding-top: 20px;
  font-size: 24px;
`;

export const ProfessorLink = styled(Link)`
  display: block;
  line-height: 1.5;
  margin: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #007bff;
  text-decoration: none;

  &:visited {
    color: #007bff;
  }

  &:hover {
    color: #0056b3;
    text-decoration: underline;
    box-shadow: 0 0;
  }
`;