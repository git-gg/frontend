import React from 'react';
import {CLIENT_ID} from './Oauth';

function Home() {
  const codeUrl = `https://github.com/login/oauth/authorize?scope=repo:status%20read:repo_hook%20user:email&client_id=${CLIENT_ID}`;
  return (
    <>
      <div>
        hello world!^^
        <a href={codeUrl}>
          <button>로그인</button>
        </a>
      </div>
    </>
  )
}

export default Home;