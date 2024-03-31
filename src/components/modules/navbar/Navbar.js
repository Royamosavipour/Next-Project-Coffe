"use client";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";

function Navbar({ isLogin }) {
  const [fixTop, setFixTop] = useState(false);

  useEffect(() => {
    const fixNavbarToTop = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 105) {
        setFixTop(true);
      } else {
        setFixTop(false);
      }
    };

    window.addEventListener("scroll", fixNavbarToTop);
    return () => window.removeEventListener("scroll", fixNavbarToTop);
  }, []);

  return (
    <>
      <nav className={fixTop ? styles.navbar_fixed : styles.navbar}>
        <main>
          <div>
            <Link href="/">
              <img src="/images/logo.png"></img>
            </Link>
          </div>
          <ul className={styles.links}>
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/category">فروشگاه</Link>
            </li>
            <li>
              <Link href="/blog">وبلاگ</Link>
            </li>
            <li>
              <Link href="/contact-us">تماس با ما</Link>
            </li>
            <li>
              <Link href="/about-us">درباره ما</Link>
            </li>
            <li>
              <Link href="/rules">قوانین</Link>
            </li>
            <li>
              <Link href="/login-register">ورود/عضویت</Link>
            </li>
            {/* start my accunt section */}
            {isLogin ? (
              <div className={styles.dropdown}>
                <Link href="/p-user">
                  حساب کاربری
                  <IoIosArrowDown />
                </Link>
                <div className={styles.dropdown_content}>
                  <Link href="/p-user/orders">سفارشات</Link>
                  <Link href="/p-user/tickets">تیکت‌های پشتیبانی</Link>
                  <Link href="/p-user/comments">کامنت‌ها</Link>
                  <Link href="/p-user/wishlist">علاقمندی</Link>
                  <Link href="/p-user/account-details">جزئیات اکانت</Link>
                </div>
              </div>
            ) : (
              <li>
                <Link href="/login-register">ورود / عضویت</Link>
              </li>
            )}

            {/* end my accunt section */}
          </ul>
          <div className={styles.navbar_icons}>
            <Link href="/card">
              <FaCartShopping />
              <span>1</span>
            </Link>
            <Link href="/wishlist">
              <FaRegHeart />
              <span>1</span>
            </Link>
          </div>
        </main>
      </nav>
    </>
  );
}

export default Navbar;
