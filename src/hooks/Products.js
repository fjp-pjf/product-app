import axios from "axios";

const useProducts = () => {
  const getProducts = async () => {
    try {
      const response = await axios.get("http://fakestoreapi.com/products");
      console.log("response______>>>", response);
    } catch (error) {
      console.error(error);
    }
  };
  return { getProducts };
};

export default useProducts;
