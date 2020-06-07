import React from 'react';
import { ContainerDiv } from './ContactCardStyles';

export default function ContactCard({ contact }) {
  const { id, name, bio} = contact;
  return (
    <ContainerDiv>
      <p>{id}</p>
      <p>{name}</p>
      <p>{bio}</p>
    </ContainerDiv>
  )
}