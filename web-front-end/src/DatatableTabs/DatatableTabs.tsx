import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const DatatableTabs = (handleClick:any) => {
  return (
    <div style={{width: "50%"}} onClick={handleClick} >
      <ButtonGroup className="mb-2">
        <Button variant="secondary">Trades</Button>
        <Button variant="secondary">Positions</Button>
      </ButtonGroup>
    </div>
  );
}