/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function House(props) {
  console.log(props);

  return (
    <div>
      <img src={props.picture} width="100%" alt="House Picture" />
      <p>
        {props.type} - {props.town}
      </p>
      <p>{props.title}</p>
    </div>
  );
}
