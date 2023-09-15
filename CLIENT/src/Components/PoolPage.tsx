import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
   
  export function Pool() {

    return (
      <div className="justify-center items-center flex mt-20 mb-20">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
           Pool USDC
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 mb-20">
          <Input className=""type="Number"label="Amount" size="lg" crossOrigin={undefined} />
                 </CardBody>
        <CardBody className="flex flex-col gap-4">
          
          <Input type="Number"label="Amount" size="lg" readOnly crossOrigin={undefined} />
          <Input type="Number"label="Amount" size="lg" readOnly crossOrigin={undefined} />
         
        </CardBody>

        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Connect Wallet
          </Button>
         
        </CardFooter>
      </Card>
      </div>
    );
  }