import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

const DetailModal = ({children, isOpen, toggle}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        {/* modal body */}
        {children}
        {/* modal body */}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="danger" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DetailModal