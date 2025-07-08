import Logo from './Logo';

interface NavProps {

}

export default function Navbar ({}: NavProps)  {


    return (
<div className="navbar justify-between bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><Logo /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Projects</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Websites & Apps</a></li>
            <li><a>Branding</a></li>
            <li><a>Case Study</a></li>
          </ul>
        </details>
      </li>
      <li><a>About</a></li>
      <li><a>Let's Talk</a></li>
    </ul>
  </div>
</div>
    )
}