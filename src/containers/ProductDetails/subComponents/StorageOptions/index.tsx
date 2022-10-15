import React, { useState } from "react";
import RadioButton from "../../../../components/RadioButton";
import {
  SectionWrapper,
  Header,
  OptionsWrapper,
  OptionContent,
  StorageNumber
} from "./styles";

const StorageOptions = ({ options }: { options: number[] }) => {
  const [selectedStorage, setSelectedStorage] = useState(128);

  const handleChooseStorage = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedStorage(+e.target.value);
  };

  return (
    <SectionWrapper>
      <Header>Storage capacity</Header>
      <OptionsWrapper>
        {options.map((option, index) => (
          <div key={`storage-${index}`}>
            <RadioButton
              id={`storage-${index}`}
              name="storage-options"
              checkedItem={selectedStorage}
              value={option}
              changeHandler={handleChooseStorage}
            >
              <OptionContent>
                <StorageNumber>{option}</StorageNumber> GB
              </OptionContent>
            </RadioButton>
          </div>
        ))}
      </OptionsWrapper>
    </SectionWrapper>
  );
};

export default StorageOptions;
