
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,

} from "@material-tailwind/react";


const TABLE_HEAD = ["Name", "Network", "Liquidity", "Volume(24h)", "volume(7d)",];
 
const TABLE_ROWS = [
  {
    
    Name:"BTT",
    Network:"",
    Liquidity:"",
    Volume1:"",
    Volume2:"",
  },
  {
   
    Name:"USDT",
    Network:"",
    Liquidity:"",
    Volume1:"",
    Volume2:"",
  },
  {
    
    Name:"BTT",
    Network:"",
    Liquidity:"",
    Volume1:"",
    Volume2:"",
  },
  {
    
    Name:"USDT",
    Network:"",
    Liquidity:"",
    Volume1:"",
    Volume2:"",
  },
  {
    Name:"BTT",
    Network:"",
    Liquidity:"",
    Volume1:"",
    Volume2:"",
  },
];
 
export function TransactionsTable() {
  return (
    <Card className="h-full p-10 w-full bg-transparent shadow-none hidden sm:block">
      
      <CardBody className=" px-0 bg-gray rounded-lg">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-gray p-4"
                >
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                    Name,
                    Network,
                    Liquidity,
                    Volume1,
                    Volume2,
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={Name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        
                        
                        <Typography
                          variant="small"
                          color="white"
                          className="font-bold"
                        >
                          {Name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {Network}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {Liquidity}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={Volume1}
                          
                        />
                      </div>
                    </td>
                    <td className={classes} >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12  p-1">
                          
                        </div>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="white"
                            className="font-normal capitalize"
                          >
                            {Volume2}
                          </Typography>
                        </div>
                      </div>
                    </td>
                   
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}