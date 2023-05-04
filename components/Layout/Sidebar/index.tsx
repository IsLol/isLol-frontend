import { useRouter } from 'next/router';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

export interface MenuItem {
  name: string;
  id: string;
}

export interface SidebarProps {
  children: React.ReactNode;
}

const LEFT_MENU: MenuItem[] = [
  {
    name: '관리자 메인화면',
    id: '0',
  },
  {
    name: '회원관리',
    id: '1',
  },
  {
    name: '게시판관리',
    id: '2',
  },
];
const cx = classNames.bind(styles);
export function Sidebar({ children }: SidebarProps) {
  const router = useRouter();

  const handleMenuItemClick = (link: string) => {
    router.push(link, undefined, { shallow: true });
  };

  return (
    <div className={cx('sidebar')}>
      <aside className={cx('sidebar__aside')}>
        <ul>
          {LEFT_MENU.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
