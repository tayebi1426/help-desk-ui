import React from "react";
import PropTypes from "prop-types";

import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";
import Dialog from "./Dialog";
import Button from "../form/Button";

function ConfirmDialog ({children, className, isOpen, size, type ,title,toggle, confirmMethod, ...restProps}) {
    return (
        <Dialog isOpen={isOpen} size={size} title={title} toggle={toggle}>
            <DialogBody>
                {children}
            </DialogBody>
            <DialogFooter>
                <Button title="cancel" color="light" onClick={toggle} size="sm" >
                    &nbsp;&nbsp;<i className="fa fa-times"></i>
                </Button>

                <Button title="confirm" color={type} onClick={confirmMethod.bind()} size="sm">
                    &nbsp;&nbsp;<i className="fa fa-check"></i>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

Dialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    toggle: PropTypes.func,
    confirmMethod: PropTypes.func
};

Dialog.defaultProps = {
    className: '',
    title: '',
    size: 'sm',
    type: 'danger',
    isOpen: false
};

export default ConfirmDialog;
