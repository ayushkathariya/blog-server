import mongoose from "mongoose";

interface postSchemaInterface {
  title: string;
  body: string;
}

const postSchema = new mongoose.Schema<postSchemaInterface>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  body: {
    type: String,
    required: [true, "Body is required"],
  },
});

export default mongoose.model<postSchemaInterface>("posts", postSchema);
