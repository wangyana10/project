import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export let indexRoutes = [{
        path: "/menu",
        component: () =>
            import ("@/views/menu/menu"),
        name: "菜单管理"
    },
    {
        path: "/role",
        component: () =>
            import ("@/views/role/role"),
        name: "角色管理"
    },
    {
        path: "/user",
        component: () =>
            import ("@/views/user/user"),
        name: "管理员管理"
    },
    {
        path: "/cate",
        component: () =>
            import ("@/views/cate/cate"),
        name: "商品分类"
    },
    {
        path: "/specs",
        component: () =>
            import ("@/views/specs/specs"),
        name: "商品规格"
    },
    {
        path: "/goods",
        component: () =>
            import ("@/views/goods/goods"),
        name: "商品管理"
    },
    {
        path: "/banner",
        component: () =>
            import ("@/views/banner/banner"),
        name: "轮播图管理"
    },
    {
        path: "/member",
        component: () =>
            import ("@/views/member/member"),
        name: "会员管理"
    },
    {
        path: "/seck",
        component: () =>
            import ("@/views/seck/seck"),
        name: "秒杀管理"
    }
];
console.log(...indexRoutes, '展开')

const router = new Router({
    routes: [{
            path: "/login",
            component: () =>
                import ("@/pages/login")
        },
        {
            path: "/index",
            component: () =>
                import ("@/pages/index"),
            children: [{
                    path: "/home",
                    component: () =>
                        import ("@/views/home")
                },
                ...indexRoutes,
                {
                    //二级路由重定向
                    path: "",
                    redirect: "/menu"
                }
            ]
        },
        {
            //重定向
            path: "*",
            redirect: "/login"
        }
    ]
});



// 导出路由
export default router