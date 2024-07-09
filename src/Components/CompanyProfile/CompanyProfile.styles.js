import styled from "styled-components";
export const CompanyWrapper = styled.div`
  padding: 50px 15px;
  .profile {
    margin-bottom: 30px;
    @media (min-width: 992px) {
      margin-bottom: 50px;
    }
    .bgimg {
    }
    .logo {
      margin-top: -46px;
      @media (min-width: 576px) {
        margin-top: -60px;
      }
      @media (min-width: 992px) {
        margin-top: -100px;
      }
      @media (min-width: 1600px) {
        margin-top: -145px;
      }
      img {
        width: 80px;
        height: 80px;
        @media (min-width: 576px) {
          width: 100px;
          height: 100px;
        }
        @media (min-width: 992px) {
          width: 170px;
          height: 170px;
        }
        @media (min-width: 1240px) {
          width: 230px;
          height: 230px;
        }
        @media (min-width: 1600px) {
          width: 264px;
          height: 264px;
        }
      }
    }
  }
  .InfosysLimited {
    .h1 {
      margin-bottom: 10px;
      display: block;
      @media (min-width: 600px) {
        margin-bottom: 20px;
      }
    }
    .listed {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
      @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      li {
        font-size: 16px;
        line-height: 20px;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
  .about {
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  .Subscription {
    table {
      margin: 0;
      padding: 0;
      width: 100%;
      table-layout: fixed;
    }

    table tr {
      border: 1px solid #ddd;
      padding: 0.35em;
    }

    table th,
    table td {
      padding: 0.625em;
      text-align: center;
    }

    table th {
      font-size: 0.85em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    @media screen and (max-width: 600px) {
      table {
        border: 0;
      }

      table thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      table tr {
        display: block;
        margin-bottom: 0.625em;
      }

      table td {
        display: block;
        font-size: 0.8em;
        text-align: right;
      }

      table td::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }
      table td:last-child {
        border-bottom: 0;
      }
    }
   img{
    margin: 0 ;
    @media (min-width: 600px){
        margin: 0 auto;
    }
   }
  }
  .h2 {
    margin-bottom: 20px;
    display: block;
  }
`;
