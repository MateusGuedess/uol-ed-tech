interface HistoryContentProps {
  action: "Foto Atualizada" | "Nome Atualizado" | "Comentário";
  comment?: string;
  photo: string;
  title: string;
}

function HistoryContent({
  action,
  photo,
  title,
  comment,
}: HistoryContentProps) {
  return <div></div>;
}

export default HistoryContent;
