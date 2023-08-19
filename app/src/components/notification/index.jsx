import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button, User, Card, CardBody, Spacer} from "@nextui-org/react";

export default function Notifications({ data }) {
    const test = [12,3,23,2,132,13,243,21,321321,21,31,3,213,21,361,341,9]
  return (
    <Popover placement="down">
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="py-1 w-[330px] overflow-y-auto h-[420px]">
            { test && test.map((item, index) => (
                <>
          <Card className="w-[330px]" isPressable>
            <CardBody>
            <User   
                name="Jane Doe"
                description="Product Designer Product Designer Product DesignerProduct DesignerProduct DesignerProduct DesignerProduct Designer"
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
            />
            </CardBody>
        </Card>
        <Spacer y={2} />
                </>
        
            ))}

          
        </div>
      </PopoverContent>
    </Popover>
  );
}