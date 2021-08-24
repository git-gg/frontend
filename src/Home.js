import React from 'react';

function Home() {
  return (
    <>
      <div>
        hello world!^^
        <a href="https://github.com/login/oauth/authorize?scope=repo:status%20read:repo_hook%20user:email&client_id=c3185ab770940f72baf0">
          <button>로그인</button>
        </a>
      </div>
    </>
  )
}

export default Home;