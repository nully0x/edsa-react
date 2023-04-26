import React from 'react';

const CurrencySwitcher = (props) => {
  const { currency, handleChangeCurrency } = props;

  let buttonText;
  if (currency === '€') {
    buttonText = 'Switch to $';
  } else if (currency === '$') {
    buttonText = 'Switch to €';
  }

  return (
    <button onClick={handleChangeCurrency}>
      {buttonText}
    </button>
  );
};

export default CurrencySwitcher;
