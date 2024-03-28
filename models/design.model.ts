require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IDesign extends Document {
  slug: string;
  profile: {
    layout: string;
    avatar: {
      public_id: string;
      url: string;
      size: string;
      shape: string;
    };
    user: {
      name: string;
      location: string;
      bio: string;
      color: string;
    };
    socialIcons: ISocialIcons[];
  };
  background: {
    backgroundImage: {
      public_id: string;
      url: string;
    };
    backgroundColor: string;
  };
  nav: {
    isActive: boolean;
    isMenu: boolean;
  };
}

interface ISocialIcons extends Document {
  platform: string;
  link: string;
}

const socialIcons = new Schema<ISocialIcons>({
  platform: {
    type: String,
    unique: true,
  },
  link: {
    type: String,
    unique: true,
  },
});

const designSchema: Schema<IDesign> = new mongoose.Schema(
  {
    slug: {
      type: String,
      unique: true,
    },
    profile: {
      layout: {
        type: String,
        unique: true,
      },
      avatar: {
        public_id: String,
        url: String,
        size: String,
        shape: String,
      },
      user: {
        name: String,
        location: String,
        bio: String,
        color: String,
      },
      socialIcons: [socialIcons],
    },
    background: {
      backgroundImage: {
        public_id: String,
        url: String,
      },
      backgroundColor: String,
    },
    nav: {
      isActive: Boolean,
      isMenu: Boolean,
    },
  },
  { timestamps: true }
);

const DesignModel: Model<IDesign> = mongoose.model("Design", designSchema);

export default DesignModel;
