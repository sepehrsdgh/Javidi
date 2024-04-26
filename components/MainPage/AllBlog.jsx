import React from "react";
import GreenBesideBlack from "../text/GreenBesideBlack";
import ImageAbove from "../layout/ImageAbove";
import BlogCard from "../cards/BlogCard";

export default function AllBlog() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-[#212529] uppercase ubuntuBold">BLOG</div>
      <GreenBesideBlack
        {...{ title: "اخبار و مقالات فرمی دیراک", subTitle: "را دنبال کنید" }}
      />
      <div className="flex flex-col gap-20">
        <ImageAbove {...{ component: <BlogCard /> }} />
        <ImageAbove {...{ component: <BlogCard /> }} />
        <ImageAbove {...{ component: <BlogCard /> }} />
        <ImageAbove {...{ component: <BlogCard /> }} />
      </div>
      <div className="text-[#5BA446] text-center mt-16 text-[20px]">
        مشاهده همه مقالات
      </div>
    </div>
  );
}
