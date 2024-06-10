import classes from "./ButtonScroll.module.scss";
import React from 'react';
import {useRef} from 'react';
export default function App() {
  const ref = useRef(null);
  const handleClick = () => {
ref.current?.scrollIntoView({behavior: 'smooth'});

  };
  return (
<div>
<button className={classes.buttonscroll} onClick={handleClick}></button>
<div style={{height: '100rem'}} />
<div ref={ref}>Some content here</div>
</div>
  );
}
