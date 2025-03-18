import { MenuContent, MenuList } from '../../types/types';

export const menuName: MenuList[] = [
  { id: 0, listNumber: 0, contentName: 'help', label: 'Help' },
  { id: 1, listNumber: 1, contentName: 'terms', label: 'Terms' },
];

export const listContent: MenuContent = {
  help: [
    { id: 0, href: '/payment', label: 'Payment' },
    { id: 1, href: '/delivery', label: 'Delivery' },
    { id: 2, href: '/returns', label: 'Returns' },
    { id: 3, href: '/giftCard', label: 'Gift Card' },
    { id: 4, href: '/guestPurchase', label: 'Guest purchase' },
    { id: 5, href: '/electronicReceipt', label: 'Electronic receipt' },
  ],
  terms: [
    { id: 6, href: '/privacyPolicy', label: 'Privacy policy' },
    { id: 7, href: '/cookieSettings', label: 'Cookie settings' },
    { id: 8, href: '/cookiesPolicy', label: 'Cookies policy' },
    { id: 9, href: '/siteMap', label: 'Site Map' },
  ],
};
