// 地域
export default [
    {
        path: "/area/list",
        component: resolve => void require(["../components/area/List.vue"], resolve)
    },
    {
        path: '/area/edit',
        component: resolve =>void(require(['../components/area/Edit.vue'], resolve))
    }
];