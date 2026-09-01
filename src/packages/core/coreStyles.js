import { css } from 'lit';

export const coreStyles = css`
  :host {
    display: block;
    font-family: 'Nunito Sans', 'Arial', sans-serif;
  }

  .left {
    left: 0px;
    position: absolute;
  };

  .right {
    right: 0px;
    position: absolute;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    :host {
      --content-font-size: 1rem;
      --header-font-size: 1.2rem;
    }
  }

  @media (min-width: 601px) and (max-width: 1068px) {
    :host {
      --content-font-size: 1.1rem;
      --header-font-size: 1.4rem;
    }
  }

  @media (min-width: 1069px) {
    :host {
      --content-font-size: 1.2rem;
      --header-font-size: 1.6rem;
    }
  }
`;