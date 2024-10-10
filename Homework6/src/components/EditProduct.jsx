import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/productsSlice";
import { Button, Form, Input, Modal, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const EditProduct = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue({
      name: product.name,
      description: product.description,
      price: product.price,
      available: product.available,
    });
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(updateProduct({ ...product, ...values }));
        setIsModalOpen(false);
      })
      .catch((info) => {
        console.log("Валидация не пройдена:", info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Редактировать
      </Button>
      <Modal
        title="Редактировать продукт"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Сохранить"
        cancelText="Отмена"
      >
        <Form form={form} layout="vertical" name="edit-product-form">
          <Form.Item
            label="Название"
            name="name"
            rules={[{ required: true, message: "Введите название продукта" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Описание"
            name="description"
            rules={[{ required: true, message: "Введите описание продукта" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Цена"
            name="price"
            rules={[{ required: true, message: "Введите цену продукта" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Доступность"
            name="available"
            valuePropName="checked"
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditProduct;
