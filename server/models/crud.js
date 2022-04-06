module.exports = (mongoose, mongoosePaginate) => {
  const schema = mongoose.Schema(
    {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      address: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  schema.plugin(mongoosePaginate);

  const Crud = mongoose.model("crud", schema);
  return Crud;
};
