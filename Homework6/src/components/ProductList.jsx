import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from "../redux/productsSlice";
import { Card, Button, Switch, Flex } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import EditProduct from "./EditProduct";

const ProductList = () => {
  const { products } = useSelector((state) => state.products || {});
  const dispatch = useDispatch();

  return (
    <Flex justify="center" align="center" wrap vertical>
      <h1>Каталог</h1>
      {products?.length === 0 ? (
        <p>Товары отсутствуют в каталоге</p>
      ) : (
        <Flex justify="center" align="center" wrap>
          {products.map((product) => (
            <Card
              title={product.name}
              style={{
                width: "300px",
                height: "350px",
                margin: "16px",
                boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.3)",
              }}
            >
              <p>{product.description}</p>
              <p>Цена: {product.price} руб.</p>
              <p>
                Доступность:
                <Switch
                style={{ margin: "0 8px" }}
                  onClick={() => dispatch(toggleAvailability(product.id))}
                  checked={product.available}
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                />
              </p>
              <Flex style={{ marginTop: "20px" }} justify="space-between">
                <EditProduct product={product} />
                <Button
                  onClick={() => dispatch(deleteProduct(product.id))}
                  danger
                >
                  Удалить
                </Button>
              </Flex>
            </Card>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ProductList;
