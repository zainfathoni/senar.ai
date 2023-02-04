export const Visualizer = () => {
  return (
    <div className="scale-75 origin-top sm:scale-50 xl:scale-75 xl:w-[50vw] -mb-14 sm:mb-[-18rem] undefined">
      <div className="relative mx-2 md:mx-4 lg:mx-auto lg:max-w-4xl  bg-gray-700 shadow-md rounded md:rounded-lg max-h-[75vh] overflow-hidden select-none">
        <div className="flex items-center justify-center px-1 pt-1 pb-0 md:px-2 md:pt-2">
          <div className="relative flex items-center w-2/3 px-2 py-1 text-gray-100 bg-gray-600 rounded-md md:py-1 md:px-3">
            <span className="text-[length:10px] md:text-sm">
              example.com/sales/invoices/102000
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-4 h-4 right-1 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 7 7"
            >
              <path
                fill="#fff"
                fillOpacity="0.8"
                d="M5.088 4.004l-.125.126.125.125.126-.125-.126-.126zm-1.073-.822l.948.948.251-.252-.948-.948-.251.252zm1.2.948l.947-.948-.251-.252-.948.948.251.252z"
              ></path>
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeOpacity="0.8"
                strokeWidth="0.355"
                d="M4.26 4.966a1.659 1.659 0 11.829-1.436"
              ></path>
            </svg>
          </div>
          <div className="absolute flex gap-1 p-2 left-1 md:left-2 md:gap-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full md:h-3 md:w-3"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full md:h-3 md:w-3"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full md:h-3 md:w-3"></div>
          </div>
        </div>
        <div className="px-2 pt-1 pb-2 md:px-4 md:pt-2 md:pb-4">
          <div className="h-[25vh] sm:h-[38vh] bg-white">
            <div className="relative bg-white text-gray-600 flex rounded md:rounded-lg overflow-hidden h-[25vh] sm:h-[38vh]">
              <div className="border-r border-gray-100 bg-gray-50">
                <div className="p-[5.7px] lg:p-4">
                  <div className="flex items-center text-[color:#23BF1F]">
                    <svg
                      className="w-[8.5px] h-[8.5px] md:h-[18px] md:w-[18px] relative top-[1px]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#23BF1F"
                        fillRule="evenodd"
                        d="M12 3a9 9 0 000 18h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 001.624-1.624C21 18.597 21 17.898 21 16.5V12a9 9 0 00-9-9zm-4 8a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm3 4a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="w-[1px] md:w-1"></div>
                    <div className="font-display font-extrabold text-[length:8px] md:text-base">
                      Fakebooks
                    </div>
                  </div>
                  <div className="h-2 md:h-7"></div>
                  <div className="font-bold text-gray-800">
                    <div className="text-[length:7px] md:text-[length:10px] lg:text-[length:14px] py-[1.4px] px-[2.8px] md:py-1 md:px-2 my-[1.4px] md:my-1 pr-4 md:pr-16 undefined">
                      Dashboard
                    </div>
                    <div className="text-[length:7px] md:text-[length:10px] lg:text-[length:14px] py-[1.4px] px-[2.8px] md:py-1 md:px-2 my-[1.4px] md:my-1 pr-4 md:pr-16 undefined">
                      Accounts
                    </div>
                    <div className="text-[length:7px] md:text-[length:10px] lg:text-[length:14px] py-[1.4px] px-[2.8px] md:py-1 md:px-2 my-[1.4px] md:my-1 pr-4 md:pr-16 bg-gray-100 rounded md:rounded-md">
                      Sales
                    </div>
                    <div className="text-[length:7px] md:text-[length:10px] lg:text-[length:14px] py-[1.4px] px-[2.8px] md:py-1 md:px-2 my-[1.4px] md:my-1 pr-4 md:pr-16 undefined">
                      Expenses
                    </div>
                    <div className="text-[length:7px] md:text-[length:10px] lg:text-[length:14px] py-[1.4px] px-[2.8px] md:py-1 md:px-2 my-[1.4px] md:my-1 pr-4 md:pr-16 undefined">
                      Reports
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative h-full p-3 md:p-10">
                  <div className="font-display font-extrabold text-[length:10px] md:text-3xl text-black">
                    Sales
                  </div>
                  <div className="h-2 md:h-6"></div>
                  <div className="flex gap-2 font-medium md:gap-4 text-gray-400 border-b border-gray-100 text-[length:5px] md:text-[length:14px] pb-1 md:pb-4">
                    <div>Overview</div>
                    <div>Subscriptions</div>
                    <div className="font-bold text-black">Invoices</div>
                    <div>Customers</div>
                    <div>Deposits</div>
                  </div>
                  <div className="h-3 md:h-4"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between gap-1 md:gap-4">
                      <div className="">
                        <div className="uppercase text-gray-400 font-medium text-[length:5px] leading-[8.5px] md:text-[12px] md:leading-[24px]">
                          Overdue
                        </div>
                        <div className="text-black text-[length:6.4px] md:text-[length:18px]">
                          $10,800
                        </div>
                      </div>
                      <div className="flex-1 h-[6px] md:h-4 flex rounded-full overflow-hidden">
                        <div className="w-1/3 bg-yellow-brand"></div>
                        <div className="flex-1 bg-green"></div>
                      </div>
                      <div className="text-right">
                        <div className="uppercase text-gray-400 font-medium text-[length:5px] leading-[8.5px] md:text-[12px] md:leading-[24px]">
                          Due Soon
                        </div>
                        <div className="text-black text-[length:6.4px] md:text-[length:18px]">
                          $62,000
                        </div>
                      </div>
                    </div>
                    <div className="h-3 md:h-4"></div>
                    <div className="uppercase text-gray-400 font-medium text-[length:5px] leading-[8.5px] md:text-[12px] md:leading-[24px]">
                      Invoice List
                    </div>
                    <div className="h-[2.8px] md:h-2"></div>
                    <div className="flex border border-gray-100 rounded md:rounded-lg">
                      <div className="w-1/2 border-r border-gray-100">
                        <div className="py-[4.2px] md:py-3 border-b border-gray-50 mx-[5.7px] md:mx-4 border-transparent">
                          <div className="flex justify-between font-bold text-[length:5px] leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Santa Monica</div>
                            <div>$10,800</div>
                          </div>
                          <div className="flex justify-between text-gray-400 font-medium text-[length:4.2px] leading-[6px] md:text-[length:12px] md:leading-4">
                            <div>1995</div>
                            <div className="uppercase text-red-brand">
                              Overdue
                            </div>
                          </div>
                        </div>
                        <div className="py-[4.2px] md:py-3 border-b border-gray-50 px-[5.7px] md:px-4 bg-gray-50">
                          <div className="flex justify-between font-bold text-[length:5px] leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Stankonia</div>
                            <div>$8,000</div>
                          </div>
                          <div className="flex justify-between text-gray-400 font-medium text-[length:4.2px] leading-[6px] md:text-[length:12px] md:leading-4">
                            <div>2000</div>
                            <div className="uppercase ">Due Today</div>
                          </div>
                        </div>
                        <div className="py-[4.2px] md:py-3 border-b border-gray-50 mx-[5.7px] md:mx-4 border-transparent">
                          <div className="flex justify-between font-bold text-[length:5px] leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Ocean Avenue</div>
                            <div>$9,500</div>
                          </div>
                          <div className="flex justify-between text-gray-400 font-medium text-[length:4.2px] leading-[6px] md:text-[length:12px] md:leading-4">
                            <div>2003</div>
                            <div className="uppercase text-green-brand">
                              Paid
                            </div>
                          </div>
                        </div>
                        <div className="py-[4.2px] md:py-3 border-b border-gray-50 mx-[5.7px] md:mx-4 border-transparent">
                          <div className="flex justify-between font-bold text-[length:5px] leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Tubthumper</div>
                            <div>$14,000</div>
                          </div>
                          <div className="flex justify-between text-gray-400 font-medium text-[length:4.2px] leading-[6px] md:text-[length:12px] md:leading-4">
                            <div>1997</div>
                            <div className="uppercase ">Due in 10 Days</div>
                          </div>
                        </div>
                        <div className="py-[4.2px] md:py-3 border-b border-gray-50 mx-[5.7px] md:mx-4 border-transparent">
                          <div className="flex justify-between font-bold text-[length:5px] leading-[8.5px] md:text-[length:14px] md:leading-6">
                            <div>Wide Open Sp...</div>
                            <div>$4,600</div>
                          </div>
                          <div className="flex justify-between text-gray-400 font-medium text-[length:4.2px] leading-[6px] md:text-[length:12px] md:leading-4">
                            <div>1998</div>
                            <div className="uppercase ">Due in 8 Days</div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="relative p-3 md:p-10">
                          <div className="font-bold text-[length:5px] leading-[8.5px] md:text-[length:14px] md:leading-6">
                            Stankonia
                          </div>
                          <div className="font-bold text-[length:11px] leading-[14px] md:text-[length:32px] md:leading-[40px]">
                            $8,000
                          </div>
                          <div className="uppercase text-gray-400 font-medium text-[length:5px] leading-[8.5px] md:text-[12px] md:leading-[24px]">
                            Due Today • Invoiced 10/31/2000
                          </div>
                          <div className="h-[5.7px] md:h-4"></div>
                          <div className="flex justify-between border-t border-gray-100 text-[5px] leading-[9px] md:text-[14px] md:leading-[24px] py-[5.7px] md:py-4 ">
                            <div>Pro Plan</div>
                            <div>$6,000</div>
                          </div>
                          <div className="flex justify-between border-t border-gray-100 text-[5px] leading-[9px] md:text-[14px] md:leading-[24px] py-[5.7px] md:py-4 ">
                            <div>Custom</div>
                            <div>$2,000</div>
                          </div>
                          <div className="flex justify-between border-t border-gray-100 text-[5px] leading-[9px] md:text-[14px] md:leading-[24px] py-[5.7px] md:py-4 font-bold">
                            <div>Net Total</div>
                            <div>$8,000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-4"></div>
          <div className="relative">
            <div className="absolute top-0 right-0 flex justify-around left-16 sm:left-28">
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-50 w-[1px] h-[6px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-50 w-[1px] h-[6px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-50 w-[1px] h-[6px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-50 w-[1px] h-[6px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-300 h-1 w-[1px]"></div>
              <div className="bg-gray-50 w-[1px] h-[6px]"></div>
            </div>
            <div className="h-4"></div>
            <div>
              <div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
                <div className="w-16 sm:w-28 text-[length:8px] sm:text-sm ">
                  document
                </div>
                <div className="relative flex-1">
                  <div
                    className="h-1 sm:h-2 bg-green"
                    style={{ width: '80%', marginLeft: '0%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
                <div className="w-16 sm:w-28 text-[length:8px] sm:text-sm ">
                  root.js
                </div>
                <div className="relative flex-1">
                  <div
                    className="h-1 sm:h-2 bg-green"
                    style={{ width: '25%', marginLeft: '10%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
                <div className="w-16 sm:w-28 text-[length:8px] sm:text-sm ">
                  user.json
                </div>
                <div className="relative flex-1">
                  <div
                    className="h-1 sm:h-2 bg-green"
                    style={{ width: '10%', marginLeft: '35%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
                <div className="w-16 sm:w-28 text-[length:8px] sm:text-sm ">
                  sales.js
                </div>
                <div className="relative flex-1">
                  <div
                    className="h-1 sm:h-2 bg-green"
                    style={{ width: '21%', marginLeft: '35%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
                <div className="w-16 sm:w-28 text-[length:8px] sm:text-sm ">
                  sales/nav.json
                </div>
                <div className="relative flex-1">
                  <div
                    className="h-1 sm:h-2 bg-green"
                    style={{ width: '8%', marginLeft: '56%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
                <div className="w-16 sm:w-28 text-[length:8px] sm:text-sm ">
                  invoices.js
                </div>
                <div className="relative flex-1">
                  <div
                    className="h-1 sm:h-2 bg-green"
                    style={{ width: '10%', marginLeft: '56%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
                <div className="w-16 sm:w-28 text-[length:8px] sm:text-sm ">
                  invoice.js
                </div>
                <div className="relative flex-1">
                  <div
                    className="h-1 sm:h-2 bg-green"
                    style={{ width: '22%', marginLeft: '66%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
                <div className="w-16 sm:w-28 text-[length:8px] sm:text-sm ">
                  {'invoice/{id}.json'}
                </div>
                <div className="relative flex-1">
                  <div
                    className="h-1 sm:h-2 bg-green"
                    style={{ width: '10%', marginLeft: '88%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 h-full left-16 sm:left-28">
              <div className="absolute top-0 h-full" style={{ left: '100%' }}>
                <svg
                  className="w-2 -ml-1 text-blue-brand"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 7 14"
                >
                  <path
                    fill="currentColor"
                    d="M0 0h7v9.249a2 2 0 01-.495 1.316L3.5 14 .495 10.566A2 2 0 010 9.248V0z"
                  ></path>
                </svg>
                <div className="w-[1px] relative top-[-1px] bg-blue-brand h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
