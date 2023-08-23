import { Button } from '@mui/material';
import { styled } from '@mui/system';

const Styled = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'yellow',
  padding: 8,
  borderRadius: 4
});

const HQButton = () => (
  <Styled>
    <Button variant="contained" onClick={() => window.open('https://reactjs.org')}>
      Hello world
    </Button>
  </Styled>
);

export default HQButton;
