import React from "react";
import { Collapse, Card, CardBody } from "reactstrap";

const CollapseUtil = ({isOpen, children}) => {
  return (
    <div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {children}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default CollapseUtil;
