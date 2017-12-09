/**
 * Created by fisa on 12/10/15.
 */


let newRoutes = {
    '/trinity-tab(/)': 'TrinityTab.index',
    '/admin(/)': 'Admin',
    '/form(/)': 'Index.form',
    '/nested': {
        '/first': 'Nested',
        '/second': 'Nested',
        '/third': 'Nested.third',
        '(/)': 'Nested'
    }
};

export default newRoutes;