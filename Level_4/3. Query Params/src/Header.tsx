import logo from "./logo.svg";

export default function Header(props: { title: string }) {
  return (
    <div className="flex gap-2 items-center">
      <img
        className="h-16 w-16"
        src={logo}
        alt="logo"
        style={{ animation: "spin 2s infinite linear" }}
      />
      {/* Title and Navigation Buttons */}
      <h1 className="text-xl font-bold text-gray-800">{props.title}</h1>
      <a href="/" className="text-gray-800 p-2 m-2 uppercase">
        Home
      </a>
      <a href="/form" className="text-gray-800 p-2 m-2 uppercase">
        Form
      </a>
    </div>
  );
}
