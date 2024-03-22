import { useState } from "react";
import styles from "./register.module.css";
import Sms from "./Sms";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOPT, setIsRegisterWithOPT] = useState(false);

  const hideOPTform = () => setIsRegisterWithOPT(false);

  return (
    <>
      {isRegisterWithOPT ? (
        <Sms hideOPTform={hideOPTform} />
      ) : (
        <>
          <div className={styles.form}>
            <input className={styles.input} type="text" placeholder="نام" />
            <input
              className={styles.input}
              type="text"
              placeholder="شماره موبایل  "
            />
            <input
              className={styles.input}
              type="email"
              placeholder="ایمیل (دلخواه)"
            />
            {isRegisterWithPass && (
              <input
                className={styles.input}
                type="password"
                placeholder="رمز عبور"
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
              onClick={() => setIsRegisterWithPass(true)}
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
