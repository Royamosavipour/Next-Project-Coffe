import { useState } from "react";
import styles from "./register.module.css";
import Sms from "./Sms";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOPT, setIsRegisterWithOPT] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideOPTform = () => setIsRegisterWithOPT(false);

  const signUp = () => {
    console.log("test=>");
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
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="ایمیل (دلخواه)"
              value={email}
              onChange={(e) => setName(e.target.value)}
            />
            {isRegisterWithPass && (
              <input
                className={styles.input}
                type="password"
                placeholder="رمز عبور"
                value={password}
                onChange={(e) => setName(e.target.value)}
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
                isRegisterWithPass ? signUp() : setIsRegisterWithPass(true);setIsRegisterWithPass(true)
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
