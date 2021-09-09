/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';

export default function ModalForm({
  children,
  btnLabel,
  footerBtn,
  onClickSubmit,
  header,
  ...rest
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();
  const toast = useToast();

  return (
    <>
      <Button {...rest} my={5} onClick={onOpen}>
        {btnLabel}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {footerBtn ? (
              <>
                {children}
                <ModalFooter>
                  <Button colorScheme="red" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    onClick={onClickSubmit}
                    colorScheme="gray"
                    variant="ghost"
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </>
            ) : (
              <>{children}</>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
