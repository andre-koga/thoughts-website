import Breadcrumbs from "@/app/ui/header/Breadcrumbs";

export default function Header() {
  return (
    <header className="flex flex-col overflow-hidden">
      <div className="flex-grow" />
      <Breadcrumbs />
    </header>
  );
}
