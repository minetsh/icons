import React, { Component, useState } from 'react';
import icons from '../../resource/icons.json';
import './index.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="icons">
        {icons.icons.map((i) => {
          return (
            <div key={i.name} className="icon">
              <span className="material-icons">{i.name}</span>
              <span>{i.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
