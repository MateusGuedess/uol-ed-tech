"use client";
import { History, Table } from "@/components";
import { DataTableDemo } from "@/components/DataTable";
import { useState } from "react";

const users = [
  {
    nome: "teste 1",
    cargo: "teste 1",
    cpf: "teste 1",
    email: "teste 1",
  },
];

export default function Home() {
  const [search, setSearch] = useState();

  function handleClick() {}

  return (
    <main className="flex h-full w-full flex justify-between">
      <Table.Root>
        <Table.Actions onButtonClick={handleClick} />
        <Table.Content data={users} />
      </Table.Root>
      <DataTableDemo />
      <History.Root>
        <History.Title title="Atividades" />
        <History.Content action="Foto Atualizada" photo="" title="" />
        <History.Content action="Nome Atualizado" photo="" title="" />
        <History.Content action="Comentário" photo="" title="" comment="" />
      </History.Root>
    </main>
  );
}
