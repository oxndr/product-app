/* eslint-disable react/jsx-props-no-spreading */
import { Select } from '@chakra-ui/react';

const SelectItem = ({ options, defValue, value, onChange, ...rest }) => {
  return (
    <Select
      {...rest}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectItem;
