import Button from "../Button";

interface TableActionsProps {
  onButtonClick: () => void;
}

function TableActions({ onButtonClick }: TableActionsProps) {
  return (
    <div>
      <input type="text" />
      <Button className="" onClick={onButtonClick}>
        Criar
      </Button>
    </div>
  );
}

export default TableActions;
