import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Header.module.css"
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../services/user';
import { deleteCookie, getCookie } from '../utils/cookie';

function Header() {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken") ;

    const navigate = useNavigate() ; 
    const { refetch } = useQuery(["profile"] , getProfile) ; 
    
    const exitHandler = () => {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        navigate("/");
        refetch();
    }
  return (
    <header className={styles.header} >
        <div>
            <Link to="/" >
                <img src='divar.svg' className={styles.logo} />
            </Link>
            <span>
                <img src="location.svg"/>
                <p>تهران</p>
            </span>
        </div>
        <div>

            <Link to="/auth" >
                <span>
                    <img src="profile.svg" />
                    <p>دیوار من</p>
                </span>
            </Link>
            <Link to="/dashboard" className={styles.button} >ثبت آگهی</Link>
            {accessToken && refreshToken && (<button className={styles.exitButton} onClick={exitHandler} >خروج</button>)}
        </div>
    </header>
  )
}

export default Header