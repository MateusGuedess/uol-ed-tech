import { usePathname } from "next/navigation";

interface ILayoutProvider {
  children: React.ReactNode;
}

function LayoutProvider({ children }: ILayoutProvider) {
  const pathname = usePathname();
  return (
    <>
      {pathname != "/signin" && pathname != "/signup" && <h1>Header</h1>}
      {children}
      {pathname != "/signin" && pathname != "/signup" && <h1>Footer</h1>}
    </>
  );
}

export default LayoutProvider;
