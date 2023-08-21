import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 32px 15px;
  width: 300px;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
  border: 1px solid lightsteelblue;
  border-radius: 8px;
  box-shadow: 0px 2px 4px;
`;

export const UserAvatar = styled.img`
  width: 250px;
  border-radius: 30%;
  border: 1px solid lightsteelblue;
  background-color: seashell;
  box-shadow: 0 2px 4px;
  margin-bottom: 16px;
`;

export const UserName = styled.p`
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: bold;
  color: navy;
`;

export const UserTag = styled.p`
  margin-bottom: 16px;
  font-style: italic;
  font-size: 18px;
  color: navy;
`;

export const UserLocation = styled.p`
  font-size: 18px;
  color: navy;
`;

export const UserStats = styled.ul`
  margin-top: 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 8px;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: transparent;
  color: navy;
`;

export const UserStatsLabel = styled.span`
  color: navy;
`;

export const UserStatsPercentage = styled.span`
  margin-top: 6px;
  font-weight: bold;
  color: navy;
`;
