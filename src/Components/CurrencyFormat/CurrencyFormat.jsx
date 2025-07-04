/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import numeral from 'numeral'

const CurrencyFormat = ({amount}) => {
  const updatedAmount = numeral(amount).format("$0,0.00")
  return(<div>{updatedAmount}</div>)
}

export default CurrencyFormat
