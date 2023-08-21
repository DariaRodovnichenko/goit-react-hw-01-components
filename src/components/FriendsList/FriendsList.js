import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import { FriendList } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendsListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};