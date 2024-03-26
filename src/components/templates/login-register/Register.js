import { useState } from "react";
import styles from "./register.module.css";
import Sms from "./Sms";
import { showSwal } from "@/utils/helper";
import { valiadteEmail, valiadtePassword, valiadtePhone } from "@/utils/auth";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOPT, setIsRegisterWithOPT] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const hideOPTform = () => setIsRegisterWithOPT(false);

  const signUp = async () => {
    if (!name.trim()) {
      return showSwal("نام را وارد بکنید", "error", "تلاش مجدد");
    }
    const isValidPhone = valiadtePhone(phone);
    if (!isValidPhone) {
      return showSwal("شماره تماس وارد شده معتبر نیست", "error", "تلاش مجدد ");
    }

    const isValidEmail = valiadteEmail(email);
    if (!isValidEmail) {
      return showSwal("ایمیل وارد شده معتبر نیست", "error", "تلاش مجدد ");
    }
    const isValidPassword = valiadtePassword(password);
    if (!isValidPassword) {
      return showSwal("پسورد وارد شده قابل حدس هست", "error", "تلاش مجدد ");
    }
    const user = { name, phone, email, password };
    const res = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application-json" },
      body: JSON.stringify(user),
    });

    if (res.status === 201) {
      showSwal("ثبت نام با موفقیت انجام شد", "success", "ورود به پنل کاربری");
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
    } else if (res.status === 422) {
      showSwal("کاربری با این اطلاعات از قبل وجود دارد", "error", "تلاش مجدد");
    }
  };

  return (
    <>
      {isRegisterWithOPT ? (
        <Sms hideOPTform={hideOPTform} />
      ) : (
        <>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="نام"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="شماره موبایل  "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="ایمیل (دلخواه)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isRegisterWithPass && (
              <input
                className={styles.input}
                type="password"
                placeholder="رمز عبور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            <p
              onClick={() => setIsRegisterWithOPT(true)}
              style={{ marginTop: "1rem" }}
              className={styles.btn}
            >
              ثبت نام با کد تایید
            </p>
            <button
              onClick={() => {
                isRegisterWithPass ? signUp() : setIsRegisterWithPass(true);
                setIsRegisterWithPass(true);
              }}
              style={{ marginTop: ".7rem" }}
              className={styles.btn}
            >
              ثبت نام با رمزعبور
            </button>
            <p onClick={showloginForm} className={styles.back_to_login}>
              برگشت به ورود
            </p>
          </div>
          <p className={styles.redirect_to_home}>لغو</p>
        </>
      )}
    </>
  );
};

export default Register;
