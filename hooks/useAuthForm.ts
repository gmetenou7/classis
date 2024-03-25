import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { MutationKey, useMutation } from "react-query";
import * as yup from "yup";

const useAuthForm = <U extends FieldValues>({
  schema,
  mutationKey,
  apiRoute,
  fn,
}: {
  mutationKey: MutationKey;
  apiRoute: string;
  schema: yup.ObjectSchema<U, yup.AnyObject, any, "">;
  fn?: Function;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postData = async (data: any) => {
    try {
      const res = await axios.post(apiRoute, data);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  };
  const mutation = useMutation({
    mutationKey,
    mutationFn: postData,
  });
  const onSubmitFn = async (data: any) => {
    console.log("data for " + apiRoute, data);
    // await mutation.mutate(data)
    if (fn) {
      console.log('fn')
      fn();
    }
  };
  const handleSubmitFn = handleSubmit(onSubmitFn);
  return {
    mutation,
    handleSubmitFn,
    register,
    errors,
  };
};

export default useAuthForm;
