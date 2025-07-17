import { Modal, Form, Input, Divider, Button, Typography } from "antd";
import { useEffect } from "react";
const { Paragraph, Text } = Typography;

export default function EditUserModal({ user, onCancel, onSave }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...user,
    });
  }, [user, form]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSave({
        ...user,
        ...values,
      });
    });
  };

  return (
    <Modal
      title={
        <>
          <Text>Basic Modal</Text>
          <Divider style={{ margin: "20px 0 20px 0" }} />
        </>
      }
      open={true}
      onCancel={onCancel}
      footer={
        <>
          <Divider style={{ margin: "20px 0 10px 0" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={onCancel} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button type="primary" onClick={handleOk}>
              Ok
            </Button>
          </div>
        </>
      }
    >
      <Form
        form={form}
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        style={{ marginLeft: "4rem" }}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[{ required: true }]}
          style={{ marginBottom: "4rem" }}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
