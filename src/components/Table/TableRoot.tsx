import { ReactNode } from "react";

interface TableRoot {
  children: ReactNode;
}

function TableRoot({ children }: TableRoot) {
  return <div>{children}</div>;
}

export default TableRoot;
