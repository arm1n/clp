import React, { Fragment, useState, useCallback, useMemo, forwardRef } from "react";

import { Modal } from "components/modal";

export const useModal = ({ initialState = false, onClose = () => {} } = {}) => {
  const [isModalVisible, setIsModalVisible] = useState(initialState);

  const hideModal = useCallback(() => setIsModalVisible(false), []);
  const showModal = useCallback(() => setIsModalVisible(true), []);
  const closeHandler = useCallback(() => {
    if (typeof onClose === "function") {
      onClose();
    }

    hideModal();
  }, [onClose, hideModal]);

  const Component = useMemo(
    () =>
      forwardRef(({ children, ...props }, ref) => (
        <Fragment>
          {isModalVisible && (
            <Modal ref={ref} onClose={closeHandler} {...props}>
              {children}
            </Modal>
          )}
        </Fragment>
      )),
    [isModalVisible, closeHandler]
  );

  return [Component, showModal, hideModal, isModalVisible];
};
