import React, { useEffect } from "react";
import axios from 'axios';
import queryString from "query-string";

function Login({ history, location }) {
  const query = queryString.parse(location.search);
  const error = query.error === "access_denied";
  const {code} = queryString.parse(location.search);

  // async function getToken() {
  //   try {
  //     // 이 부분은 express에 요청하여 JWT 토큰을 발급합니다.
  //     const response = await axios.post(
  //       'https://github.com/login/oauth/access_token',
  //       {
  //         code: code,
  //         client_id: "c3185ab770940f72baf0",
  //         client_secret: "31c3a5c73f83d54902570d8f046d50cf519ba61d",
  //       },
  //       {
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //           accept: 'application/json',
  //         },
  //       },
  //       );
  //       // 유저 JWT 토큰을 저장합니다.
  //       // localStorage.setItem('access_token', access_token);
  //       console.log("Success");
  //       history.push('/'); // 로그인이 완료되면 보여줄 페이지
  //     } catch (error) {
  //       console.log("Error");
  //       history.push('/'); // api요청이 실패했을때 애러 핸들링 페이지
  //     }
  //   }
    
  //   useEffect(() => {
  //   getToken();
  // }, []);

  return(
    <>
      <div>
         {console.log(query.code)}
         {console.log(error)}
         {console.log(code)}
      </div>
    </>
  );
}

export default Login;