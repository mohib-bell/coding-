import React from "react";
import PageContainer from "../../components/pageContainer/PageContainer";
import Card from "../../components/ticketCard/Card";
import WidgetsContainer from "../../components/widgetsContainer/WidgetsContainer";
import Chart from "../../components/charts/Chart";
import { cardsData, documentsdata } from "../../constants/data";

const Dashboard = () => {
  return (
    <PageContainer>
      <WidgetsContainer Title={"Ticket Status"} styles="flex w-full gap-8">
        <div className="flex-1 flex gap-[22px] w-full">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              path={card.path}
              status={card.status}
              numoftickets={card.numoftickets}
            />
          ))}
        </div>
        <div className="flex-1">
          <Chart />
        </div>
      </WidgetsContainer>
      <WidgetsContainer
        Title={"Practices Break Down"}
        styles="flex flex-col gap-4"
      >
        {/* <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-w-full">
          <div class="bg-white p-4 shadow-md">Box 1</div>

          <div class="bg-white p-4 shadow-md">Box 2</div>

          <div class="bg-white p-4 shadow-md">Box 3</div>

          <div class="bg-white p-4 shadow-md">Box 4</div>
        </div> */}
        <div className="flex w-full gap-4">
          <div className="flex flex-1 items-center justify-between px-6 py-[7px] border-2 border-color7 rounded-round shadow-card-shadow">
            <h4 className="text-color8 text-base">Practice Name</h4>
            <span className="text-color1 text-[32px]">120</span>
          </div>
          <div className="flex flex-1 items-center justify-between px-6 py-[7px] border-2 border-color7 rounded-round shadow-card-shadow">
            <h4 className="text-color8 text-base">Practice Name</h4>
            <span className="text-color1 text-[32px]">120</span>
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="flex flex-1 items-center justify-between px-6 py-[7px] border-2 border-color7 rounded-round shadow-card-shadow">
            <h4 className="text-color8 text-base">Practice Name</h4>
            <span className="text-color1 text-[32px]">120</span>
          </div>
          <div className="flex flex-1 items-center justify-between px-6 py-[7px] border-2 border-color7 rounded-round shadow-card-shadow">
            <h4 className="text-color8 text-base">Practice Name</h4>
            <span className="text-color1 text-[32px]">120</span>
          </div>
        </div>
      </WidgetsContainer>

      <div className="flex gap-[22px]">
        {documentsdata.map((data) => (
          <div
            key={data.id}
            className="flex flex-1  justify-between items-center border-2 border-color7 p-[22px] rounded-t-[3px] shadow-documents-shadow"
          >
            <div className="flex gap-4 items-center ">
              <img src={data.iconPath} alt="import-documents" />
              <span className="text-color8 text-base font-semibold">
                {data.title} <br /> Documents
              </span>
            </div>
            <span className=" text-color1 text-[32px]">{data.amount}</span>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Dashboard;
