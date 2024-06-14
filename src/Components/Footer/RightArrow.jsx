import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const RightArrow = ({element}) => {
  return (
    <div>
      <KeyboardArrowRightIcon/>
      <span>{element}</span>
    </div>
  );
}
export default RightArrow;
