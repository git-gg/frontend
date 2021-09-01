import React, { useEffect } from "react";
import axios from 'axios';
import {CLIENT_ID, CLIENT_SECRET} from "./Oauth";

function Login({ history, location }) {
  const code = new URLSearchParams(window.location.search).get('code');

  const postData = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: code,
    grant_type: 'authorization_code'
  }
  const params = new URLSearchParams(postData).toString();
  //-------------------axios 사용--------------------
  // const axiosConfig = {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   }
  // };
  
  // async function getToken() {
  //   try {
  //     const {data} = await axios.post(
  //       `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?${params}`)
  //       console.log("Success");
  //       console.log(data);
  //       history.push('/'); // 로그인이 완료되면 보여줄 페이지
  //     } catch (error) {
  //       console.log("Error");
  //       history.push('/'); // api요청이 실패했을때 애러 핸들링 페이지
  //     }
  //   }
    
  //   useEffect(() => {
  //   getToken()
  // }, []);

 // ---------- fetch 사용 ----------------------
	// useEffect(() => {
	// 	const reqOpt = {
	// 		method: 'POST',
	// 		headers: { 
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Accept': 'application/json'
  //       // 'Access-Control-Allow-Origin': '*',
  //     },
	// 	};

    
	// 	fetch(`https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?${params}`, reqOpt)
	// 	.then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .then(history.push('/'));
	// }, [])


  return(
    <>
      <div>
         {console.log(code)}
      </div>
    </>
  );
}

export default Login;