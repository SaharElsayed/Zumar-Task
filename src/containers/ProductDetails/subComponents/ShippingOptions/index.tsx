import React, { useState } from "react";
import RadioButton from "../../../../components/RadioButton";
import {
  SectionWrapper,
  HeaderWrapper,
  Header,
  Price,
  OptionsWrapper,
  OptionContent,
  ShippingType,
  ShippingDuration
} from "./styles";

const ShippingOptions = ({
  options
}: {
  options: { id: number; text: string; duration: string }[];
}) => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleChooseOption = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedOption(+e.target.value);
  };

  return (
    <SectionWrapper>
      <HeaderWrapper>
        <Header>Shipping </Header>
        <Price>$100</Price>
      </HeaderWrapper>

      <OptionsWrapper>
        {options.map((option, index) => (
          <div key={`shipping-${index}`}>
            <RadioButton
              id={`shipping-${option.id}`}
              name="shipping-options"
              checkedItem={selectedOption}
              value={option.id}
              changeHandler={handleChooseOption}
            >
              <OptionContent>
                <ShippingType>{option.text}</ShippingType>
                <ShippingDuration>{option.duration}</ShippingDuration>
              </OptionContent>
            </RadioButton>
          </div>
        ))}
      </OptionsWrapper>
    </SectionWrapper>
  );
};

export default ShippingOptions;
