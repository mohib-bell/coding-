import React, { useMemo } from "react";
import PageContainer from "../../components/pageContainer/PageContainer";
import WidgetsContainer from "../../components/widgetsContainer/WidgetsContainer";
import Input from "../../components/Inputs/Input";
import Button from "../../components/button/Button";
import Table from "../../components/tables/Table";
import ModalDemo from "../../components/modal/ModalDemo";
import { mockTable } from "../../constants/data";
import FilesUpload from "../../components/filesUpload/FilesUpload";
const CodingWithAi = () => {
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
        Title={"Document: Coding with AI "}
        styles="flex flex-col w-full gap-4"
      >
        <form className="grid grid-cols-4 w-full gap-4">
          <Input
            type={"text"}
            placeholder={"Doc Name"}
            label={"Doc Name"}
            name={"Doc Name"}
          />
          <Input
            type={"text"}
            placeholder={"Doc Type"}
            label={"Doc Type"}
            name={"Doc Type"}
          />
          <Input
            type={"text"}
            placeholder={"Assignee"}
            label={"Assignee"}
            name={"Assignee"}
          />
          <Input
            type={"text"}
            placeholder={"Status"}
            label={"Status"}
            name={"Status"}
          />
          <Input
            type={"text"}
            placeholder={"Doc Status"}
            label={"Doc Status"}
            name={"Doc Status"}
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
      >
        <Table data={data} columns={columns} />
      </WidgetsContainer>
      <ModalDemo />
      <div className="m-8">
        <h1 className="mb-8 text-center">Docs Uploader</h1>
        <FilesUpload />
      </div>
    </PageContainer>
  );
};

export default CodingWithAi;
