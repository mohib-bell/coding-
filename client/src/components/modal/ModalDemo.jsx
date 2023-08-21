import React, { useState } from "react";
import Modal from "./Modal";
import WidgetsContainer from "../widgetsContainer/WidgetsContainer";
import Input from "../Inputs/Input";
import Button from "../button/Button";

const ModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        className="p-4 bg-emerald-600 hover:bg-emerald-700 text-white ml-8"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="bg-white rounded-md max-w-[1188px] w-full shadow-modal-shadow"
      >
        <WidgetsContainer
          Title={"Add Practice info"}
          styles="flex flex-col w-full gap-4"
        >
          <form>
            <div className="w-full grid grid-cols-4 gap-4">
              <Input
                type={"text"}
                placeholder={"Practice Name"}
                label={"Practice Name"}
                name={"Practice Name"}
              />
              <Input
                type={"text"}
                placeholder={"Practice Code"}
                label={"Practice Code"}
                name={"Practice Code"}
              />
              <Input
                type={"text"}
                placeholder={"NPI"}
                label={"NPI"}
                name={"NPI"}
              />
              <Input
                type={"text"}
                placeholder={"TAX ID"}
                label={"TAX ID"}
                name={"TAX ID"}
              />

              <Input
                type={"text"}
                placeholder={"Taxonomy Code"}
                label={"Taxonomy Code"}
                name={"Taxonomy Code"}
              />
              <Input
                type={"text"}
                placeholder={"CLIA"}
                label={"CLIA"}
                name={"CLIA"}
              />
              <Input
                type={"text"}
                placeholder={"Group"}
                label={"Group"}
                name={"Group"}
              />
              <div className="col-start-1 col-span-2">
                <Input
                  type={"text"}
                  placeholder={"Address Line 1"}
                  label={"Address Line 1"}
                  name={"Address Line 1"}
                />
              </div>
              <div className=" col-span-2">
                <Input
                  type={"text"}
                  placeholder={"Address Line 2"}
                  label={"Address Line 2"}
                  name={"Address Line 2"}
                />
              </div>
              <Input
                type={"text"}
                placeholder={"city"}
                label={"city"}
                name={"city"}
              />
              <Input
                type={"text"}
                placeholder={"State"}
                label={"State"}
                name={"State"}
              />
              <Input
                type={"text"}
                placeholder={"Zip Code"}
                label={"Zip Code"}
                name={"Zip Code"}
              />
              <Input
                type={"text"}
                placeholder={"Phone no."}
                label={"Phone no."}
                name={"Phone no."}
              />
              <Input
                type={"text"}
                placeholder={"Fax#"}
                label={"Fax#"}
                name={"Fax#"}
              />
              <Input
                type={"email"}
                placeholder={"Email"}
                label={"Email"}
                name={"Email"}
              />
            </div>
            <div className="flex gap-1.5 mt-8 items-center justify-center ">
              <Button label="Clear" variant="secondary">
                <img src="/assets/practice/cancel.svg" alt="cancel" />
              </Button>
              <Button label="Save" variant="primary">
                <img src="/assets/practice/arrowRight.svg" alt="search" />
              </Button>
            </div>
          </form>
        </WidgetsContainer>
      </Modal>
    </>
  );
};

export default ModalDemo;
