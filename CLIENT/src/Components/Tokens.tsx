

import Table from './table';



function Tokens() {

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="flex flex-col gap-2 p-6 font-mono w-5/6 sm:w-3/4">
        {/* heading */}
        <div className="w-full pb-2">
          <h1 className="text-cyan-500 text-3xl font-medium">
            Top Tokens on MudraFi
          </h1>
        </div>
        {/* options */}
        <div className="w-full flex flex-row flex-wrap gap-2 py-4">
          
        </div>
        {/* Main Tokens Table */}
        <Table />
      </div>
    </div>
  );
}

export default Tokens