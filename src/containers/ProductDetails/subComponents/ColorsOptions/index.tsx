import React, { useState } from "react";
import RadioButton from "../../../../components/RadioButton";
import {
  SectionWrapper,
  Header,
  OptionsWrapper,
  OptionContent
} from "./styles";

const ColorsOptions = ({
  options
}: {
  options: {
    id: number;
    thumbnail: string;
    text: string;
  }[];
}) => {
  const [selectedColor, setSelectedColor] = useState(1);

  const handleChooseColor = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedColor(+e.target.value);
  };

  return (
    <SectionWrapper>
      <Header>Availble color</Header>
      <OptionsWrapper>
        {options.map((option, index) => (
          <div key={`color-${index}`}>
            <RadioButton
              id={`color-${option.id}`}
              name="color-options"
              checkedItem={selectedColor}
              value={option.id}
              changeHandler={handleChooseColor}
            >
              <OptionContent>
                <img
                  className="color-thumbnail"
                  src={option.thumbnail}
                  alt="color-thumbnail"
                />
                <p>{option.text}</p>
              </OptionContent>
            </RadioButton>
          </div>
        ))}
      </OptionsWrapper>
    </SectionWrapper>
  );
};

export default ColorsOptions;
