import React, { useMemo, useState } from "react";
import WidgetsContainer from "../../components/widgetsContainer/WidgetsContainer";
import Input from "../../components/Inputs/Input";
import Button from "../../components/button/Button";
import ModalDemo from "../../components/modal/ModalDemo";
import { mockTable } from "../../constants/data";
import Table from "../../components/tables/Table";
import PageContainer from "../../components/pageContainer/PageContainer";
import Checkbox from "../../components/checkbox/Checkbox";
import CheckGroup from "../../components/checkbox/CheckGroup";
import DatePicker from "../../components/dateInput/DatePicker";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Tickets = () => {
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
  const [datePickerModal, setDatePickerModal] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <PageContainer>
      <WidgetsContainer Title={"Tickets"} styles="flex flex-col w-full gap-4">
        <form className="grid grid-cols-4 w-full gap-4">
          <Input
            type={"text"}
            placeholder={"Practice"}
            label={"Practice"}
            name={"practice"}
          />
          <Input
            type={"text"}
            placeholder={"Document Name"}
            label={"Document Name"}
            name={"Document Name"}
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

      {/* <>
        <h1 className="m-8 text-center">Date Picker</h1>
        <button
          onClick={() => setDatePickerModal(true)}
          className="m-8 rounded-md bg-gray-200 px-3 py-1 font-medium text-gray-800 transition hover:bg-gray-300"
        >
          <span>
            {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}
            <i className="fa-solid fa-angle-down ml-1 text-xs"></i>
          </span>
        </button>

        <DatePicker
          value={date}
          isOpen={datePickerModal}
          onClose={() => setDatePickerModal(false)}
          onSelect={(date) => setDate(date)}
        />
      </> */}
    </PageContainer>
  );
};

export default Tickets;
