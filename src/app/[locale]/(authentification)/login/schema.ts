import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, {
    message: "Your password must have at least 8 characters !",
  }),
});

export { schema };
