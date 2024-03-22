import { z } from "zod";

const required_msg = "Ce champ est requis!";
const schema = z.object({
  name: z.string({ required_error: required_msg }),
  activityDomain: z.string({ required_error: required_msg }),
  fiscalIdentification: z.string({ required_error: required_msg }),
  creationDate: z.date({ required_error: required_msg }),
  description: z.string({ required_error: required_msg }),
  address: z.string({ required_error: required_msg }),
  phone: z.string({ required_error: required_msg }),
  email: z.string().email({ message: "Invalid email" }),
  website: z.string({ required_error: required_msg }),
  juridictionStatus: z.string({ required_error: required_msg }),
  contacts: z.array(
    z.object({
      name: z.string({ required_error: required_msg }),
      phone: z.string({ required_error: required_msg }),
      email: z.string().email({ message: "Invalid email" }),
    })
  ),
});

export { schema };
