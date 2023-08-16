import React, { useMemo } from "react";
import PageContainer from "../../components/pageContainer/PageContainer";
import WidgetsContainer from "../../components/widgetsContainer/WidgetsContainer";
import Input from "../../components/Inputs/Input";
import RadioGroup from "../../components/RadioGroups/RadioGroup";
import Button from "../../components/button/Button";
import Table from "../../components/tables/Table";
import ModalDemo from "../../components/modal/ModalDemo";
import { mockTable } from "../../constants/data";

const Patient = () => {
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
      <WidgetsContainer Title={"Patient"} styles="flex flex-col w-full gap-4">
        <form className="grid grid-cols-4 w-full gap-4">
          <Input
            type={"text"}
            placeholder={"Patient First Name"}
            label={"Patient First Name"}
            name={"Patient First Name"}
          />
          <Input
            type={"text"}
            placeholder={"Patient Last Name"}
            label={"Patient Last Name"}
            name={"Patient Last Name"}
          />

          <Input
            type={"text"}
            placeholder={"Account #"}
            label={"Account #"}
            name={"Account #"}
          />
          <RadioGroup
            onChange={(option) => console.log(option)}
            labelText="Gender"
            label={"Status"}
            options={["All", "Active", " InActive"]}
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
        label="Add New Patient ➡"
      >
        <Table data={data} columns={columns} />
      </WidgetsContainer>
      <ModalDemo />
    </PageContainer>
  );
};

export default Patient;
