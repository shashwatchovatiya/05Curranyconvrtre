import { useState, useEffect } from 'react'
import CurrancyRow from './components/CurrancyRow'
import useCuurancyinfo from './Hook/useCuurancyinfo'
import './index.css'



function App() {

  const [amount, setAmount] = useState(0)
  const [from, setForm] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount, setConvertAmount] = useState(0)


  // api Calling in below 
  const currancyinfo = useCuurancyinfo(from)
  console.log(currancyinfo);
  const option = Object.keys(currancyinfo)

  //swaping mathode

  const swap = () => {
    setForm(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }

  //converting amount mathode
  const convert = ( ) => {
    setConvertAmount(amount * currancyinfo[to])
  }
  return (
    <>

         <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover"
            style={{
                backgroundImage: `url('https://source.unsplash.com/random/2400x1600')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <CurrancyRow
                                label="From"
                                amount={amount}
                                CurrancyOptions={option}
                                onCurrancychange={(currency) => setForm(currency)}
                                onAmountchang={(amount)=> setAmount(amount)}
                                selectCurrancy={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <CurrancyRow
                                label="to"
                                amount={convertAmount}
                                CurrancyOptions={option}
                                onCurrancychange={(currency) => setTo(currency)}
                                onAmountchang={(amount) => setConvertAmount(amount)}
                                selectCurrancy={to}
                                // amountdisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </>
  )
}

export default App
