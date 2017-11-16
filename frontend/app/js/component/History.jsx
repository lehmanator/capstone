import React from 'react';
import LogoHistory from './LogoHistory';
import constants from './constants';
import BaseHistory from './BaseHistory';

export default class History extends BaseHistory {
  getHistoryURL() {
    return `${constants.historyUrl}?username=${constants.defaultUser}`;
  }

  renderHistoryItems(item, index) {
    let link = item.link;
    let prob = parseFloat(item.result);
    const uploaded = new Date(item.time);
    return (
      <LogoHistory key={index}
        imgSrc={link} probability={prob} name={uploaded.toDateString()}
      />);
  }
}
