'use client';
import React from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from '@nextui-org/react';

interface CustomModalProps {
  name: string;
  title: string;
  description: string;
  action: string;
}
export default function CustomModal({Options}: CustomModalProps): JSX.Element {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			<Button onPress={onOpen}>{Options.name}</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>{Options.title}</ModalHeader>
							<ModalBody>
								<p>{Options.description}</p>
							</ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>
                  Close
								</Button>
								<Button color='primary' onPress={onClose}>
                  Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
