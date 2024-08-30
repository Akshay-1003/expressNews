"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useForm } from "react-hook-form";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (values: any) => {
    setError(null);

    if (!title || !content) {
      setError("Please fill in all fields");
      return;
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <DefaultLayout>
       <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create News</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="heading" className="block text-sm font-medium text-gray-700">
            News Heading
          </label>
          <input
            type="text"
            id="heading"
            {...register("heading", { required: "News Heading is required." })}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              errors.heading ? "border-red-500" : ""
            }`}
            placeholder="Enter the news heading"
          />
          {errors.heading && (
            <p className="text-red-500 text-xs mt-1">add</p>
          )}
        </div>

        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
            Upload Photo
          </label>
          <input
            type="file"
            id="photo"
            {...register("photo", { required: "Photo is required." })}
            className={`mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 cursor-pointer ${
              errors.photo ? "border-red-500" : ""
            }`}
          />
          {errors.photo && (
            <p className="text-red-500 text-xs mt-1">upload pic</p>
          )}
        </div>

        <div>
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
            News Summary
          </label>
          <textarea
            id="summary"
            rows={4}
            {...register("summary", { required: "Summary is required." })}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              errors.summary ? "border-red-500" : ""
            }`}
            placeholder="Write the news summary here..."
          ></textarea>
          {errors.summary && (
            <p className="text-red-500 text-xs mt-1">Please Add Summay</p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit News
          </button>
        </div>
      </form>
    </div>
    </DefaultLayout>
  );
};

export default CreateNews;
