import connectToDB from "@/configs/db";
import { valiadteEmail, valiadtePassword } from "@/utils/auth";

export async function POST(req) {
  try {
    try {
      connectToDB();
      const body = await req.json();
      const { email, password } = body;
      //Validation
      const isValidEmail = valiadteEmail(email);
      const isValidPassword = valiadtePassword(password);

      if (!isValidEmail || !isValidPassword) {
        return Response.json()
      }
    } catch (error) {}
  } catch (error) {}
}
