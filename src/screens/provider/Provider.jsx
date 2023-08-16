import React, { useMemo } from "react";
import PageContainer from "../../components/pageContainer/PageContainer";
import WidgetsContainer from "../../components/widgetsContainer/WidgetsContainer";
import Input from "../../components/Inputs/Input";
import RadioGroup from "../../components/RadioGroups/RadioGroup";
import ModalDemo from "../../components/modal/ModalDemo";
import Table from "../../components/tables/Table";
import Button from "../../components/button/Button";
import { mockTable } from "../../constants/data";

const Provider = () => {
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
      <WidgetsContainer Title={"Provider"} styles="flex flex-col w-full gap-4">
        <form className="grid grid-cols-4 w-full gap-4">
          <Input
            type={"text"}
            placeholder={"Provider Name"}
            label={"Provider Name"}
            name={"Provider Name"}
          />
          <Input
            type={"text"}
            placeholder={"First Name"}
            label={"First Name"}
            name={"First Name"}
          />
          <Input
            type={"text"}
            placeholder={"Last Name"}
            label={"Last Name"}
            name={"Last Name"}
          />
          <Input type={"text"} placeholder={"NPI"} label={"NPI"} name={"NPI"} />
          <Input
            type={"text"}
            placeholder={"Taxonomy  Code"}
            label={"Taxonomy  Code"}
            name={"Taxonomy  Code"}
          />
          <RadioGroup
            onChange={(option) => console.log(option)}
            labelText="Gender"
            label={"Status"}
            options={[
              <div className="flex flex-1 justify-around text-sm font-medium ">
                All
              </div>,
              <div className="flex  flex-1 justify-around text-sm font-medium">
                Active
              </div>,
              <div className="flex  flex-1 justify-around text-sm font-medium">
                InActive
              </div>,
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

        <div className="w-full flex justify-between items-center"></div>
      </WidgetsContainer>
      <WidgetsContainer
        Title={"Search Result"}
        styles="flex flex-col w-full gap-4"
        button="true"
        label="Add Provider ➡"
      >
        <Table data={data} columns={columns} />
      </WidgetsContainer>
      <ModalDemo />
    </PageContainer>
  );
};

export default Provider;
