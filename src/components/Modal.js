import React, { Component } from "react";
import { Modal } from "antd";

export default class EditModal extends Component {
	render() {	
		const { visible, onOk, onCancel, msg, data } = this.props;
		  return (
			<Modal title="" visible = {visible} onCancel = {onCancel} onOk = {onOk}>
				<h4>{data ? msg : 'Verify the data is incorrect.'}</h4>

			</Modal>
		  );
	}
}
