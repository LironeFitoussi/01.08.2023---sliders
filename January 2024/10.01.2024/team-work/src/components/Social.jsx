import React from 'react';

export default function Social({ facebook, twitter, instagram, linkedin }) {
  return (
    <ol>
      <li>
        <a href={facebook}>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
            {/* ...SVG path data... */}
          </svg>
        </a>
      </li>
      <li>
        <a href={instagram}>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
            {/* ...SVG path data... */}
          </svg>
        </a>
      </li>
      <li>
        <a href={twitter}>
            <img src="../assets/linkedin-in.svg" alt="" />
        </a>
      </li>
      <li>
        <a href={linkedin}>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
          </svg>
        </a>
      </li>
    </ol>
  );
}
