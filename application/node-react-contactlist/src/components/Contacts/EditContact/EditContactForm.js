import React, { useState, useEffect } from 'react';

export default function EditContactForm() {
  return (
    <div>
      <h2>Edit Contact</h2>

      <div>
        <form>
          <input 
            type='text'
            placeholder='Edit Name'
          />

          <input 
            type='text'
            placeholder='Edit Bio'
          />
        </form>
      </div>
    </div>
  )
}
