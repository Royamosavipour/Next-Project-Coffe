import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/articles/Articles";
import Banner from "@/components/templates/index/baner/Banner";
import Lates from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";
import { verifyAccessToken } from "@/utils/auth";
import UserModel from "@/models/User";
import { cookies } from "next/headers";

export default async function Home() {
  const token = cookies().get("token");
  let user=null

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }

  return (
    <>
      <Navbar isLogin={user} />
      <Banner />
      <Lates />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
