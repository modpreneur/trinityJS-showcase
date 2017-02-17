/**
 * Created by fisa on 12/10/15.
 */

/**
 * Basic description of route describing objects
 * @param path {String} describes path on which action should activate
 *  - used Backbone routing
 *  :id - describes parameter example: "/some/:id/"
 *  (optional) - simple parentheses describe optional part of path - very usefull for trailing slashes
 * @param action {String} ControllerName.actionName  !Note: WITHOUT suffixes ("..Controller", "..Action")
 *
 * !Important Note: Router search for first match in array which means our action will trigger for any route!
 * To fix it: Any other routes should be placed before in array
 * @Example:
 *  [
 *      {
 *          path: '/admin(/)',
 *          action: 'Admin.index'
 *      }, {
 *          path: '(/)',
 *          action: 'Index.index'
 *      },
 *  ]
 */
export default [
    {
        path: '/trinity-tab(/)',
        action: 'TrinityTab.index'
    },
    {
        path: '/admin(/)',
        action: 'Admin'
    },
    {
        path: '/form(/)',
        action: 'Index.form'
    },
    {
        path: '(/)',
        action: 'Index.index'
    },

]