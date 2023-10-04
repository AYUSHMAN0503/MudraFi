
const AiDashboard = () => {
    
  return (
    <div className="bg-app-bg min-h-screen flex flex-col lg:flex-row">
      <aside id="sidebar" className="h-auto lg:h-full top-0 left-0 mt-6 mb-6 flex flex-col lg:w-64 transition-all duration-200 rounded-xl bg-gray ml-3 mr-3 lg:mr-0" aria-label="Sidebar">
        <div className="relative flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-app-bg divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <a href="#" className="text-base text-gold-500 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                  <svg className="w-6 h-6 text-blue-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="text-base text-gold-500 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Risks</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
      <div id="main-content" className="h-full w-full bg-app-bg relative overflow-y-auto ">
        <main>
          <div className="pt-6 px-4">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$450,385</span>
                    <h3 className="text-base font-normal text-blue-500">Spendings by you this week</h3>
                  </div>
                  <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                     +8.2%
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div id="main-chart"></div>
              </div>

              {/*right vala*/}
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Transactions</h3>
                    <span className="text-base font-normal text-black">This is a list of latest transactions done by you</span>
                  </div>
                  <div className="flex-shrink-0">
                    <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">See all</a>
                  </div>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="overflow-x-auto rounded-lg">
                    <div className="align-middle inline-block min-w-full">
                      <div className="shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="p-4 text-left text-xs font-medium text-black uppercase tracking-wider">Transaction</th>
                              <th scope="col" className="p-4 text-left text-xs font-medium text-black uppercase tracking-wider">Date</th>
                              <th scope="col" className="p-4 text-left text-xs font-medium text-black uppercase tracking-wider">Amount</th>
                            </tr>
                          </thead>
                          <tbody className="bg-app-bg">
                            <tr>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                <span className="font-semibold">BTT</span>
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-blue-500">
                                October 1, 2023
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                $2300
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                <span className="font-semibold">USD</span>
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-blue-500">
                                October 1, 2023
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                $2300
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                <span className="font-semibold">BTT</span>
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-blue-500">
                                October 1, 2023
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                $2300
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                <span className="font-semibold">BTT</span>
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-blue-500">
                                October 1, 2023
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                $2300
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                <span className="font-semibold">BTT</span>
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-blue-500">
                                October 1, 2023
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                $2300
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 bg-app-bg">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">2,340</span>
                        <h3 className="text-base font-normal text-blue-500">New tron things this week</h3>
                    </div>
                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        14.6%
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                  </div>
              </div>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                        <h3 className="text-base font-normal text-blue-500">Visitors this week</h3>
                    </div>
                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        32.9%
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                  </div>
              </div>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                        <h3 className="text-base font-normal text-blue-500">Your visits this week</h3>
                    </div>
                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                        -2.7%
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                  </div>
              </div>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                        <h3 className="text-base font-normal text-blue-500">not decided</h3>
                    </div>
                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                        -2.7%
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                  </div>
              </div>


            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Overview</h3>
                  <div className="block w-full overflow-x-auto align-middle">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                          <tr>
                              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Cryptos to go up</th>
                              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Vol</th>
                              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">(percentage)%</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr className="text-blue-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">BTT</th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2 text-xs font-medium">30%</span>
                                    <div className="relative w-full">
                                      <div className="w-full bg-gray-200 rounded-sm h-2">
                                          <div className="bg-cyan-600 h-2 rounded-sm w-1/3" ></div>
                                      </div>
                                    </div>
                                </div>
                              </td>
                          </tr>
                          <tr className="text-blue-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">BTC</th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2 text-xs font-medium">24%</span>
                                    <div className="relative w-full">
                                      <div className="w-full bg-gray-200 rounded-sm h-2">
                                          <div className="bg-orange-300 h-2 rounded-sm w-1/4"></div>
                                      </div>
                                    </div>
                                </div>
                              </td>
                          </tr>
                          <tr className="text-blue-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">BTC</th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2 text-xs font-medium">18%</span>
                                    <div className="relative w-full">
                                      <div className="w-full bg-gray-200 rounded-sm h-2">
                                          <div className="bg-teal-400 h-2 rounded-sm w-1/5" ></div>
                                      </div>
                                    </div>
                                </div>
                              </td>
                          </tr>
                          <tr className="text-blue-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">NAH</th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2 text-xs font-medium">12%</span>
                                    <div className="relative w-full">
                                      <div className="w-full bg-gray-200 rounded-sm h-2">
                                          <div className="bg-pink-600 h-2 rounded-sm w-1/12"></div>
                                      </div>
                                    </div>
                                </div>
                              </td>
                          </tr>
                          <tr className="text-blue-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">EMM</th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2 text-xs font-medium">9%</span>
                                    <div className="relative w-full">
                                      <div className="w-full bg-gray-200 rounded-sm h-2">
                                          <div className="bg-indigo-600 h-2 rounded-sm w-1/12"></div>
                                      </div>
                                    </div>
                                </div>
                              </td>
                          </tr>
                          <tr className="text-blue-500">
                              <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">ElL</th>
                              <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                              <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                <div className="flex items-center">
                                    <span className="mr-2 text-xs font-medium">7%</span>
                                    <div className="relative w-full">
                                      <div className="w-full bg-gray-200 rounded-sm h-2">
                                          <div className="bg-purple-500 h-2 rounded-sm w-1/12" ></div>
                                      </div>
                                    </div>
                                </div>
                              </td>
                          </tr>
                        </tbody>
                    </table>
                  </div>
              </div>
              {/*<div className="bg-white shadow rounded-lg p-5 ml-4 sm:p-6 xl:p-8 ">
                <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Graph</h3>
                <LineChart/>
  </div>*/}
            </div>
            <div className="text-bold texl-2xl text-white text-center">
            <h2 className=" text-sm sm:text-lg md:text-2xl lg:text-3xl justify-center flex bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600 font-semibold">NOTE : Frontend illustration only, Web3 connection Will be done soon.</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AiDashboard;
