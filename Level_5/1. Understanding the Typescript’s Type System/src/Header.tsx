import { ActiveLink, Link } from "raviger";
import logo from "./logo.svg";

export default function Header(props: { title: string }) {
  return (
    <div className="flex gap-2 items-center m-2">
      <img
        className="h-16 w-16"
        src={logo}
        alt="logo"
        style={{ animation: "spin 2s infinite linear" }}
      />
      {/* Title and Navigation Buttons */}
      <h1 className="text-xl font-bold text-gray-800">{props.title}</h1>
      <ActiveLink
        href="/"
        className="text-gray-800 p-2 m-2 uppercase"
        exactActiveClass="text-blue-600"
      >
        Home
      </ActiveLink>
      <ActiveLink
        href="/form"
        className="text-gray-800 p-2 m-2 uppercase"
        activeClass="text-blue-600"
      >
        Form
      </ActiveLink>
      <Link
        href={`/form/${Number(new Date())}`}
        className="text-gray-800 p-2 m-2 uppercase"
      >
        New Form
      </Link>
    </div>
  );
}
