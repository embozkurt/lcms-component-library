import { css } from 'lit';

export const lcmsButtonStyles = css`
  .lcms-button {
    border: none;
    border-radius: 999px;
    font-family: inherit;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    min-height: 44px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .lcms-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.16);
  }

  .lcms-button--primary {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #fff;
  }

  .lcms-button--secondary {
    background: #80cff3;
    color: #111827;
  }

  .lcms-button--small {
    min-height: 36px;
    padding: 0 14px;
    font-size: 0.9rem;
  }

  .lcms-button--medium {
    min-height: 44px;
    padding: 0 20px;
    font-size: 1rem;
  }

  .lcms-button--large {
    min-height: 52px;
    padding: 0 24px;
    font-size: 1.1rem;
  }

  .lcms-button--full {
    width: 100%;
  }

  .lcms-button__label {
    line-height: 1;
  }

  @media (max-width: 768px) {
    .lcms-button {
      min-height: 40px;
      padding: 0 16px;
    }
  }

  
  .left {
    left: 0px;
    position: absolute;
  };

  .right {
    right: 0px;
    position: absolute;
  }
`;