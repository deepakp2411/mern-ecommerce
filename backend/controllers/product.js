const ProductModel = require( "../models/product");
const cloudinary = require( "../utils/cloudinary");

 const postProduct = async (req, res) => {
  const { name, brand, desc, price, image } = req.body;
  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "dpshoponline",
      });

      if (uploadRes) {
        const product = new ProductModel({
          name,
          brand,
          desc,
          price,
          image: uploadRes,
        });

        const savedProduct = await product.save();

        res.status(200).send(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

 const findProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};


module.exports = {postProduct,findProduct}