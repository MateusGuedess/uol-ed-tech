import { ReactNode } from "react";

interface HistoryRootProps {
  children: ReactNode;
}

function HistoryRoot({ children }: HistoryRootProps) {
  return <div>{children}</div>;
}

export default HistoryRoot;
