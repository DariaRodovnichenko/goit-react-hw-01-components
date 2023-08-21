import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatsList,
  StatsListItem,
  StatsListLabel,
  StatsListPercentage,
  Title,
} from './Statistics.styled';
import getRandomHexColor from './GetRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(stat => (
          <StatsListItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatsListLabel>{stat.label}</StatsListLabel>
            <StatsListPercentage>{stat.percentage}%</StatsListPercentage>
          </StatsListItem>
        ))}
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
