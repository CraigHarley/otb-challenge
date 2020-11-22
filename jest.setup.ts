import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {StyleSheetTestUtils} from "aphrodite";

configure({adapter: new Adapter()});

// Aphrodite tries to attach styles to the head, but the head gets torn down async in jsdom.
global.beforeEach(StyleSheetTestUtils.suppressStyleInjection);
global.afterEach(StyleSheetTestUtils.clearBufferAndResumeStyleInjection);
