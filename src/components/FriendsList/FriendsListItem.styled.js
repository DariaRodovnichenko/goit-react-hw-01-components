import styled from 'styled-components';

const getStatusColor = props => {
  if (props.status === 'true') {
    return 'limegreen';
  } else if (props.status === 'false') {
    return 'orangered';
  } else {
    return 'grey';
  }
};

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  padding: 4px;
  font-size: 18px;
  color: navy;
  border: 1px solid lightsteelblue;
  border-radius: 10px;
  box-shadow: 0px 2px 4px;
  background-color: transparent;
  font-weight: bold;
`;

export const FriendStatus = styled.span`
  display: flex;

  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${getStatusColor};
`;

export const FriendAvatar = styled.img`
  display: block;
`;
export const FriendName = styled.p`
  color: navy;
`;
