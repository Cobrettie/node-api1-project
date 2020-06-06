import React from 'react';
import styled from 'styled-components';

export default function ContactCard({ contact }) {
  const { id, name, bio} = contact;
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{bio}</p>
    </div>
  )
}