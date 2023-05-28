export type SideBarItemProps = {
  activeTab: string;
  title: string;
  onClickHandler: () => void;
  toHref: string;
  icon: string;
  hasContent: boolean;
  isSideBarOpen: boolean;
};
