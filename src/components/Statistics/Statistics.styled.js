import styled from 'styled-components';

export const StatisticsSection = styled.section`
  padding: 32px 15px;
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  color: navy;
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  margin-top: 20px;
`;

export const StatsListItem = styled.li`
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: center;
  width: 100px;
  height: 60px;
  border: 1px solid lightgrey;
  border-radius: 30%;
  box-shadow: 0px 2px 4px;
  color: whitesmoke;
`;

export const StatsListLabel = styled.span`
  font-size: 16px;
`;

export const StatsListPercentage = styled.span`
  margin-top: 6px;
  font-weight: bold;
  font-size: 16px;
`;
