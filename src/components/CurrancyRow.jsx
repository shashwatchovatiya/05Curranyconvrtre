import React, { useId } from 'react'


function CurrancyRow({
  label,
  amount,
  onAmountchang,
  onCurrancychange,
  CurrancyOptions = [],
  selectCurrancy = 'usd',
  amountdisable = false,
  currancydisable = false,
  className = "",
}) 
// or you can write type this 
// function CurrancyRow({ label,className = "", })

{
 
    const amountid = useId();
  return (
      <div className={`bg-white p-3 border-black m-2  border-2 rounded-lg text-sm flex ${className} `}>
          <div className="w-1/2">
              <label htmlFor={amountid} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountid}
                  className="outline-none w-full bg-transparent py-1.5 px-2"
                  type="number"
                  placeholder="Amount"
                  disabled={amountdisable}
                  value={amount}
                  onChange={ (e) => onAmountchang && onAmountchang(Number(e.target.value))}  
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrancy}
                    onChange={(e)=> onCurrancychange && onCurrancychange(e.target.value)}
                    disabled={currancydisable}
              >
                  
                     

                      {CurrancyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option> 
                      ))}
              
              </select>
          </div>
      </div>
  );
}

export default CurrancyRow;
