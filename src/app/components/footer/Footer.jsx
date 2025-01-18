import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer container mx-auto py-4 px-2">
          <div className="copyright border-t border-gray-600 flex justify-between py-3">
            <p>All Rights Reserved &copy; 2025</p>
            <p>Managed By: <Link href={'#'}>Gurpreet Gumber</Link></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
