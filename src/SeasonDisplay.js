import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  spring: {
    text: "It's Spring",
    iconName: "tree"
  },
  summer: {
    text: "It's Summer",
    iconName: "sun"
  },
  fall: {
    text: "It's Autumn",
    iconName: "leaf"
  },
  winter: {
    text: "It's Winter",
    iconName: "snowflake"
  }
};
const getSeason = (lat, month) => {
  let season;
  switch (month) {
    case 0:
      season = lat > 0 ? "winter" : "summer";
      break;
    case 1:
      season = lat > 0 ? "winter" : "summer";
      break;
    case 2:
      season = lat > 0 ? "spring" : "fall";
      break;
    case 3:
      season = lat > 0 ? "spring" : "fall";
      break;
    case 4:
      season = lat > 0 ? "spring" : "fall";
      break;
    case 5:
      season = lat > 0 ? "summer" : "winter";
      break;
    case 6:
      season = lat > 0 ? "summer" : "winter";
      break;
    case 7:
      season = lat > 0 ? "summer" : "winter";
      break;
    case 8:
      season = lat > 0 ? "fall" : "spring";
      break;
    case 9:
      season = lat > 0 ? "fall" : "spring";
      break;
    case 10:
      season = lat > 0 ? "winter" : "summer";
      break;
    case 11:
      season = lat > 0 ? "winter" : "summer";
      break;
    default:
      break;
  }
  return season;
};

const SeasonDisplay = props => {
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon icon--left massive ${iconName}`} />
      <h1>{text}!</h1>
      <i className={`icon icon--right massive ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
