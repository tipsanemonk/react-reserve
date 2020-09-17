// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://tipsaneDB:tipsaneDB@cluster0.xuwwv.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "orland",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/tipsane/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
