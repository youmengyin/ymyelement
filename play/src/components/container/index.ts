import Container from './src/container.vue';
import Aside from './src/aside.vue';
import Footer from './src/footer.vue';
import Header from './src/header.vue';
import Main from './src/main.vue';
import { withInstall, withNoopInstall } from '@ymy/utils';

export const QxContainer = withInstall(Container, {
	Header,
	Main,
	Aside,
	Footer
});
export default QxContainer;
export const QxHeader = withNoopInstall(Header);
export const QxFooter = withNoopInstall(Footer);
export const QxAside = withNoopInstall(Aside);
export const QxMain = withNoopInstall(Main);
