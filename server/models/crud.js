module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      username: String,
      password: String,
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      address: String,
      role: String,
    },
    { timestamps: true },
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Crud = mongoose.model("crud", schema);
  return Crud;
};
