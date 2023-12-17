import React from 'react'
import { NotFound404, PageContainer } from './PageStyled';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <PageContainer>
      <div class="notfound">
        <NotFound404>
          <h1>
            4<span></span>4
          </h1>
        </NotFound404>
        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <Link to={"/"} className="custom-link">
          Back to homepage
        </Link>
      </div>
    </PageContainer>
  );
}
