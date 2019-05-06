import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = props =>
  <Link onClick={props.handleClick}
    to={props.url}>
    {props.text}
  </Link>;
export default FooterLink;
