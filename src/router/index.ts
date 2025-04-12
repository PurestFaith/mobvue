import type { RouteRecordRaw } from "vue-router"
import { registerNavigationGuard } from "@/router/guard"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH

const VITE_ROUTER_HISTORY = import.meta.env.VITE_ROUTER_HISTORY

/** 系统页面 */
export const systemRoutes: RouteRecordRaw[] = [
  {
    path: "/403",
    component: () => import("@/pages/error/403.vue"),
    name: "403",
    meta: {
      title: "403"
    }
  },
  {
    path: "/404",
    component: () => import("@/pages/error/404.vue"),
    name: "404",
    meta: {
      title: "404"
    },
    alias: "/:pathMatch(.*)*"
  }
]

/** 业务页面 */
export const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
    name: "Login",
    meta: {
      title: "登录"
    }
  },
  {
    path: "/",
    component: () => import("@/pages/home/index.vue"),
    name: "Home",
    meta: {
      title: "任务中心",
      layout: {
        navBar: {
          showNavBar: false,
          showLeftArrow: false
        },
        tabbar: {
          showTabbar: true,
          icon: "apps-o"
        }
      }
    }
  },
  {
    path: "/me",
    component: () => import("@/pages/me/index.vue"),
    name: "Me",
    meta: {
      title: "我的",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: false
        },
        tabbar: {
          showTabbar: true,
          icon: "contact-o"
        },
        footer: true
      }
    }

  },
  {
    path: "/theme",
    component: () => import("@/pages/me/theme.vue"),
    name: "Theme",
    meta: {
      title: "主题设置",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  },
  {
    path: "/inventory",
    component: () => import("@/pages/inventory/index.vue"),
    name: "Inventory",
    meta: {
      title: "详情",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  },
  {
    path: "/task-order",
    component: () => import("@/pages/task/task-order.vue"),
    name: "Task-order",
    meta: {
      title: "盘点列表",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }

      }
    }
  },
  {
    path: "/scan",
    component: () => import("@/pages/scan/index.vue"),
    name: "Scan",
    meta: {
      title: "扫码"
    }
  },
  {
    path: "/scanview",
    component: () => import("@/pages/scan/scanview.vue"),
    name: "Scanview",
    meta: {
      title: "扫码2"
    }
  }
]

/** 路由实例 */
export const router = createRouter({
  history: VITE_ROUTER_HISTORY === "hash" ? createWebHashHistory(VITE_PUBLIC_PATH) : createWebHistory(VITE_PUBLIC_PATH),
  routes: [...systemRoutes, ...routes]
})

// 注册路由导航守卫
registerNavigationGuard(router)
