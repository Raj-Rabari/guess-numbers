import "./App.css";
import Button from '@mui/material/Button';

export default function Btn({ incr, count }) {
  // create state
  // crete fun to inc this state
  return (
    
      <Button variant='contained' sx={{m:2}}
        onClick={() => {
          incr(count);
        }}
      >
        click Me
      </Button>
    
  );
}
