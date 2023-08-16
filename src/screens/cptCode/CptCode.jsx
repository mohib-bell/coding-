import React, { useMemo } from "react";
import PageContainer from "../../components/pageContainer/PageContainer";
import WidgetsContainer from "../../components/widgetsContainer/WidgetsContainer";
import Input from "../../components/Inputs/Input";
import Button from "../../components/button/Button";
import Table from "../../components/tables/Table";
import CheckGroup from "../../components/checkbox/CheckGroup";
import { mockTable } from "../../constants/data";
import ModalDemo from "../../components/modal/ModalDemo";

const CptCode = () => {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Practice Name",
      accessorKey: "Practice Name",
    },
    {
      header: "Practice Code",
      accessorKey: "Practice Code",
    },
    {
      header: "Team Name",
      accessorKey: "Team Name",
    },
    {
      header: "NPI",
      accessorKey: "NPI",
    },
    {
      header: "Taxonomy ID",
      accessorKey: "Taxonomy ID",
    },
    {
      header: "Creation Date",
      accessorKey: "Creation Date",
    },
    {
      header: "Status",
      accessorKey: "Status",
    },
  ];
  const data = useMemo(() => mockTable, []);
  return (
    <PageContainer>
      <WidgetsContainer
        Title={"Code Libray: CPT"}
        styles="flex flex-col w-full gap-4"
      >
        <form className="grid grid-cols-4 w-full gap-4">
          <Input
            type={"text"}
            placeholder={"CPT Code"}
            label={"CPT Code"}
            name={"CPT Code"}
          />
          <Input
            type={"text"}
            placeholder={"Description"}
            label={"Description"}
            name={"Description"}
          />
          <CheckGroup
            title={"Status"}
            options={[
              { id: 1, label: "all", value: "all", name: "all" },
              { id: 2, label: "valid", value: "valid", name: "valid" },
              { id: 3, label: "invalid", value: "invalid", name: "invalid" },
            ]}
          />

          <div className="flex gap-1.5 col-start-4 items-end justify-end ">
            <Button label="Clear" variant="secondary">
              <img src="/assets/practice/cancel.svg" alt="cancel" />
            </Button>
            <Button label="Search" variant="primary">
              <img src="/assets/practice/arrowRight.svg" alt="search" />
            </Button>
          </div>
        </form>
      </WidgetsContainer>
      <WidgetsContainer
        Title={"Search Result"}
        styles="flex flex-col w-full gap-4"
        button="true"
        label="Create CPT ➡"
      >
        <Table data={data} columns={columns} />
      </WidgetsContainer>
      <ModalDemo />
    </PageContainer>
  );
};

export default CptCode;
