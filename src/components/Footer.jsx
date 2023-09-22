import React from "react";
import { NavLink } from "react-browser-router";

const buttons = [
  {
    label: "Track My Order",
  },
  {
    label: "My Account",
  },
  {
    label: "Returns",
  },
  {
    label: "Delivery",
  },
];

const cutomerCare = [
  {
    label: "Help",
    link: "/1",
  },
  {
    label: "Returns",
    link: "/1",
  },
  {
    label: "Delivery Info",
    link: "/1",
  },
  {
    label: "Size Guide",
    link: "/1",
  },
  {
    label: "About Coockies",
    link: "/1",
  },
  {
    label: "Privacy Notice - Updated August 2022",
    link: "/1",
  },
  {
    label: "Terms & Conditions",
    link: "/1",
  },
  {
    label: "Terms Of Use",
    link: "/1",
  },
  {
    label: "Get Exclusive Offers & Updates",
    link: "/1",
  },
];

const aboutUs = [
  {
    label: "About Nasty Gal",
    link: "/1",
  },
  {
    label: "Sustainability Plan",
    link: "/1",
  },
  {
    label: "Careers",
    link: "/1",
  },
  {
    label: "Paypal",
    link: "/1",
  },
  {
    label: "Discount + Promo Codes",
    link: "/1",
  },
  {
    label: "Gift Vouchers",
    link: "/1",
  },
  {
    label: "Environment And Social Responsibility",
    link: "/1",
  },
  {
    label: "Nasty Galaxy",
    link: "/1",
  },
  {
    label: "BCI Membership",
    link: "/1",
  },
];

const Footer = () => {
  return (
    <div className=" mt-10 bg-white">
      <div>
        <div className="flex flex-col justify-between divide-x-2 divide-solid divide-gray-100  lg:flex-row gap-5 md:gap-0">
          <div className=" ml-5 font-sans text-sm flex flex-col ">
            <h1 className=" font-bold">Quick Links</h1>
            <ul className="mt-5 mb-2 sm:mb-3 md:mb-4 lg:m-5">
              {buttons.map((button, i) => (
                <li key={i} className="mt-2">
                  <button className="bg-gray-100 w-full py-2 pl-4 pr-28 flex items-start whitespace-nowrap">
                    {button.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className=" hidden lg:flex">
            <div className=" ml-5 font-sans text-sm">
              <h1 className="font-bold">Customer care</h1>
              <ul className="flex flex-col mt-2 md:-5">
                {cutomerCare.map((cc, i) => (
                  <li>
                    <NavLink key={i} to={cc.link}>
                      <p className=" hover:underline whitespace-nowrap">
                        {cc.label}
                      </p>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" hidden lg:flex">
            <div className=" ml-5 font-sans text-sm">
              <h1 className=" font-bold">About us & more</h1>
              <ul className=" flex flex-col mt-2 md:-5">
                {aboutUs.map((a, i) => (
                  <li>
                    <NavLink key={i} to={a.link}>
                      <p className=" hover:underline whitespace-nowrap">
                        {a.label}
                      </p>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className=" ml-5 mr-20 font-sans text-sm mt-2">
              <h1 className=" font-bold">Join the Party</h1>
              <div className=" flex flex-col items-start mt-4">
                <form>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="E-mail"
                  />
                  <label className=" whitespace-nowrap">
                    <input type="checkbox" className=" mt-5" /> By signing up,
                    you agree to our Privacy <br /> and Cookie Policies
                  </label>
                </form>
                <button className=" mt-5 bg-black text-white px-10 py-2 uppercase">
                  subscribe
                </button>
              </div>
              <div className=" mt-5">
                <h1 className=" font-bold">Follow Us</h1>
                <div className=" flex flex-row mt-4 gap-5 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    focusable="false"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M4.511 28.027V15.311H.228v-4.952h4.283V6.7C4.511 2.462 7.1.153 10.88.153a37.284 37.284 0 0 1 3.826.19v4.428h-2.621c-2.052 0-2.454.981-2.454 2.42v3.156h4.907l-.638 4.964H9.631v12.716"
                      transform="translate(7.772 1.847)"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    focusable="false"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M28.458 3.229a11.839 11.839 0 0 1-3.339.92A5.831 5.831 0 0 0 27.674.924a11.842 11.842 0 0 1-3.7 1.4A5.817 5.817 0 0 0 13.91 6.295a6.277 6.277 0 0 0 .148 1.329A16.417 16.417 0 0 1 2.066 1.571 5.628 5.628 0 0 0 1.272 4.5a5.839 5.839 0 0 0 2.589 4.85 5.9 5.9 0 0 1-2.634-.738v.068a5.824 5.824 0 0 0 4.667 5.712 5.688 5.688 0 0 1-1.533.2 5.591 5.591 0 0 1-1.079-.1 5.834 5.834 0 0 0 5.44 4.043A11.707 11.707 0 0 1 1.5 21.024a11.414 11.414 0 0 1-1.386-.079 16.583 16.583 0 0 0 8.936 2.611c10.709 0 16.557-8.869 16.557-16.545 0-.25 0-.5-.023-.749a11.819 11.819 0 0 0 2.908-3.009z"
                      transform="translate(1.887 3.519)"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    focusable="false"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M14.192.161C10.37.161 9.9.183 8.4.251A10.342 10.342 0 0 0 4.984.9 6.782 6.782 0 0 0 2.5 2.522 6.621 6.621 0 0 0 .881 5.006a10.261 10.261 0 0 0-.652 3.407c-.079 1.506-.09 1.979-.09 5.8S.162 18.509.229 20a10.2 10.2 0 0 0 .652 3.41A6.924 6.924 0 0 0 2.5 25.895a6.77 6.77 0 0 0 2.485 1.619 10.266 10.266 0 0 0 3.406.652c1.507.09 1.979.1 5.8.1s4.295-.022 5.79-.09a10.214 10.214 0 0 0 3.407-.651 6.926 6.926 0 0 0 2.485-1.62 6.767 6.767 0 0 0 1.619-2.485 10.281 10.281 0 0 0 .652-3.406c.09-1.506.1-1.979.1-5.8s-.023-4.295-.09-5.79a10.222 10.222 0 0 0-.654-3.406 6.717 6.717 0 0 0-1.619-2.5A6.782 6.782 0 0 0 23.4.9a10.268 10.268 0 0 0-3.406-.649c-1.507-.079-1.979-.09-5.802-.09zm0 2.529c3.755 0 4.194.022 5.678.09a7.929 7.929 0 0 1 2.608.483A4.577 4.577 0 0 1 24.1 4.309a4.107 4.107 0 0 1 1.045 1.619 7.636 7.636 0 0 1 .484 2.608c.067 1.484.079 1.922.079 5.677s-.023 4.193-.091 5.677a7.822 7.822 0 0 1-.497 2.61 4.439 4.439 0 0 1-1.056 1.619 4.278 4.278 0 0 1-1.619 1.046 7.723 7.723 0 0 1-2.619.483c-1.5.068-1.934.079-5.689.079s-4.193-.022-5.688-.09a7.934 7.934 0 0 1-2.62-.495 4.35 4.35 0 0 1-1.619-1.057 4.3 4.3 0 0 1-1.056-1.619 7.907 7.907 0 0 1-.495-2.619c-.057-1.473-.068-1.934-.068-5.677s.023-4.193.068-5.689a8.728 8.728 0 0 1 .517-2.6 4.22 4.22 0 0 1 1.055-1.617A4.138 4.138 0 0 1 5.85 3.207a7.759 7.759 0 0 1 2.6-.495c1.5-.056 1.933-.067 5.688-.067zm0 4.306a7.217 7.217 0 1 0 7.218 7.217A7.211 7.211 0 0 0 14.192 7zm0 11.905a4.688 4.688 0 1 1 4.689-4.688 4.693 4.693 0 0 1-4.689 4.687zm9.185-12.186a1.686 1.686 0 1 1-1.686-1.687 1.684 1.684 0 0 1 1.686 1.687z"
                      transform="translate(1.861 1.518)"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    focusable="false"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M15.51,0.52c1.58-0.02,3.15-0.01,4.72-0.02c0.1,1.85,0.76,3.73,2.11,5.04c1.35,1.34,3.26,1.96,5.12,2.16v4.87
                                c-1.74-0.06-3.49-0.42-5.07-1.17c-0.69-0.31-1.33-0.71-1.96-1.12c-0.01,3.53,0.01,7.06-0.02,10.57c-0.1,1.69-0.65,3.37-1.63,4.76
                                c-1.58,2.32-4.33,3.83-7.14,3.88c-1.73,0.1-3.46-0.37-4.93-1.24c-2.44-1.44-4.16-4.07-4.41-6.9c-0.02-0.6-0.04-1.21-0.01-1.8
                                c0.22-2.3,1.35-4.49,3.12-5.99c2.01-1.74,4.81-2.57,7.43-2.08c0.02,1.79-0.05,3.58-0.05,5.36c-1.2-0.39-2.6-0.28-3.65,0.45
                                c-0.76,0.5-1.34,1.26-1.64,2.11c-0.25,0.62-0.18,1.29-0.17,1.95c0.29,1.98,2.2,3.65,4.23,3.47c1.35-0.01,2.65-0.8,3.35-1.95
                                c0.23-0.4,0.48-0.81,0.5-1.28c0.12-2.16,0.07-4.31,0.08-6.48C15.5,10.24,15.48,5.38,15.51,0.52L15.51,0.52z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
