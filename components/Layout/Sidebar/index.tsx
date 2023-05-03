import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';

export interface MenuItem {
  name: string;
  link: string;
}

export interface SidebarProps {
  children: React.ReactNode;
  menuItems: MenuItem[];
}

export function Sidebar({ children, menuItems }: SidebarProps) {
  const router = useRouter();

  const handleMenuItemClick = (link: string) => {
    router.push(link, undefined, { shallow: true });
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.link}>
              <a onClick={() => handleMenuItemClick(item.link)}>{item.name}</a>
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Sidebar;
