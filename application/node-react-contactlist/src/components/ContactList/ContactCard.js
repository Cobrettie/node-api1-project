import React from 'react';

export default function ContactCard({ contact }) {
  const { id, name, bio} = contact;
  return (
    <div>
      <p>{name}</p>
      <p>{bio}</p>
    </div>
  )
}