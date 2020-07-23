import Product from '../../models/Product';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  const products = await Product.find(); // chain with exec to make it explicitly promise althought it will still give us a return value we can resolve with await
  res.status(200).json(products);
}