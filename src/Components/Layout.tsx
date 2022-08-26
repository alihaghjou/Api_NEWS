import { Outlet } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

function Layout() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <main className="min-h-screen bg-zinc-800 px-6 text-neutral-100">
      <header className="border-b-2 border-blue-400 text-center py-8 mb-4">
        <h1 className="text-4xl">News API</h1>
      </header>
      <Outlet />
      <footer className=" py-5 text-center border-t-2 mt-5">
        Copyright &copy; {year}, Designed by Ali
      </footer>
      <div className="fixed right-2 bottom-10 text-slate-100">
        <a href="https://github.com/alihaghjou/API-News">
          <AiFillGithub size="40px" />
        </a>
      </div>
    </main>
  );
}

export default Layout;
