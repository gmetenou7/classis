"use client";
import { formValidation } from "@/data/errors/messages";
import useAuthForm from "@/hooks/useAuthForm";
import Link from "next/link";
import * as yup from "yup";

const schema = yup.object({
  code: yup.string().required(formValidation.REQUIRED_FIELD),
});

const Form2 = ({ nextFn }: { nextFn: () => void }) => {
  const { handleSubmitFn, mutation, errors, register } = useAuthForm({
    schema: schema,
    mutationKey: ["forgot-password", 2],
    apiRoute: "/api/verify-otp",
    fn: nextFn,
  });
  return (
    <form onSubmit={handleSubmitFn}>
      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Code
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Entrez votre code"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            {...register("code")}
          />
        </div>
        {errors.code && <p className="text-rose-500">{errors.code.message}</p>}
      </div>

      <div className="mb-5 mt-8">
        <p className="mb-1.5 font-medium">
          Je n'ai pas recu de code <Link className="text-blue-500" href="#">Renvoyez</Link>
        </p>
        <input
          type="submit"
          value="Verifier le code"
          className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
        />
      </div>
    </form>
  );
};

export default Form2;
