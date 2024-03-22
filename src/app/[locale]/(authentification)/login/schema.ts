import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(8, {
    message: "Votre mot de passe doit doit avoir au moins 8 caractères !",
  }),
});

export { schema };
