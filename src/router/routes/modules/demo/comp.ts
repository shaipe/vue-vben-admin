import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';

const comp: AppRouteModule = {
  layout: {
    path: '/comp',
    name: 'Comp',
    component: PAGE_LAYOUT_COMPONENT,
    redirect: '/comp/basic',
    meta: {
      icon: 'ant-design:table-outlined',
      title: 'routes.demo.comp.comp',
    },
  },

  routes: [
    {
      path: '/basic',
      name: 'BasicDemo',
      component: () => import('/@/views/demo/comp/button/index.vue'),
      meta: {
        title: 'routes.demo.comp.basic',
      },
    },
    {
      path: '/transition',
      name: 'transitionDemo',
      component: () => import('/@/views/demo/comp/transition/index.vue'),
      meta: {
        title: 'routes.demo.comp.transition',
      },
    },
    {
      path: '/countTo',
      name: 'CountTo',
      component: () => import('/@/views/demo/comp/count-to/index.vue'),
      meta: {
        title: 'routes.demo.comp.countTo',
      },
    },

    {
      path: '/scroll',
      name: 'ScrollDemo',
      redirect: '/comp/scroll/basic',
      meta: {
        title: 'routes.demo.comp.scroll',
      },
      children: [
        {
          path: 'basic',
          name: 'BasicScrollDemo',
          component: () => import('/@/views/demo/comp/scroll/index.vue'),
          meta: {
            title: 'routes.demo.comp.scrollBasic',
          },
        },
        {
          path: 'action',
          name: 'ActionScrollDemo',
          component: () => import('/@/views/demo/comp/scroll/Action.vue'),
          meta: {
            title: 'routes.demo.comp.scrollAction',
          },
        },
        {
          path: 'virtualScroll',
          name: 'VirtualScrollDemo',
          component: () => import('/@/views/demo/comp/scroll/VirtualScroll.vue'),
          meta: {
            title: 'routes.demo.comp.virtualScroll',
          },
        },
      ],
    },

    {
      path: '/modal',
      name: 'ModalDemo',
      component: () => import('/@/views/demo/comp/modal/index.vue'),
      meta: {
        title: 'routes.demo.comp.modal',
      },
    },
    {
      path: '/drawer',
      name: 'DrawerDemo',
      component: () => import('/@/views/demo/comp/drawer/index.vue'),
      meta: {
        title: 'routes.demo.comp.drawer',
      },
    },
    {
      path: '/desc',
      name: 'DescDemo',
      component: () => import('/@/views/demo/comp/desc/index.vue'),
      meta: {
        title: 'routes.demo.comp.desc',
      },
    },

    {
      path: '/lazy',
      name: 'lazyDemo',
      redirect: '/comp/lazy/basic',
      meta: {
        title: 'routes.demo.comp.lazy',
      },
      children: [
        {
          path: 'basic',
          name: 'BasicLazyDemo',
          component: () => import('/@/views/demo/comp/lazy/index.vue'),
          meta: {
            title: 'routes.demo.comp.lazyBasic',
          },
        },
        {
          path: 'transition',
          name: 'BasicTransitionDemo',
          component: () => import('/@/views/demo/comp/lazy/Transition.vue'),
          meta: {
            title: 'routes.demo.comp.lazyTransition',
          },
        },
      ],
    },
    {
      path: '/verify',
      name: 'VerifyDemo',
      redirect: '/comp/verify/drag',
      meta: {
        title: 'routes.demo.comp.verify',
      },
      children: [
        {
          path: 'drag',
          name: 'VerifyDragDemo',
          component: () => import('/@/views/demo/comp/verify/index.vue'),
          meta: {
            title: 'routes.demo.comp.verifyDrag',
          },
        },
        {
          path: 'rotate',
          name: 'VerifyRotateDemo',
          component: () => import('/@/views/demo/comp/verify/Rotate.vue'),
          meta: {
            title: 'routes.demo.comp.verifyRotate',
          },
        },
      ],
    },
    //

    {
      path: '/qrcode',
      name: 'QrCodeDemo',
      component: () => import('/@/views/demo/comp/qrcode/index.vue'),
      meta: {
        title: 'routes.demo.comp.qrcode',
      },
    },
    {
      path: '/strength-meter',
      name: 'StrengthMeterDemo',
      component: () => import('/@/views/demo/comp/strength-meter/index.vue'),
      meta: {
        title: 'routes.demo.comp.strength',
      },
    },
    {
      path: '/upload',
      name: 'UploadDemo',
      component: () => import('/@/views/demo/comp/upload/index.vue'),
      meta: {
        title: 'routes.demo.comp.upload',
      },
    },
  ],
};

export default comp;
