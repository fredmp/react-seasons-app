import './SeasonDisplay.scss'
import React from 'react';

const seasonConfig = {
  winter: {
    text: "It's really cold!",
    iconName: "snowflake"
  },
  summer: {
    text: "It's a lot hot here!",
    iconName: "sun"
  }
};

const getSeason = (latitude, month) => {
  const midOfYear = month > 2 && month < 9;

  if ((midOfYear && latitude > 0) || (!midOfYear && latitude < 0)) return 'summer';
  return 'winter';
}

export default ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`} />
    </div>
  );
};
