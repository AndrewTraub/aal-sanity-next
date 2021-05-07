import Link from 'next/link';
//import Image from "next/image";
//import AALLogo from "../images/logo.svg";

export default function Header() {
  return (
      <>
        <h1>
          <Link href="/">
            <a>Austin Accident Lawyer</a>
          </Link>
        </h1>
        <Link href="/">
            {/*<Image src={AALLogo} alt='logo' height={200} width={250} />*/}&nbsp;
        </Link>
      </>
    )
}
