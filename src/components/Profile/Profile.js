import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileContainer,
  UserAvatar,
  UserLocation,
  UserName,
  UserStats,
  UserStatsItem,
  UserStatsLabel,
  UserStatsPercentage,
  UserTag,
} from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <ProfileContainer>
      <ProfileCard>
        <UserAvatar src={user.avatar} alt="User avatar" />
        <UserName>{user.username}</UserName>
        <UserTag>@{user.tag}</UserTag>
        <UserLocation>{user.location}</UserLocation>
      </ProfileCard>

      <UserStats>
        <UserStatsItem>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsPercentage>{user.stats.followers}</UserStatsPercentage>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsPercentage>{user.stats.views}</UserStatsPercentage>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsPercentage>{user.stats.likes}</UserStatsPercentage>
        </UserStatsItem>
      </UserStats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
