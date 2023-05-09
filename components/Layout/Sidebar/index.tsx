import { useRouter } from 'next/router';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import Typography from '@/components/Typography';

export interface MenuItem {
  menuName: string;
  menuId: string;
}

export interface MenuSubItem {
  menuId: string;
  subMenuName: string;
  subMenuId: string;
}

export interface SidebarProps {
  children: React.ReactNode;
}

const LEFT_MENU: MenuItem[] = [
  {
    menuName: '관리자 메인화면',
    menuId: '100',
  },
  {
    menuName: '회원관리',
    menuId: '101',
  },
  {
    menuName: '게시판관리',
    menuId: '102',
  },
];

const LEFT_SUB_MENU: MenuSubItem[] = [
  {
    menuId: '101',
    subMenuName: '회원리스트',
    subMenuId: '101100',
  },
  {
    menuId: '101',
    subMenuName: '내전참여 현황',
    subMenuId: '101101',
  },
  {
    menuId: '101',
    subMenuName: '명예포인트 현황',
    subMenuId: '101102',
  },
  {
    menuId: '102',
    subMenuName: '게시판관리1',
    subMenuId: '102100',
  },
  {
    menuId: '102',
    subMenuName: '게시판관리2',
    subMenuId: '102101',
  },
  {
    menuId: '102',
    subMenuName: '게시판관리3',
    subMenuId: '102102',
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
            <li key={item.menuId}>
              <div>
                <Typography type="H3">{item.menuName}</Typography>
                <ul>
                  {LEFT_SUB_MENU.map(
                    (subItem) =>
                      item.menuId === subItem.menuId && (
                        <li key={subItem.subMenuId}>
                          <Typography type="B1">
                            {subItem.subMenuName}
                          </Typography>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
