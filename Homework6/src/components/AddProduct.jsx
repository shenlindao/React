import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { Button, Flex, Form, Input, Space, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const { name, description, price, available } = values;
    if (!name || !description || isNaN(price) || price === "") {
      alert("Пожалуйста, заполните все поля корректно.");
      return;
    }

    dispatch(
      addProduct({
        name,
        description,
        price: parseFloat(price),
        available,
      })
    );

    form.resetFields();
  };

  return (
    <Flex justify="center" align="center" wrap vertical>
      <h1 style={{ textAlign: "center" }}>Добавление товара</h1>
      <Form
        form={form}
        name="add-product-form"
        style={{ width: "100%", maxWidth: "600px", padding: "0 16px" }}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          label="Название"
          name="name"
          rules={[{ required: true, message: "Введите название продукта" }]}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: "Введите описание продукта" }]}
        >
          <Input maxLength={50} />
        </Form.Item>
        <Form.Item
          label="Цена"
          name="price"
          rules={[{ required: true, message: "Введите цену продукта" }]}
        >
          <Input type="number" maxLength={50} />
        </Form.Item>
        <Form.Item label="Доступность" name="available" valuePropName="checked">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Подтвердить
            </Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>
              Сбросить
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default AddProduct;
